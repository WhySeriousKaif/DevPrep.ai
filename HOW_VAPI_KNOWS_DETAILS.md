# How VAPI Knows About Interview Details

## Overview

VAPI receives the interview details (role, experience, topics, type) through **dynamic system messages and metadata** that are sent when creating each call. Here's how it works:

## How the Data Flows

### 1. **User Fills Form (Frontend)**
When a user fills out the AI Interview form, they provide:
- Role/Position (e.g., "Frontend Developer")
- Years of Experience (e.g., 5)
- Interview Type (technical/behavioral/mixed)
- Topics to Focus On (e.g., "React, JavaScript, Node.js")
- Phone Number (e.g., "+1234567890")
- Optional Description

### 2. **Backend Creates Interview Record**
The backend saves this information to the database in the `Interview` model.

### 3. **Dynamic System Message Generation**
The backend **dynamically generates** a comprehensive system message that includes ALL the interview details:

```javascript
const systemMessage = `You are an experienced technical interviewer conducting a ${interviewType} interview for the position of ${role}.

CANDIDATE BACKGROUND:
- Role Applied For: ${role}
- Years of Experience: ${experience} years
- Interview Type: ${interviewType}
- Topics to Focus On: ${topicsToFocus.join(", ")}
${description ? `- Additional Context: ${description}` : ""}

YOUR ROLE:
1. Conduct a professional, structured interview
2. Ask clear, relevant questions based on the candidate's experience level
3. Probe deeper on technical concepts related to: ${topicsToFocus.join(", ")}
...
`;
```

### 4. **Dynamic First Message**
The opening greeting is also customized:

```javascript
const firstMessage = `Hello! Thank you for taking the time today. I'm calling to conduct your technical interview for the ${role} position. I'll be asking you questions about ${topicsToFocus.slice(0, 3).join(", ")} and your ${experience} years of experience. We should take about 20-30 minutes. Are you ready to begin?`;
```

### 5. **VAPI Call Creation**
When creating the VAPI call, the backend sends:

```javascript
{
  assistantId: "0118b024-09d4-4fd8-a8af-356ee6980204",
  customer: {
    number: "+1234567890"  // Phone number
  },
  assistantOverrides: {
    systemMessage: systemMessage,  // ← Contains ALL interview details
    firstMessage: firstMessage,   // ← Customized opening
  },
  metadata: {
    interviewId: "...",
    userId: "...",
    role: role,                  // ← Also in metadata
    experience: experience,        // ← Also in metadata
    interviewType: interviewType, // ← Also in metadata
    topics: topicsToFocus.join(", ") // ← Also in metadata
  }
}
```

## How VAPI Uses This Information

### **assistantOverrides.systemMessage**
- This **replaces/overrides** the default system message in your VAPI Assistant
- VAPI's AI reads this message and knows:
  - What role is being interviewed
  - How many years of experience the candidate has
  - What topics to focus on
  - What type of interview (technical/behavioral/mixed)
  - Any additional context provided

### **assistantOverrides.firstMessage**
- This is the **first thing** the AI says when the call connects
- It's dynamically generated based on interview type
- Includes role, topics, and experience level

### **metadata**
- This is stored with the call for reference
- Can be used in webhooks or callbacks
- Useful for tracking and analytics

## Example Flow

### User Input:
```
Role: "React Developer"
Experience: "3 years"
Type: "technical"
Topics: "React, JavaScript, Redux, Testing"
Phone: "+1234567890"
```

### Generated System Message:
```
You are an experienced technical interviewer conducting a technical interview for the position of React Developer.

CANDIDATE BACKGROUND:
- Role Applied For: React Developer
- Years of Experience: 3 years
- Interview Type: technical
- Topics to Focus On: React, JavaScript, Redux, Testing

YOUR ROLE:
1. Conduct a professional, structured interview
2. Ask clear, relevant questions based on the candidate's 3 years experience level
3. Probe deeper on technical concepts related to: React, JavaScript, Redux, Testing
...
```

### Generated First Message:
```
Hello! Thank you for taking the time today. I'm calling to conduct your technical interview for the React Developer position. I'll be asking you questions about React, JavaScript, Redux and your 3 years of experience. We should take about 20-30 minutes. Are you ready to begin?
```

## Important Notes

1. **Dynamic Override**: Each interview call gets its own customized system message
2. **No Static Configuration Needed**: You don't need to configure each interview type in VAPI dashboard - it's all dynamic
3. **Base Assistant Settings**: Your VAPI Assistant should have a base system message, but it will be overridden per call
4. **Real-time Customization**: The AI adapts its questions based on the specific role, experience level, and topics for each candidate

## Troubleshooting

If VAPI doesn't seem to know the details:

1. **Check Backend Logs**: Look for "Creating VAPI call with data" logs
2. **Verify System Message**: Check if `assistantOverrides.systemMessage` is being sent
3. **Check VAPI Dashboard**: Verify the call was created and check call logs
4. **Phone Number Format**: Ensure phone number is in E.164 format (+1234567890)

