# Deployment & Debugging Walkthrough

## The Issue: "It works locally, but fails on deployment"

We encountered a classic **Cross-Domain Authentication** issue when deploying a split-stack application (Frontend on Vercel, Backend on Render).

### Symptoms
1.  **Frontend:** Dashboard showed "No sessions" or empty data.
2.  **Creation:** "Failed to create room" error.
3.  **Logs:** Render logs showed `MONGO CONNECTED` but no request logs.
4.  **Network Tab:** API requests returned `302 Found` (Redirect) instead of data.

---

## The Root Cause: Cookie Blocking

When your Frontend (`vercel.app`) and Backend (`onrender.com`) are on different domains, they are considered **Cross-Site**.

1.  **Localhost:** Both run on `localhost`, so Cookies work perfectly.
2.  **Production:** Browsers (Chrome/Sappari) **BLOCK** cookies from being sent to a different domain for security/privacy reasons (Blocking Third-Party Cookies).
3.  **Result:** Your Backend received requests with **NO COOKIES**, so it thought you were logged out and tried to redirect you.

---

## The Fix: Bearer Tokens

We moved from **Cookie-based Auth** (Implicit) to **Token-based Auth** (Explicit).

### 1. [axios.js](file:///Users/mdkaif/%20stack%20mern%20prpject/Talent-IQ/frontend/src/lib/axios.js) Interceptor
We created a setup function to intercept every outgoing request.

```javascript
export const setupAxiosInterceptors = (getToken) => {
  axiosInstance.interceptors.request.use(
    async (config) => {
      // Ask Clerk for the temporary session token
      const token = await getToken();
      if (token) {
        // Attach it to the HEADER (which is never blocked)
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }
  );
};
```

### 2. [App.jsx](file:///Users/mdkaif/%20stack%20mern%20prpject/Talent-IQ/frontend/src/App.jsx) Injection
We connected React's Auth state to Axios.

```javascript
  const { getToken } = useAuth();
  
  useEffect(() => {
    // Inject the token getter into Axios
    setupAxiosInterceptors(getToken);
  }, [getToken]);
```

### Why this works
Unlike cookies, **HTTP Headers** (`Authorization: Bearer ...`) are part of the request body you explicitly send. Browsers **do not block** them. The Backend receives the token, Clerk validates it, and logs you in successfully. 🚀
