Hello everyone. So in today's video, we are going to create a multi-agent interview platform using Money Stuck. Alongside, we will use microservices architecture. We will use Redis, Launching Long Graph, and here we will have payment integration.

For that, we will use Reserve Pay, and we will also deploy it on AWS. And its name here is Multi-Agent Interview Platform. So, we will have many agents here, including our Resume Agent, Interview Agent, Feedback Agent, and we have a Roadmap Agent here. So I am very

excited to create this project. So first let's take an overview of the project. Now what do we do here? Let's take a brief overview of our project. We will look at all the agents here, and our website will be named Fresh. And here we have a login button.

And likewise, our project is written here as Multi-Agent Interview Platform. Okay? And you will see some demo of our dashboard in the image here. We have a create interview button here. Something like this. Okay? Here are some

graphs and such. Some data is being shown here. Okay? And now if I go to the agents, we have some specific agents for each task. For instance, we have a Resume Agent that will analyze a resume. An Interview Agent that will conduct interviews for us. It will conduct HR interviews and technical interviews. Okay? There will also be a coding interview here.

Along with this, we have a Feedback Agent. So whatever questions we answer during the interviews, what will it do here? It will provide feedback on those questions' answers, give scores, etc., and prepare a final report for us. Okay? After that, we have a Roadmap Agent where what will happen is if any user wants to generate a roadmap tagged here for any user. Okay? Like

if they want to generate a roadmap for Frontend, then simply what will they do? They will write Frontend there and select how many LPs they need for the job, and as soon as they click to generate the roadmap, a roadmap will be generated for them with the duration specified.

Okay, and some YouTube videos will also be attached to each topic along with some of our notes, etc. So we will look at all these things. First of all, what we do is log in, so we click on Get Started for Free. As soon as we click here,

you will see the button for Google Authentication here, and we are going to use Firebase. So it says Secure Authentication Powered by Firebase. So, simply click on Continue with Google, and let’s authenticate using Google here. Okay? So we click on this

and hit continue. Our dashboard has opened up here. As soon as we log in, our dashboard has opened. And if you look at the bottom left here, we get 150 interview coins.

Okay? And if we click on this, it is written that we have a free package here. We are getting 150 interview coins, and we have claimed them. So the things are showing up like this. Okay? And if I go here, you will see how our coins will be deducted.

So all that is written here. For example, the Resume Builder will take some 10 coins here. To build a resume, the Resume Scorer will take some 10 coins for scoring the resume. Okay? Generating a roadmap will take some 20 coins from us. And the AI interview will take some 50 coins.

हैं। तो वो सब यहां पर लिखा हुआ है। जैसे कि रिज्यूुमे बिल्डर कुछ यहां पर 10 कॉइंस यहां पर लेगा। एक रिज्यूे बिल्ड करने के लिए रिज्यूे स्कोरर कुछ 10 यहां पर लेगा रिज्यूुमे को स्कोर करने के लिए। ठीक है? रोड मैप जनरेट कुछ यहां पर 20 कॉइंस हमारे लेगा। और एआई इंटरव्यू हमारे कुछ 50 कॉइंस

It will take here. Okay? So, here are some of our things. So, if we go back here, what do we do first? We upload our resume and get a score for that resume here. What score is coming for our resume? Okay? So, simply here I click on resume scorer.

So, here I would have already uploaded a resume. This is why the resume scorer is appearing here. So, what do we do here? We upload a new resume here. We re-upload it here. So now what am I doing here? I click on re-upload.

And we bring in the data of a new user here. Okay? So I have a demo resume for a backend developer here. We upload it here and click on analyze resume. So it is analyzing here. And as soon as our analyzing is complete here,

you will see a name appearing here, which is Rahul Sharma, and it is showing him as a backend developer. It has given a score of 85 here. It shows strong here. There are also some strengths mentioned along with it regarding what strengths he has. Weaknesses, etc., are also being shown to us here.

What missing skills are there? What should we learn? All those things are here. And along with this, there are recommendations as well. You can read these. So now what do we do here? We go back out again. This is how we can score our resume. From there, we can find the missing

skills. What are the recommendations? Okay? What are the strengths? What are the weaknesses? We can find out all these things. Okay? And if you look here, we have around 140 interview coins left. Because here, 10 coins have been deducted.

Because we have used our resume scorer in the resume scorer here. So about 10 coins have been deducted here. Okay? And there is also a logout button down here. By clicking on this, we can also log out. So first, let’s do one thing here. Let's start our interview.

Okay? So here we just click on create interview. So here this is our start interview page. What can we do here? We can select our target role. What type of interview do we want to take? So we have two types here. One is a technical interview,

and one is an HR interview. We can use either type here. And see, we uploaded a resume. So it has also detected that resume here. Okay? It’s written here that the resume is ready. So it has also detected it here. If

you want to upload another resume here and don’t want to use this one, you can click here and upload another resume here. Okay? And if you don’t want to use the resume, you can simply click on this, and it will be removed from here. Okay? And now if you want to provide any target role here

like I need a front-end role, so I write it here like front-end depth. So I need to give an interview for a front-end developer. So I can write it here like this. And by clicking on start interview, our interview will also start here. Okay? So now let’s do one thing.

Let’s start our interview here and we’ll see the answers to whatever questions there are. We won’t give answers to some questions. So let’s see what feedback we get. Okay? So you keep looking at everything. What feedback is coming our way? What things

are coming this way. As soon as we click on start, it will take our name. It will welcome us. Okay? All these things. So all these things will happen here. And as we submit the answers, we can also write answers here. If we need to give an answer verbally,

This means that if we need to conduct a face-to-face interview here, we can do that as well. We can also turn on our camera here. Okay? So we can do everything here. Additionally, if we are conducting a technical interview here, we will have some coding questions at the end. For that, we have added a code editor here.

We can write our code in this as well. Okay? And if there is JavaScript code, we can also see its preview. Okay? This means we can also see its output in the terminal here. Okay? These are all the things. So now what do we do here? Let's start our front-end developer interview.

Here we click on this. So start interview, welcome inquish. Let's begin your interview. What is the difference between null and undefined in JavaScript? So look here, in this way, he has.

We can also turn off our mic here. If AI says something, then our mic will be off here. But as soon as we need to say something here, we can turn our mic on or off here. There is also an option for a camera here. If I click on this, we can access our camera here.

So currently our camera is not accessing because we are using the camera in our webcam. For this reason, the camera is not turning on here. Otherwise, our camera will be properly on here. There is no issue here. Okay? First, let's answer this question.

So here we give some answer. Undefined means a variable is declared but has no value. Null, time submitting your answer now, explanation I would like little implementation. So we ran out of time. For this reason.

How to manage state in a React application? So we ran out of time earlier because we pasted something here. So I was explaining things to you. For this reason, time ran out there. So it automatically submitted it here. Okay? But here we give our answer.

For state management, I am using React Redux and Context API. So we gave this that how we can use state management in React. So we said here that for state management I am.

using React Redux here. Here he has written something that I don't know. So here Redux, we can change it in this way too. So here we write React Redux and write Context API here. Here we write Context API. Okay? In this way, and we submit the answer.

Okay? Good explanation. I would have liked a little more depth around the implementation. Explain the concept of a closure in JavaScript and provide an example use case. So look, he has asked us a question.

He has asked us to explain closures and also provide some examples or use cases. So look, these are all things that we can't just say here. We have to write it down. Okay? So we can directly write it down like this here.

Okay? So let me give an answer to this here. So this is something we answer here. Closure lets a function remember variables from its outer scope. Example creating private counters. Okay? This way and we provide a JS.

code, we submit the answer by clicking here. Okay? And after this, we won't give an answer to the next question. Let's see what feedback we will get. After that, some coding questions will also come to us. So first, let's do one thing here.

Let's click on submit answer. Okay? So we are looking at all the possible things here, meaning all the possible conditions can be seen here. Okay? So now we submit the answer here. Nice answering real world make matching.

Describe the process of optimizing the performance of a slow loading React application. We will not answer this question here. Okay? So we will see how we receive a response here if we do not answer this question. Meaning what score.

etc. We will also see all these things here. And what happened to our first question before this? Our time was up. Is that okay? Even though we had written our questions and answers here, our time was up here. So what would he have done there? He must have submitted it directly.

That's fine? So if our time runs out here, it will automatically submit it. If there is some value in the answers, it will submit that answer. If there is no value, then it will simply give a null value here, resulting in nothing coming here. So this is the possible condition we see here; if we do not give an answer here, what will happen.

Okay? So let me fast forward this a little. We quickly reach a second or two.

So there are about 10 seconds left here. And you can see our progress bar is also visible here. Look here, we have reached four questions, and our progress bar has filled up to this point. Time is up, submitting your answer now. No answer provided; it's impossible to assess.

Candidates' knowledge to implement function to the function call, ensuring it is only executed after specified delay. Now we have a coding question here, and according to that, the timer has also been set here. There are about 83 seconds left.

Our time has been set here. Moreover, the level of this question is set to hard. Okay? And its progress bar has reached about five here. There is one last question left after this.

So this question we have here, we give a simple answer here. And where will we give the answer? We have a code editor here. If I click on this, you will see that we have opened a code editor here. Here we can use some JavaScript code. Python or C++ or TypeScript. Okay? So here.

We have a terminal opening for JavaScript. But there is no terminal available for Python here. For JavaScript and C++ because we do not have any compiler here. We are doing things on our browser. So simply, I am bringing some code here. I paste that code here like this and click on run. Okay?

So here it might be giving some errors; it will give some kind of error like this. No problem. We can simply click on add to answer here.

Like this. As soon as we clicked on add to answer, it gave us this answer in our test area. Okay? Now simply we can either press Control and Enter or click on this button. So we press Control and Enter. Good explanation, but some improvements.

For a more robust write function to flustered of arbitrary depth one-dimensional. So again, we have another coding question. Let’s also provide its answer. Okay? And where will we do it? We will give its answer right here. So, simply, we will remove the one we had before.

We remove it like this. So what do we do here? We provide an answer here. I have given one answer like this. Now we can click on add to answer or check by running it. So here, in the output, this output is also giving us some result.

We add this to the answer here like this. So our code has been added to our text area. And writing this code took us some time. So it gave us many seconds here. How much time it gave us. You can easily write the coding answers to whatever coding questions there are.

Accordingly, our timer came here as well. Okay? So this is how we can handle things here. Right now, if I want, I can also turn on my camera and show you here. So as soon as we click on it, you will see that our camera has opened.

And the image that we have, meaning the video we have is playing here at the same time. Okay? So in this way, our camera can also work here. Okay? Okay? So it's simple, I will turn off the camera here. I will bring my face back here to our right side. Okay? So in this way, we can use our camera here.

Okay? So here, to get a realistic feel for the interview, I have added a camera here. Along with this, we have also added a microphone here. We have also added a coding area here. And here we have also answered a question. So it's simple here.

Let's click on submit answer. And after this, as soon as we click on submit answer here, a report will be prepared here. Based on the answers we provided, our entire report will be prepared accordingly. Okay? So let's go to the report area. Let's click on submit answer here.

Great job! Your interview is complete, preparing your report now. So look, our interview has been completed here. So now, please do not comment that you were not giving an interview. You were just writing. So here I was explaining things in detail to you.

What features we have added and so on. That's why I was doing things like this here. But now, our interview report is ready here. Let's take a look at it. Okay? So we can also download it in PDF. Look, the option to download PDF is appearing here. We can click on this and also download it in PDF.

And first of all, here we have received an overall score of around 80. Out of this, we have performed on our six questions. And here the status is complete. Okay? After this, we have some interview summary here. You can read some of the data we have.

After that, we have some strengths. What are our strengths? Good understanding of JavaScript. These are some of our strengths. You can read this. There are some areas of improvement here. For example, the lack of depth in some answers. This means what we did here? We provided some answers in some lines.

Accordingly, it told us what things we should improve. There are some recommendations here. You can also read those here. Now, whatever questions we provided here, first of all, see that here our first question,

the answer we provided is written here first, okay? After this, our answer was automatically submitted as soon as our time was up here. So, our answer was automatically submitted there, but we had provided an answer there, that’s why it is written here.

Good explanation. Okay? In this way, we received some AI feedback here, so we are getting suggested improvements with each question. So here we are getting individual scores for each question. Okay? With each question.

With each question, we are receiving suggested improvements here. This is the feedback we are getting. The second question is something we provided here. We also received a score for this.

After this, the third question was what we did here? Here we provided an answer to this question. Okay? We provided some use cases, etc. The fourth answer was, look, now here the fourth answer was where we did not provide an answer.

Okay? And it is written here: no answer provided, time’s over. Okay? Here neither did we provide an answer nor was our time completely over. Okay? So, it is written here: no answer was provided. Okay? This is what is being recorded here. Along with this, the score we received was zero because we did not provide any answer.

In the suggested improvements, it says provide an answer, explain the process, give examples, all this is being recorded here. After this, for our fifth question, which was a coding question, we wrote our answer here. According to this, we received the scores here. An AI feedback suggested role and...

Along with that, the last question is also ours where we found all these things here. Okay? So, we have prepared a report here. We can also download this report in PDF. Okay? If I click on download PDF here, an option will open up for us. Look, your PDFs will look like this.

If I scroll down here, a best PDF has been created for us. Everything is displayed here nicely, every single thing is shown well here. We can save it in PDF this way. So, let’s click on the simple save button here. So, let's save it as Freshers AI.

Okay? So, as soon as we click this, it should be saved. If we want, we can also view it. So, let's write here like this – Freshers AI PDF. Look, we can open the Freshers AI PDF here. Something like this, we have received a PDF here.

Okay? It has been downloaded. We have downloaded a PDF successfully. Okay? Let's cut this. So, this is done. Now let's click back directly. So, we have come back to our dashboard. And you can see here that the total interviews.

There is one interview here. The questions we solved here are six. Within the complete date, one interview is complete here. Our average score is 80 here. Okay? And so far we have only taken our technical interview. So, its number is coming as one technical interview.

And here the graph for the technical interview has been completed. And according to correctness, clarity, creativity, problem-solving, communication, our scores have been added which are being shown in our interview history. Like.

If we give any HR interview here, then automatically all this will show up in the HR interview graph as well. Okay? You will see that we have 120 coins left here. So here are some 120 coins remaining. Okay? So here.

Basically, it has subtracted 20 coins from the interview. So we will correct this. We will subtract 50 coins here. Okay? In interviews, we will do it here and along with that we had downloaded our PDF, so there are again 10 points subtracted here.

So we have 120 interview coins left here. Okay? This is how everything works. Now I have an option for a resume builder. There’s also a roadmap builder. So what do we do first? Let's take a look at our roadmap builder first. After that, we will do our resume builder.

Okay? First, let’s click on the roadmap builder. So, an interface for our roadmap builder has opened up here. Where we have an input area. Here we can select how much CTC job we need. By clicking here,

we can add our resume. According to that, our roadmap will be generated. Okay? So first, I want to write that I need a front-end developer job here for 10 LPA. And simply I click on generate here. Okay? So let's click on generate.

So, our API will fetch and our roadmap agent will work here. Okay? Our roadmap agent has given us a response here and has mentioned that this is a 12-month duration. That we will need to learn things for 12 months here.

Okay? Here we have 10 topics. The difficulty is intermediate, so it is also stating that the difficulty of our front-end developer roadmap is intermediate. Along with that, we have received lectures as well. Like.

An introduction to HTML, CSS, CSS fundamentals, JavaScript basics. Okay? And DOM manipulation, all these are our topics – state management, responsive web design, okay? Testing, debugging, these are all about 10.

We have topics. So what do I do first? I click on our Introduction to HTML. So here there is an option to watch a tutorial where any YouTube video will open for us and there is an option to read articles. First, what do we do here? We click on Watch Interview and let’s see.

Which tutorial opens here? Okay? We click on it. In this one video, you can see what it has done? Our HTML video has opened up here. Okay? It has opened it up like this. Now,

I’ll remove this from here. Along with that, there is an option to read articles here. Let’s click on this. You can see that the HTML documentation has opened for us here. We can read the HTML documentation from here. Okay? So this way we have things.

We have videos on CSS here. Similarly, there are JavaScript videos here. Okay? This means that we are getting videos along with everyone. So we will use YouTube's API to get videos. Okay? For reading articles. So here we have.

Different agents that are working on these things. We have a roadmap agent that generates a roadmap for us. There is a resume agent that scores our resume. It is telling us our missing skills. We have an interview agent. So here we have an interview agent that is conducting.

HR interviews and technical interviews for us. Also, we have a feedback agent here that prepares a report for us after the interview. Okay? These things and if I cross this out, all these things are removed. And if I want to see whatever roadmap we have generated,

if I want to see them, I can click on history here and we can view them again this way. Okay? Everything. So all these things are also being saved in our history. Okay? Now let's go back here. So what have we seen so far? We have seen our resume scorer.

We have created our interview here. We have generated our roadmap here. Now what do I do here? I want to look at the resume builder here. Okay? Let's try to build a resume here. Okay? So as soon as we come here, we have some six steps here. First,

there is a personal info option. If I go here, I can provide some personal info like this. And now what do I do? I click on the next button. So now a professional summary has come up here. So let's add a

professional summary here. We write all these things and click on next here. Okay? Now let’s add some skills. So we can add some skills in here. Right now let’s add about four skills here.

We can also write React here. So we write React like this. Okay? And then let’s write JS here like this. So this way we can add things here. After this, let’s click on next like this. Now here it is

asking us what is your work experience? Okay? So we can also add our work experience here. And before filling all these things, if I click on the preview button here, then all the things we have done so far are set here.

Look here, the name Ankur is set. After that here are the virtual courses, some emails, all these things are showing links. LinkedIn's link is appearing. Location is coming up. Phone number is coming. So this is our way. So we are not making any fancy resume here.

What are we doing here? There is our ATS standard here. We are following it. Okay? The resume in this standard is quite normal. Okay? Because if you go for any job interviews, you need to upload your resume there.

So what does AI do? It analyzes that resume. So the fancy resumes sometimes get rejected by AI. Okay? For this reason, if you follow the ATS standard, your resume will never get rejected here.

According to that standard, what have I done here? I have created a template for my resume here. We keep adding things, and we can also download it in PDF. So far, we have included technical skills in it. Accordingly, it has taken things here. Okay? If I

click on Back to Edit, what do we do now? Here we write some demo text. Okay? We write the company name here, let's write it like this: M.E.R Man Stack, Man Stack Mustac, and add some date from January 2020 to December 45 here. Now we are in the future.

So we give a future date here, okay? And we can write anything here followed by the description, we can write anything here, okay? So let’s write, did nothing, just had fun. Let's write this here like this, okay? In the description, I mean, we didn’t do anything in the demo tag. We only

had fun here. After that, we can write anything else here. Like writing the company name. And now let’s click on next. Now we have the option for projects. We can add the projects we have created here. So first of all, we created a project named Fresh AI.

So let’s write here that we created a project called Fresh AI. In the tech stack, we have used Man Stack. So let’s write it like this: Man Stack. Okay? Let’s put a comma here followed by AWS. After that, we need to add a Redash getup link here. So let’s write

it like this: Slash whatever its name is, Fresh AI, let’s write it like this: Fresh AI so we also add a getup link like this. Okay? Then in the description, we write AI-powered interview platform. We can write multi-agent interview platform like this.

Okay? After that, again, if we want to add any project, we can do that as well. And we click next here. Okay? After that, there is an option for education. So let’s write something here and if you want to create a correct resume, you should fill in accurate details.

Okay? I am just showing you a demo here, that's why I am writing like this. Okay? So we have done a lot here. We can also add our education, we can add more education. So everything I have written here is just for you to see. You can modify the content according to your needs.

Add your name and other details. Then you can add your professional summary. You can add skills too. Okay? You can add work experience, etc. You can add projects, education, etc. Okay? You can add them according to your needs. And as soon as you click on your preview resume, your resume will be ready here.

Okay? So here is how the resume looks. You can also download it. So we have prepared some resumes here. Okay? And as we add more elements, this A4-sized page will get filled up here. First, click on this button to download PDF. So this is how we can download a PDF version of our resume.

डाउनलोड भी कर सकते हो। तो ये कुछ रिज्यूे हमारा यहां पर रेडी हो चुका है। ठीक है? और जैसे-जैसे अगर हम और भी चीजें यहां पर डालें तो हमारा यह पेज जो A4 साइज का है वो यहां पर फिल हो जाएगा। ठीक है? सबसे पहले यहां पर इस बटन पे क्लिक कर देते हैं डाउनलोड पीडीएफ पे। तो इस तरह से हमारे एक रिज्यूे की पीडीएफ को यहां पर डाउनलोड भी

We can do this. So in this way, we can save it. So let's write something here like this and also write the resume here. Okay? Let's save it. So in this way, we can also save our resume. Okay? We have done this much work here. So now this much work has been completed here. We have 

saved this here and now we will go out for a bit. So we have some 90 interview coins left here. Because we have already used them. So everything is working here properly. Our interview is working properly. Our resume builder is working properly. The roadmap 

builder, resume scorer. Okay? Everything here is working properly. So what do I do here? So now what do we do here? Let's purchase our interview coins and see here. So we click on buy now. So here we are using Razorpay

 payment gateway. So accordingly, we will do things here. As soon as I click on this payment, a popup has appeared for our user pay here. Where we will make the payment and here we will make the payment and add our interview coins. Okay? So this is our black and white theme. So according to that 

we can also change the theme here. Okay? Let's add a dummy card here. Okay? So if we search for a Razorpay dummy card here, an option for a Razorpay dummy card is coming up. Let's put a dummy card here. Okay? So all of this is for testing,

 so let's copy it to paste it here. Okay? And we need to provide a future date, so we will put it here. Let's write something like 1 2 3 here. So right now we are adding a dummy card here. Accordingly, we are doing things here. And 

currently, we are running in test mode. Okay? So none of our actual payments will be deducted here. Let's click on continue. So here our fresher AI has a payment of 199 here. Okay? And we have a dummy account here. So look, we haven’t added any bank account here.

 So there's a simple direct success option appearing here. Because we are currently running in test mode. If you want everything to be actual payment, what do you need to do? You will need to set up the entire order account here and not run it in test mode. You need to 

run it in live mode. So your actual payment will also happen here. Okay? So see this way payment successful is coming up here. Let's click on okay on this. So you will see that about 300 interview coins have already been added here. If you look here, 390 

coins have been added here. Okay? So in this way, we can also purchase our coins here. Okay? So we have tried to create an app together here. As we are using the service here, we will need to pay for it. Okay? So this entire process is working properly here.

If I click on this logout button here, we have logged out properly here. Okay? So if you like this project, please subscribe to the channel. Like the video. Let’s move on to the next part of the video. So let’s begin. We have arrived at BS

 code and we have a folder open here called advanced AI projects, and there is already a project uploaded here which is our Cox AI, which is a multi-agent AI platform. Okay? So what will we do here? We will create another folder here which will be our 

Fresher.AI because our project name is going to be Fresher AI, so let's create a folder here. Okay? So here we will simply create a new folder which we will name 2.Fresher AI and click enter. So we have 

created our folder here. Now what will we do here? We will make two folders here. One will be our backend folder and the other will be our frontend folder. Okay? So here we will go ahead and create the two folders. Inside which? Our 2.Fresher AI.

Inside. Alright? So here we create another folder named Backend. So let's write Backend here and now we will create another folder inside 2 Dot Fresh AI again. We will name it Frontend because that's where our

We will create all the Frontend stuff inside the Frontend folder and we will create a gateway inside the Backend, and we will build our microservices architecture here. We will also create a separate service folder, so we will do all this work in our Backend before proceeding with our video.

First, let's talk about a few things regarding AI because nowadays everyone is talking about it, but in between, there's a term that comes up quite often called Agentic AI. If understood in simple language, what does AI do? If we ask it any questions, it directly

gives us the answer. Alright? But the limitation of Agentic AI doesn't stop there. It doesn't just provide answers. It can do research for us, planning, use tools for us, and can also assist us with many of our tasks. And this is why many

companies are exploring this technology. So if you are interested in AI too, it's a great time for you. You can explore it. You can learn about it. Recently, I found out about a platform called

Simply Learn, offering an Agentic AI course. So we have arrived at the official website of Simply Learn, where you will see many AI and Agentic AI courses listed on their website. You can log in here as well and many people find this

an issue that either the courses here are too technical or they're so basic that people don't understand practical knowledge. But what I liked about Simply Learn is that the online learning is taught in a very structured way, and I liked three things about it. First, here,

things are explained through projects and real-world examples. Second, there are many beginner-friendly courses available. Even if you are new here, you can still learn things. And third, whether you are a student or a working professional, or if you want to upgrade your skills, this

platform is quite suitable. You can explore many courses here. You will see categories here. You can explore many courses here. So if you want to learn AI and Agentic AI, you should definitely check out this platform here.

You will find the link in the description. Otherwise, you can search on Google for Simply Learn Agentic AI course. You will find this course here. So let's move forward in our video. First, let's do something. What do we do inside our Backend folder? Let's create some more folders again. Alright?

For example, I am creating one named Gateway. Because through this Gateway, what will we do? We will access our services. This means that we will make requests to the services through this Gateway. Alright? So let’s create one Gateway here. After that, let's create another folder that will be named

Services. So, let's create a service folder here where all our services will be placed, such as another service might be an Interview Service, and any other services we create in the future will be here. Alright? We will create those services inside this folder and alright? We will do all this

काम हम यहां पर करेंगे। सबसे पहले यहां पर क्या करते हैं? अपने गेटवे वाले फोल्डर के अंदर जाते हैं और अपना एक सर्वर यहां पर क्रिएट करते हैं। ठीक है? तो एक सर्वर हम यहां पर क्रिएट करेंगे और उसके बाद कई सारी हम सर्विसेज बनाएंगे। जैसे कि और सर्विस भी हम बनाएंगे। उसके अंदर भी एक सर्वर क्रिएट करेंगे और उस सर्वर पर

Where will we make the request from? We will make it from our gateway. Alright? So this is how it works in a microservice architecture. So if you want to learn all these things in detail, you can check out our advanced backend course. First of all, let's do one thing here. Let’s open our terminal and our...

We create a server inside our gateway here. Alright? So where are we right now? You can see here that we are inside the D drive in the Desktop, under the Advanced AI Man projects, meaning that we are now at the top. Alright? Now I first need to go to one of these two...

I can go to either one. So I need to go to 2.Fresher AI. For that, we will use 'cd' here and we will go to 2.Fresher AI. Alright? Let's write Fresher AI here and click Enter. So we have now entered 2.Fresher AI. And...

After that, you can see here that we have arrived. Now where do I need to go? Look, we will need to go inside the backend afterwards. Then inside the backend, we have a gateway that we need to go to. So first we will again use 'cd' and go into our backend folder. So we have reached the backend...

And after that, again if we use 'cd'. So just as I use 'cd' here, now I need to go inside the gateway. So I will write it here like this: gateway. So we have now entered our gateway folder. Look, Advanced AI Man projects here at 2.Fresher AI backend...

gateway. So we have reached the gateway folder here. Now what do I need to do? I need to create a server. So before that, I will write 'npm install' and I will bring a package.json file here. So first it is asking us what your package name will be, which will be gateway. So we will confirm that. Our version will start at 1.0.0. No need to provide a description. We will create an entry point here as index.js and everything else is fine. We will take it the same way. No problem. Now let's click yes directly...

and press Enter. So what will happen with this is that a package.json file will be created in our gateway. Look, if I scroll down a bit, we have now got the package.json file here. Now what do we need to do here? We need to install some packages here. If I need to create a server here, I will use Express. Alright? So we will have to create an Express package here. We will not connect any database here because we will connect the database etc. in our services and will connect it inside the interview service. So here...

there is no need for Mongoose. But we will need a cookie parser here. We will need it here. Alright? So there are some packages that we will install here. Alright? So I am going here and first let’s clear it this way. Let’s move a bit up. Alright? Let’s take this a little up. This way, now here...

I write 'npm install' or you can also write 'i' like this. First, we will write express here. We will go ahead with Express. After that, we will install a cors package here. So when we connect the frontend to the server, the backend, at that time the cors package...

will be useful for us. There we will give the origin of the frontend like this. So we will install this. Along with it, we will also install the cookie parser. So let's also install the cookie parser package here. This will allow us to get our session...

when we do authentication. So we will get a session. It will be stored in the cookie and to access it, we will use the cookie parser. Alright? So let's install this. Along with it, let's install the ENB package. Alright? Now here we are creating a new project.

हमारे काम में आता है। वहां पर हम ओरिजिन दे देते हैं फ्रंट एंड का इस तरह से। तो यह इसको हम इंस्टॉल कर लेते हैं। साथ में एक होता है हमारा कुकी पार्सर। तो कुकी पार्सर को भी यहां पर कर लेते हैं। कुकी पार्सर वाले पैकेज को भी इंस्टॉल कर लेते हैं। जिससे हम यहां पर अपने सेशन को गेट

कर पाएंगे। तो एक सेशन जब हम ऑथेंटिकेशन कराएंगे तो हमें सेशन मिलेगा। उसको कुकी के अंदर स्टोर कराएंगे और उसको एक्सेस करने के लिए हम कुकी पार्सल का यूज़ करेंगे। ठीक है? तो इसको इंस्टॉल कर लेते हैं। उसके साथ ENB पैकेज को इंस्टॉल कर लेते हैं। ठीक है? अब यहां पर तो यहां तो हम अपना एक न्यू प्रोजेक्ट बना रहे हैं।

So it won't be here. Let's install the package. Okay? Along with that, we have a package named Morgan. We have a Morgan package. And what is this Morgan package used for? Let's understand that a bit. Okay? So if there is any API, meaning that if any 

request is made at our gateway. Okay? If any request is through our gateway, then all the requests made there will be shown to us here in the terminal. Okay? Did this request succeed or not? Whether it failed, got folded or anything else

The status and everything will be shown to us here on its terminal. So for that, we will also install a Morgan package here. And after that, we have a package called Express HTTP Proxy. Okay? So this is a main package.

Express HTTP Proxy is what we will use here to access our service through our gateway. Okay? Or you can say that any request to our service will go through our gateway. So to connect them together,

to reach that request, we will use an HTTP Express proxy package here. So let's press enter. All the packages here will be installed. We will have a node_modules here. A package-lock.json will be made. Okay? So all these are installed.

If I scroll down a bit here, you will see that some packages have been installed here that are appearing in our dependencies. First of all, we have a cookie parser. There is a cors package. There's an env package. An express package. An express HTTP proxy and a Morgan.

And we need to install one more package. Let's do that as well. So here I will again run npm install. One package is left. First, let's clear this. Okay? Like this. Now let's install npm. Let's install one more package.

Okay? Now what does this node-mon package do? So if we make any changes inside the server. Okay? What it will do? It will automatically run our server again through node-mon. Okay? So we won't have to keep writing npm run dev here again and again.

So currently, writing npm run dev doesn't make any sense because it won't run anyway. So before that, what do we do? We create a file named index.js inside the gateway. Okay? Let's create a file named index.js.

And to run this server, first, we write a script here called dev script. Okay?

What will we write inside? So here we have used our installed node-mon package. We will use that. Likewise, if we want to run the server here npm run dev. So we have given a dev script here. So if we write npm run dev, what will it do? It will run whatever script is inside this dev.

So here we give a script note index.js. So the server defined in our index.js will run here. Okay? By doing this, we are using the node-mon package, which will automatically run our server. So here,

instead of node, we will just write node-mon like this. Okay? So that will be fine. And along with that, we need to make some changes here. For example, you will see that under type, we have common JS. So if we want to use our syntax here, to import a package,

there is a syntax: import express from express or import this package from this package. Okay? If we want to install it here like this we have to import it, so instead of common JS, we use the module here. Okay? We use the module.

Alright. That's great. So we have done so much work here. Now what do we do here? We create a new server. So first, we remove this from here. We create a server inside index.js. So what I do first is import Express. Where do we do that?

It will come from our Express. So we write Express here. Okay? Now let's initialize an app through Express. So we write app equal to Express here. This way we can initialize an app. Okay? Now, what do we do here? Through this app, we...

will handle requests. We will make this app listen on some port and run our server here. So, let's do that. First, what do we do here? We take a port like this, and let’s say we take port 8000. Okay? We assign 8000 as the port.

And we make our app listen on that. Then we will make a request. We will make a GET request. This will help us determine whether our server is running properly or not. Okay? And first, let’s make the app listen. We do app.listen here. Now first we need to provide a callback. Okay? This...

is how we write it. Okay? We need to provide all these things. So first we give it a port. So which port do we give? The same port we initialized above. We'll provide that port here. And now we create a callback function like this. Okay? And along with that...

let's do something. We will log some data to the console here. So I write using backticks. And here, I will write Gateway started. The gateway will be starting on some port. So we will print that port. Now if I write like this with a dollar sign...

whatever the value of the port will be, it will print here. The message will come as 'Gateway started on port'. We will write it like this, and now what do we do? We make a GET request using app.get here. Where do we make the request? We do it on our slash here.

Okay? So we do it like this, and then we create a callback function here. We take request and response like this, and now what do I do inside? I can send anything back. So here we write response.send like this, and what do we want to send back? So let's write 'Hello from Gateway.' We write like this 'Hello from Gateway' so that we can see if our gateway is started.

So we have done some work here. First, now what do we do? We run our server. To run the server, we need to use npm run and then provide a script, which we have written inside package.json.

Inside there, we have a dev script that will run nodemon. So here we write a dev script. Like this, I wrote dev here and clicked enter. So you can see here what has run. A dev script has run here. Here it shows that it is executing index.js for us.

And you can see that it has run index.js for us. It's going to run index.js. But here we’ve used nodemon. So if we change anything here...

the server will automatically run. Okay? And here you will see 'Gateway started on port' showing whatever our port 8000 is. That is being printed here because we logged it in the console when we were making the app listen. Okay? 'Gateway started on port' is showing whatever...

is 8000 and it has been printed here. So our work is happening here. Okay? If I go to any browser and we can check the GET request on the browser. So we write here. So if I write like this localhost or you can write this as well.

So if I write http://localhost:8000 here, the request will happen right here, so we click enter.

So let's remove this and click enter here, then you will see that it is coming up here saying hello from gateway. What it means is that our server is correctly receiving gate requests and our server has also run. Alright? So we have done this much work here. Our server is

Now running here. Alright? We have managed to run our gateway here. Now first of all, I will do one thing. The port we are providing here in this way, we will not give it like this. Alright? This port is a sensitive information. We will keep it inside our enB. Alright? So we go inside the gateway and first of all create a

file here, so we need to write it this way, then we click 

इंस्टॉल किया था। तो इसलिए हम यहां पर इसको लिख पा रहे हैं। ठीक है? अब इसको हमें यूज़ किस तरह से करना है? तो यह काम भी कर लेते हैं। अगर आप हमारे चैनल को बहुत पहले से फॉलो कर रहे हैं तो आपके लिए यह सब चीजें बहुत आसान है। बट फिर भी हम यहां पर डिटेल में यहां पर चलेंगे। कोई दिक्कत नहीं है। अगर आपको आता है तो आपको

बहुत बढ़िया है। अगर नहीं आता तो धीरे-धीरे यहां पर चलेंगे। ठीक है? तो इंपोर्ट करते हैं यहां पर को और फ्रॉम कहां से करेंगे? तो फ्रॉम यहां पर कर लेते हैं जो भी पैकेज है वहां से इसको इंपोर्ट कर लेते हैं। और लास्ट में यहां पर क्या करना पड़ेगा? ENB डॉट कॉन्फिगर और इसको

करना पड़ेगा। तो ENB डॉट कॉन्फ़िग कर लेते हैं इसको उस तरह से। ठीक है? तो ये काम हमने कर लिया। ठीक है? जिससे यहां पर हमारा Eenb को हम यहां पर एक्सेस कर पाएंगे। तो अपने इंडेक्स डॉट जेS के अंदर मतलब कि पूरे गेटवे के अंदर एक्सेस कर पाएंगे। ठीक है? इस तरह से। अब यहां पर 8000 पोर्ट हम नहीं लिखेंगे। हम कहां से

पोर्ट अपना लेके आएंगे? हम पोर्ट लेकर आएंगे अपनेenबी से। तो उसके लिए यहां पर होता है प्रोसेस. Enb डॉट अब जो भी वहां पर नेम लिखा है हमने। देखो जैसे कि हमने यहां पर एक पोर्ट लिखा है। पी ओ आर टी कैपिटल में है। इस तरह से लिखा है हमने। सेम उसी तरह से हम यहां पर लिखेंगे पी ओ आर टी पोर्ट लिखेंगे

इस तरह से। और अगर बाय चांस हमें ये पोर्ट नहीं मिलता है तो एक दे देते हैं हमको 6000 पोर्ट और यहां पर दे देते हैं इस तरह से। ठीक है? पहले वो इसको चेक करेगा कि हमारा से पोर्ट आ रहा है कि नहीं। अगर यहां पर नहीं आएगा वो 6000 पोर्ट पे रन कर देगा। ठीक है? इस तरह से ये कुछ। तो अब यहां पर देख पाओगे आप अगर मैं यहां पर

जाता हूं तो देखो जैसे ही मैंने यहां पर गया तो यहां पर ऑटोमेटिक हमारा सर्वर रन हो चुका है। हमने कोई भी एनबीएम रन डैम यहां पर नहीं किया। किसके थ्रू हुआ? नोट वन के थ्रू। ठीक है? और साथ में यहां पर 8000 पोर्ट यहां पर है। जबकि हमने यहां पर कहीं पे 8000 लिखा नहीं। ये हमारा कहां से

आ रहा है? ENB से आ रहा है। ठीक है? तो हमारा पोर्ट यहां पर रन हो चुका है। इसको यहां पे हटा लेते हैं। बढ़िया तरीके से हमारा चीजें काम कर रही हैं। अब यहां पर मैं क्या करता हूं? अपनी सर्विज को बनाना स्टार्ट करता हूं। सबसे पहले हम यहां पर क्या करते हैं? अपनी एक ऑथ सर्विस को यहां पर बनाना स्टार्ट करेंगे और ऑथ सर्विस को

हम क्या करेंगे? अपने गेटवे के थ्रू एक्सेस करेंगे। ठीक है? गेटवे के थ्रू एक्सेस करेंगे। कैसे करेंगे गेटवे के थ्रू? उसको जरा समझते हैं। उससे पहले हम यहां पर क्या करते हैं? सबसे पहले हम यहां पर अपना एक और सर्विस बनाते हैं। उसके अंदर भी यहां पर एक सर्वर क्रिएट करते हैं और सारी चीजें यहां पर करते हैं। ठीक है?

उसके बाद हम यहां पर क्या कराएंगे? अपने गेटवे के थ्रू अपने सर्वर को एक्सेस कराएंगे। गेटवे के थ्रू अपनी सर्विज को एक्सेस कराएंगे। ठीक है? तो यह काम जरा कर लेते हैं। सबसे पहले मैं यहां जाता हूं और अपना एक न्यू यहां पर एक फोल्डर बनाता हूं जिसको नाम मैं दूंगा यहां पर ओथ। ठीक है?

ऑथ ही दे देते हैं। वैसे ऑथ सर्विस भी लिख सकते हैं। बट यहां पर ऑथ लिख देते हैं। ठीक है? और अब इस ऑथ के अंदर भी हमें यहां पर क्या करना है? कुछ अपने पैकेजेस को इंस्टॉल करना है। यहां पर एनपीएम कराना है। तो सारी चीजें यहां पर कर लेते हैं। ठीक है? फिर उसके बाद हम आगे बढ़ेंगे। ठीक है? सबसे पहले यहां पर क्या करते हैं? एक

And the power cell brings its own. Let's open another terminal here. First of all, where are we here? You can see that we are currently inside our Advanced AI project. Alright? The Advance AI project is here. So, this is how we write the CD. First, we write CD here. We come to here 2 dot A.

We come to the Fresher AI. Here I write Fresher AI and we put a slash right here. Alright? We directly put a direct slash right here. Now we go inside the backend. We have entered the backend like this. Again, we will put a slash here. Now, look inside the backend there is a.

So there is a Gateway folder. One is our Services. So where do we need to go? We have to go to Auth after Services. So I write Services here after the backend and again put a slash here and write Auth and click enter. So you will see that we.

have arrived here. If I go a little here, you will see that we have first come within the Advanced AI project to the Fresher AI. After that, we have entered the backend, then into Services, and now we have arrived at Auth. Alright? We have accessed it directly.

So, what will we do here? Here we write like this. One second, where did this come? First, let's clear this for a second like this. Now okay. So what do we do here? We run npm init. So I write here.

it. Alright? So basically, we are going to create a server in the Services folder inside an Auth folder. From which we will handle whatever authentication is needed, whether it’s logging in, alright? logging out, or updating anything for our users or creating a user model.

Where will we do all these things? We will do it inside our Auth service. So we run npm init like this. Alright? So now that we have run npm init, our package.js will be created here. First of all, it is asking what will be the name of our package? So it will be Auth and its version will be.

1.0.0. The same for all here. We click enter and click yes here like this and click enter. Alright? First, let’s clear this so that you can see things here. So you will see here an Auth package.json has come to us here. Now there are some.

packages that we need to install here. So first, I write npm install like this. First, we need to create a server. We will create a server through express here. Alright? After that, we also need to install a notebon package here.

We need to install a package here with Notebon. Alright? We need to install all these things. Additionally, we need to use a mongoose package here. Because through MongoDB we will connect to it here. So for that,

there is a mongoose package. We can connect through mongoose.connect. If we want to create any model, we can create it through mongoose.create. Alright? All these things we have here. If we want to do anything with MongoDB,

we will do it through mongoose. So let's install mongoose. Alright? And also let's install our cookie parser here like this. Alright? Because when we log in, we will need a session. Alright? We will store it in our cookies. Alright?

I mean we will store it in cookies and access everything from cookies. So what do we need to do here? We will need to install our cookie parser too. So let’s do all these things and click enter. So with this, we will have one Node module.

Alright? We will have a package lock. And some of our packages will be installed here. Alright? If I go, there is cookie parser, express, mongoose, and nodemon in the dependencies. Alright? We have all these. Let me clear this. Let's go up.

Okay? We have come here now. So what do I do first? I create an index.js file inside auth like this. Okay? So, what do we have to do here? We need to create a server. Just as we did inside the gateway here. So, this is something.

We had done some things here. Let’s copy this from here like this. Okay? So if I want, I can show you again by writing it down. But we need to do the same things we did here again. So why waste time? Let’s write it down this way. Okay? But for now, it will not be imported here.

Okay? The import won’t work this way here because its type is common.js inside its package.json. Okay? So we will have to change this. So here I will write it down. This way we write the module here. Okay? This way we write the module.

And here we give a dev script that will be our, which will be named index.js, so that our server inside index.js runs here. Okay? Let’s write it down like this. And here you can see that express is already imported, there is a config here, and app is already initialized. And

here first we change its port here. We give a port inside the .env file here. Okay? And here instead of hello from gateway, we write hello from auth service. Okay? This way we write hello from auth service like this. Okay? So that we know that

our auth service is running here. Let’s write auth service started here as well. Okay? We will write auth service started here like this. Okay? And now what do I do here? I create a file inside auth named .env and give a port here.

Like this we write equal to and here what port did we give to the gateway? We had given 8000. So we will give it 80001 here. 80001 will be the port given here. Okay? This way and similarly here if it does not run on port 80001, it will run on port 60001.

Okay? So we have created a server here as well. Okay? Just as we did inside the gateway, we have created the same server here. Let’s run this. Okay? So right now we are in auth. If we type npm run and click enter like this,

you will see that auth service has started on port whatever is our 80001 and it has run there. Our gateway is running here. Okay? Our gateway is running here. Our auth service is running here. Okay? So what do we do here? Let’s make a request.

Let’s check. Slash, okay? We make a request here. So see, let’s make a request on 8000. If I write 80001 here and click enter, then hello from auth service has come written here. Okay? But this is not how we should do things. Okay? This is not how we should.

We shouldn't go this way. What do we need to do? If I write like this 8000 if I write slash auth here and request on slash auth, then where do we need to go? To our auth service here. Okay? If we write 80001 like this, then we are able to go to auth service.

But I do not want to go to the auth service this way. I need to go to the auth service through my gateway. Okay? If I write local 8000 api auth here, then I need to go to the auth service.

So how will we go here? I mean how will we access our service through the gateway? So let’s check this out. Okay? Let’s do this and then you should understand that if we are requesting on 80001 then our auth service is running here. Okay? This you have understood.

You have understood this. Now let’s move forward. Okay? So now where will we move forward? So now what I need to do here is to request my auth service through my gateway. So how do we do this? Let’s check that out.

Is that clear? So we have reached the index. We have come to the gateway index. Look, this is our auth index. We are currently inside the gateway's index. See, it is coming up with the gateway written here. So here we will do some things to access it. First of all, I need a.

Inside, I will bring my auth service URL here. Alright? So how do we take the auth service URL? So here I write auth under service under URL here. I will place an equal sign here. And now I will provide its URL here.

So what will our URL be here? If I go here, our URL is something like this. Look, we copy this. And if I go here, it looks something like this, our http://localhost:801. Alright? This is how it is. We can write this in double.

We can also write inside the course like this. So this is our URL here, which is for the auth service. Alright? Where have we written this? Inside our gateway. Alright? Now we will access it here. Okay? Like this. So first of all, what do I do here? I import a package.

First of all. Alright? Which package do we need to import? So we need to write import here. We need to import proxy here. Where is our proxy coming from? It is coming from express http-proxy.

Alright? So this is the package we installed, express-http-proxy. We get a proxy here. Alright? Now how do we use this proxy? So look, if I write app.use here, and now if I use the slash after my slash like this.

I write API/auth here, then which URL do we need to access here? So we have to give the URL here in front of it, and how will we provide it inside the proxy? So here I write proxy and inside the proxy, we will give the same URL here that we need to access through our.

gateway's URL. Alright? So we will provide it here. So how will we access it here? So I write process.env to bring it. So here we write process.b. Now whatever name we have given here. So here we have named it.

auth service URL. We can copy this here and write it in front like this. Alright? So now what will happen here? What will happen is that if I replace the slash with a request, if instead of writing a request to the slash, if I write localhost/api/auth here, then where will our request go?

It will go to our auth server URL. Alright? It will be at our auth service URL here. It will be at the auth server. Basically, that means. So if I go here, then you can see that our service is running on 801. Alright? But if instead of 8001, if I.

write 8000 and click enter, then our gateway is running here. Alright? The gateway is running. And then if I write after the slash API/auth and click enter, then look, what is running here now? Our auth service is running. Alright? Because.

what have we done through the proxy here? We have given it a route here, and we have also indicated that our auth service will run here at this route. Alright? Look, this is what we have done here. It means that after our gateway, if I write /api/auth here, then what URL will be fetched here?

It means that to which URL our request will go, it will go to the auth service URL. So this is the work of our proxy, and this way we will be able to access our services through the gateway. So in microservice architecture, basically, there is a gateway here and requests come to that gateway.

and that gateway decides which service the request should go to. Alright? So if in the URL of the gateway, if /auth is written here, what does that mean? It means that our user, our user, wants to make a request to our auth service, so the gateway here.

What will he do? He will make the decision here and relay it to the auth service there. Is that clear? So, this is the work of the gateway, and we are doing this work here through the proxy. It was that easy. There was nothing very difficult here. It was very easy here. Is that clear? So, we have done this much work here. Alright?

Now what do we do here? What do we do inside our auth service? We create a model for our users. Is that clear? We create a user model and make a controller here for logging in. Is that clear? We will also log out here. Is that clear? So, we do all this work inside our auth service.

Because auth is specifically for authentication, so we will perform actions inside it. Is that clear? So what do we do first here? Inside our auth service, what do we do? We go into our auth service and start creating some folders here. First, we will write a controllers folder this way. Is that clear? Here.

We will create our auth controller and other controllers like the login controller here. Is that clear? After that, we create a folder for models. This is where we will create our user model. Is that clear? After that, we keep one middleware, a second middleware. We will write the config here afterwards.

Alright? We will write the configs here. We create a configs folder. Along with that, we create a routes folder. Is that clear? This is where we will write our routes. Is that clear? So we will do some things like this. Why are we doing all these things here? Let's understand this.

Look, what will we write inside the controller? In the controller, how we will implement those things that you might be able to see here, we are making a request app dot get. If I go to the auth service, inside the auth service's index dot js, if I go there, you can see that a request is being made to a slash.

And when requesting on that slash, a controller function is working here which sends us a response saying hello from auth service. So this part here, where our controller function is working here. So this is our controller. Is that clear? This is the controller. And

to access that controller, a request is being made here on the route. So the requests are written inside the route. And whatever controller functions that are here, we will write them inside the controller. And all the configs, etc., some things, like connecting to the database,

or generating a token, anything like that will be done inside the config. And we will create a user model inside the model. Through this, we can create our own cluster inside MongoDB. Is that clear? There are all these things. So what do we do first here?

We connect our MongoDB. After that, we will create our user model and then start writing the controller for logging in. Is that clear? So let's do this work. First, we create a file inside our config, which we will name db dot js, and what will we do here? Through the Mongo

Mongoose package. We installed the mongoose package. We connect our MongoDB here through the mongoose package. Is that clear? And through mongoose, we will create our own model here. Is that clear? We will do all the other things. First, what do we do here? We connect to our MongoDB.

So for this, what do we need to do? We need to go to the MongoDB website. We need to go to MongoDB Atlas here. Is that clear? So first, we go to our MongoAtlas website. So here, we click on enter MongoDB Atlas. Now, our MongoDB website has opened.

Let's open it. I will enlarge this a bit. After that, we will sign in, and how will we sign in? We will do it through Google. Is that clear? Because I already have an account, I am signing in here. If you do not have an account yet, then you need to sign up here. Is that clear? Some steps.

It will be followed. You can do that. It's easy. There's not much to it. Okay? So, I have many projects already open here. Therefore, that's how our dashboard is appearing here. But what do I do here? I click on View All Projects. Here, I create a new project.

The option should be appearing. Alright? And if it isn't appearing, you can click on View All Projects like this and then click on New Project. This will allow us to create a new project here. Okay? And let's give this project a name. So I'll write Fresh AI here. Alright?

Now, let's click on Next. We don't need to provide any permissions or set any permissions. We shouldn't give access to anyone. So here, let's click on Create Project. Okay? As soon as we click here, a project will be created here. Okay? Look, our project named Fresh AI has been created.

Now we click on Create. This will allow us to connect our MongoDB Atlas. First, we need to deploy a cluster for it. Okay? So let's deploy the cluster. Here, there are some paid options and one free option as well. So we choose the free one.

Let's go to that. Okay? And the Name Cluster should be Zero. In Provider, we select AWS. Alright? And in Region, we select something like Mumbai. Alright. Now click on Create Deployment. You will see it at the bottom right. Let's press Enter here.

As soon as we press Enter, this interface has opened up. It is asking us to provide a username and a password. So what can you do here? You can create a database user. Okay? What you need to do first is create a database user. Here, don't click on Choose a Connection Method.

Do not click on it until you have created a database user. Okay? First, let’s create our database user. And as soon as our database user is created here, we will click on Choose a Connection Method.

And there are many connection methods here. But we will use MongoDB for VS Code. Okay? Since we are working with VS Code, let’s write MongoDB for VS Code directly. And we will get a URL here. Look, we have received this URL. We can copy it like this.

And where do we write this URL? So, we will go inside here. Okay? And where are we going? We are going into auth. So you might have a little confusion here. This is our gateway and this is our auth. Okay? So you need to remember this.

Otherwise, you might end up pasting it in the gateway. Okay? So we don’t need to do anything there. Remember where we are working and where we need to put things. Okay? We are working inside auth. Okay? So now I will write like this, the MongoDB URL under MongoDB_URL here and set it equal to the URL we have copied. And after the slash, I will write like this, auth.

Okay? You can write auth or user, whatever you want to write.

So, we will write user instead of auth here. Okay? That will be better for us because we are creating the user model here. What will happen with this? A cluster will be created in our MongoDB named user, where we will have many user entries. Okay? All these things.

So, we have written user after adding a slash. And we need to remember that we created a database user with the name Virtual Courses. After that, we have our password. Okay? So we have completed all these steps, and if your username and password are not like this, your MongoDB will not connect.

So, you need to remember this. Okay? You should be able to get a MongoDB URL like this. So we have taken this here. Okay? Now, what will we do? We will connect our MongoDB. Okay? Let's connect.

We will do it. So, for that, we need to use a package here. So let’s click here for a second. And now I write import here. Who do I need to import? We need to import mongoose. Where will it come from? It will come from mongoose. Okay? Now we need to create a function here called connect.

Named DB. Okay? So I will create a function here. We write export here, export cost. Let's create a function called connect DB. Connect DB and we will create an async arrow function here. This way and we don't need any value inside it. So let's remove it.

There are no values needed inside some parameters. Now we write it inside a try catch here. So if there is any error here, we will get it back through the catch. Okay? So let’s write here. Now what do we do first? We connect our mongo DB.

Okay? So we are using async here. So we add await here. We apply await. Why? Because we need to connect to Mongo DB here. We can only move forward after that. So we apply await here. And here I write mongoose.if there is a connect method inside mongoose.

You will see it in the suggestions here. We will use it. And here we need to provide a URL. Write what is coming up? After connect we need to provide a URI here. Whatever you need to write, URL or URI. So we need to provide a URL here.

And where will we get it from? We will get it from. Okay? So we need to write process.b because we need data from ENB. So here we write process.b and inside b whatever name is there is its mongo DB url. Okay, we will take this and paste it here like this. Okay, so this is enough work.

To connect mongo DB and our mongo DB will connect here. Okay? And as soon as we connect, we will log to the console here, let’s write connect DB like this. Connect DB. Okay? Let’s write something here. We will write connected DB here. Okay? This.

This way if there is any error, we will log the error to the console, so here I will write mongo DB error here like this, I will write mongo DB error and we will write whatever error is here with it. So I will write error like this, okay? Whatever error will occur will come here for us.

So this way we have done the things here. Now we are exporting this mongo DB here. Okay? So where do we need to place it? So inside our index.js we are listening to our app here. Below this, what do we do here?

Our connect DB function, which is coming from our .config DB, we will call this function here. And one thing you need to remember is that like here you need to add .slash configs DB after it is very important. Okay?

If we do not add .js, then we can get an error. It is better to add .js here first. So we have done a little here. So if I go here to my service terminal, it is showing started on port 80001 here. Along with it,

it is also showing connected DB. Okay? It is also showing connected DB here. Okay? If after doing all this your mongo DB still does not connect, then I will tell you a solution here. Okay? First of all, before seeing that solution, let’s do one thing here.

We go to mongo DB again and click done here. So first we go to security inside database and network access, you will see it here, and click on it at the right side bottom. The first session is that we delete our current IP address from the access list here and add a new IP address here which is 0.0.0. And we need to click on confirm. Okay? This way, and we need to write another thing here that if

एक्सेस लिस्ट है सबसे पहले उसके अंदर हम क्या करें जो हमारा करंट IPपी एड्रेस है इसको यहां पर डिलीट कर दें और एक न्यू IPपी एड्रेस यहां पर ऐड करें जो कि हमारा है 0.0.0 इस तरह से और यहां पर कंफर्म पे क्लिक करना है। ठीक है? इस तरह से और यहां पर लिख के और यहां पर एक चीज और है कि अगर आप

If you click on this button, the IP address in our IP access list will remain for 6 hours. But you need to turn this off. Okay? What you have to do in this way is simply provide an IP address of 0.0.0.0 here and confirm it here. This way, you will have an IP address written here.

A security risk is coming ahead. So don't pay attention to that. There isn't too much trouble because we are able to access it from anywhere here. That's why we have taken an IP address like this here. Okay? So our active IP address has become here. Okay? We are here.

So we have done this much work here. Okay? So our Mongo is still showing connected DB here. Okay? That's great. Now let's do the solution here. After doing this much, we have accessed the network. By going to the network access, we have also added an IP address there. That much.

Even after doing this, if our Mongo DB does not connect here, then there is some problem on the Mongo DB side itself. So I have a session for that. I will tell you here. So what you have to do for that is we have a package called import DNS, which is already pre-built here inside notes. Okay? Let's write DNS like this. Okay? Let's write it this way. And here inside DNS.set servers, we can write some IP addresses like this. Like this. Okay? So you have to write this.

You need to write this much. This is something. This is something we need to write here. If your database does not connect in this way, first you have to import DNS from DNS and you can provide some IP addresses like 1.1.1.1 and 8.8.8 inside DNS.set servers.

Okay? After that, your Mongo DB will surely connect. Okay? Mine has already connected directly. So I will remove this. I don't need it. Okay? If yours does not connect, then you can put it this way. Okay? So this much work we have done here. Our database is also connected.

Now what do we do here? We need to log in. But before logging in, we will definitely have a user model that we will create. What does it mean to log in? To log in and sign up in the database means what? That we need to create our user in the database.

To create that user, we will have to make a model for it. So let's create that model here. And where will we create it? Inside our service, under auth, we have created a controller. We had made a folder named models. Inside that, I will write like this user.model.js. Okay? This way, we will create a user model here.

So, where are we now? We are inside auth. Inside auth, we have created a user.model.js under models. Okay? Now first of all, what do we have to do here? We have to import mongoose first. Because through mongoose, we will first create a schema. And through the schema, we will make a model for it. Okay? We have to do this and what is inside the schema? Those are all the fields that we need to keep inside the user's model. So let's do this work. Okay? First, I will write cost and give it a name as a variable. Like we give user schema here. I will write like this user schema and we create our own schema for the user's model. Okay? So for that, it is new mongoose.schema. There is a method. We will write new mongoose.schema.

You will see here that there is a schema method. We will use that here. Now what do we have to do? First, we will put two curly braces here. One we have taken as curly braces and then after putting a comma, we will take the second one. Okay? First, what will we do here? In the second one, we will set the timestamps to true. So what will happen here? Whenever any user model is created, there will be fields added to its schema. One will be our created at and one will be updated at. This will mean that when it is created.

स्कीमा क्रिएट करेंगे। और स्कीमा के थ्रू हम उसका एक मॉडल बनाएंगे। ठीक है? यह कुछ करना है और स्कीमा के अंदर क्या होती है? वो सारी फील्ड्स होती हैं जो कि हमें यूजर के मॉडल के अंदर रखनी है। तो, यह काम जरा कर लेते हैं। ठीक है? सबसे पहले मैं यहां लिखता हूं कॉस्ट और इसका कुछ नेम हम देते

हैं वेरिएबल का। जैसे कि यूजर स्कीमा दे देते हैं। यहां पर लिखता हूं मैं इस तरह से यूजर स्कीमा और अपना एक खुद का एक स्कीमा क्रिएट करते हैं यूजर के मॉडल के लिए। ठीक है? तो उसके लिए होता है न्यू मोंगूस डॉट स्कीमा। एक होता है मेथड। तो न्यू लिखते हैं मोंगूस डॉट स्कीमा। आपको

दिख रहा होगा यहां पर एक कुछ स्कीमा एक मेथड है। इसका यहां पर यूज़ करेंगे। अब यहां पर हमें क्या करना है? सबसे पहले दो कर्ली बसेस यहां पर लगाएंगे। एक ये कर्ली बसेस लगा लिया और एक कॉमा लगा के दूसरा लगा लिया। ठीक है? सबसे पहले यहां पर हम क्या करेंगे? दूसरे वाले के अंदर हम इसका जो टाइम स्टैंप्स है, एक टाइम स्टैंप्स

है, इसको कर देंगे हम यहां पर ट्रू। जिससे यहां पर क्या होगा? जब भी हमारा कोई भी यूजर का यूजर का मॉडल क्रिएट होगा तो वहां पर क्या होगा? एक दो फील्ड्स ऐड हो जाएंगे उसके उसके स्कीमा के अंदर। एक तो होगी हमारी क्रिएटेड ऐड और एक होगी अपडेटेड ऐड। इससे क्या होगा? जब वो क्रिएट होगा उसका

The time will go there, and whenever we update the user, their time will be added there. So let's make the timestamps true. This is somewhat correct for us. Alright? So let's make it true. After this, what do we do here? Now, the first curly braces we've created here, we perform actions inside of them.

We take some fields of our user here. What all do we need to add in it? Alright? So let's do something here. First, we will have a field named ‘name’. Our field will be ‘email’. Alright? Before that, we will have a field called Firebase UID. Okay? Now,

For authentication here, we are going to use Firebase. There is a package called Firebase Admin which we will use here in our auth server and within our service here in auth service. There is a Firebase Admin and a Firebase package which we will use in our front

end, where we will get a complete session for the user, basically we will get the Firebase UID here, we will update it here, alright? So we will use Firebase for this. Therefore, what we do here is create a field, we add a colon like this and we assign a type to it.

We assign a type like this; we set its type to string, alright? And we add a comma. So we make this required true because when a user is created, they will have their Firebase UID, so we make this required true. Alright? And

we will set required to true here, and along with it, we will also make it unique true. Because whatever UID we have, it will be unique here. Alright? It's not that it won't be unique; it will be unique for every user. So here we make its unique ID true this way. Okay? And now what do we

need to do? We need to add a name field. Inside it, our user's name will come. So let's write its type here. And what type do we give it? We give it string here. We add a comma. We will set it as required true. So we will make it required true.

We will not make it unique true. Why are we not making it unique? The name should be unique, right? Why are we not making it unique? Because here, basically, let's say if someone's name is Ankur Sahu, it does not necessarily mean that it's the name of only one user. There can be many users with the same name. So we will not make its uniqueness true.

But we need the name. So we will keep it required true. Alright? This way. So this is how we add fields inside the schema. It should be easy for you to understand. Alright? Let's add an email field. We are adding an email.

And where will we get all these things? When we authenticate through Firebase here, we will get a token from Firebase here. And which token we will send to our auth service. Alright? What will the auth service do here? It will get the name through that token, it will get the email. Alright? It will get some things.

And where will it save them? It will also get a Fire UID, and where will it save them? It will save them inside the user model. Alright? This is something we need to do here. So as we continue doing things here, you will understand everything.

Alright? If you are not understanding some things here, like why we took Firebase UID? Okay? Why did we take all these things? Gradually, you will understand everything here. Stay tuned to the video. You will enjoy it. If you are enjoying the video, you can subscribe to the channel.

Alright? And you can also like the video. And now what do we do here? First, we assign its type as string and make it required true. We make it required true. And similarly, here we will make it unique true because our email will not be the same for everyone.

We cannot take the same email here if another user comes here with the same email. Okay? If another user comes with the same email, we will not sign them up. We will make them log in instead. Okay? We will make them sign in because a user with the same email should not be here. Same name.

That could be. The same email will not be there. Okay? Because we will check through this email whether we need to sign in or sign up the user. Okay? So, we set it to be unique. Now the last field we have left is our interview coin. So here

is a kind of credit type that you can understand that we will use here to perform the interview or to create our resume or to get a score for the resume or to generate a roadmap. So what will we do here? We will use some tokens here. So those tokens or

credits are our interview coins. So we write them down here. This way, we set their type to string and give it the name interview coin instead of coins. Okay? We give it the type like this. The type should be a number here.

Because the coins will all be in numbers. We assign them numbers and give it some default value beforehand. Okay? We set a default value here that if any user logs in here, they will receive 150 interview coins by default. By using these,

they will be able to do some interviews here. Okay? They will be able to create a resume. Okay? So this is how we give it some things beforehand. Okay? So our user's schema here is ready. You can see what fields we have inside it. There is fire with UID,

there is name, there is email, there are interview coins. Okay? So now you might say that there is no interview data here, nor is there resume data. There is no data here for any roadmap in the user model. Okay? But the user will do all these things. So where will we handle all this? So this

is where we will handle everything in another service. Again, we will create a folder which we will name for the interview service. Okay? So this will be our interview service just like we have watch service, just like that we will have an interview service along with it we will have a resume service.

We will create a roadmap service as well for the roadmap. So we will create a separate service for making requests in different places. For example, if any user wants to create their interview, their interview

to start, then the request will go to our interview service. Okay? The request will go to our interview service. For authentication, the request will go to the auth service. For resume, the request will go to resume service and for roadmap, the request will go to roadmap service. Okay? And what will happen here? We will create separate models for interview, a separate model for resume, a separate model for roadmap.

And there will be one more model which is our billing. Where we will create a billing service to purchase any credits etc. So we will create a separate model for that. Okay? All these things. So we will have different services for that. First, what do we do here? We are working inside the service now. So for that, in the user model, we only have these four fields.

As we go along here, what will we do? We will create interviews, create billing. So we will create separate models for those as well and everything else we will do there. We have to do this work in the future. But right now, what we need to focus on is creating the auth model. So let's do that first. Okay? So now first here, what do I do? I will write a cost, and create a user model. I will write cost user equal to here.

बाकी सब चीजें हम वहां पर करेंगे। ये तो काम हमें फ्यूचर में करना है। बट अभी हमारा जो करंट काम है अपने ऑथ को ऑथ का मॉडल क्रिएट करना वो पहले कर लेते हैं। ठीक है? तो अब सबसे पहले यहां पर मैं क्या करता हूं? एक कॉस्ट लिखता हूं और एक यूजर मॉडल क्रिएट करते हैं। यहां पर लिखता हूं मैं कॉस्ट यूजर इक्वल टू यहां पर लगाते

This is the Mongoose model. Okay? We write Mongoose model here. So now look here, all these things are visible to us in suggestion. If we use any function or any method here. Like we used a method Mongoose model, so here in suggestion, it is showing us.

First of all, we need to add a name and also provide a schema here, which will be our user schema. So first we give a name here. Our name will be user. Okay? Let's write the name as user. And along with this, we need to add a schema inside it. So we give the user schema. Okay.

Right? So in this way, our user model will be created here. Now, we will not access this model here. Where will we access it? We will access it inside our controller. So we export it from here. What will we export? Whatever user model we have just created, we will export it here.

We have exported the user model here. So we have done some work here. Okay? We have created the model here this way. So it wasn't too difficult. It was very easy to create the model. This way we can create the model. Okay? Now let's move forward and our model is completed. Now what do I need to do here? I need to create a controller for login.

Okay? I need to create a controller here for login. So we create that controller here. Okay? I will create a file here. I will name it user or give it a second name, Auth.

Let's write Auth.controller.gs here. Okay? Now what do I need to do here? I need to create a controller here for Google authentication. Okay? So, let's do this work here. After that, we will also set up our Redis here. What will we use Redis for? We will see that shortly.

First of all, let's create a controller here for Google authentication. Then, we will gradually do all the things slowly. Okay? First, I will write export const here and create a controller named Google Auth. Okay? Let's create an async arrow function here and inside it, it will have a request.

Our request will be. There will be a response. And we will write all this inside a try-catch block. Okay? Now what will we do inside it? We will create the controller for our Google authentication. And we will create the controller in such a way that if, say, our user already exists in MongoDB.

What will it do? If we click on the Google button, what will it do? It will log us in. If the user data does not exist in MongoDB, then what does that mean? It means our user wants to create an account here, so it will allow him to sign up. Okay? So, we need to handle some condition-wise things here.

Let's do that. Okay? So now let's do one thing here. We need some things here. For example, we will get a token. Where will we get it from? We will get the token from our frontend. Okay? And whose token will it be? It will be our Firebase token here. Okay? Okay? So

We will take it from request.body first. So, from request.body we will get a token. Okay? Now what will we have to do with this token? We will have to verify this token. Okay? And how will we verify it? For that, we need to install a package.

Which is our Firebase admin package. Because here, the token is basically coming from where? It is coming through Firebase. And through Firebase admin, we will decode that token here. Okay? Okay? And we will verify it here.

We will verify the token here. So how will we do all this work? Through our Firebase admin package. Okay? And along with that, we will create a file inside config named firebase.gs and here we will initialize an app. Okay? Which will be our app.

will be done through admin. So let's get this done. First, what do we do here? We initialize the app through which we will be able to verify the token we are getting from the body. Okay? So let's initialize that app here for firebgs.

So what do we have to do here? We need to go to the fireb website here. So let's do that. Okay? So what do I do here? I search like this for fireb and we go to the fireb website and click on it. So first you'll see some kind of interface like this.

You will first have to sign up here. Okay? And there is an option to go to the console here. You can see an option to go to the console on the right side here. We click on that. Okay? And there are some projects I already have here. If you don't have any, then you can

डायरेक्ट क्रिएट न्यू फाइव बेस प्रोजेक्ट पे क्लिक करना और यहीं पर हम क्लिक करते हैं। ठीक है? एक न्यू प्रोजेक्ट अपना क्रिएट करते हैं और यहां पर इसको नाम देते हैं कुछ इस तरह से फ्रेशर एआई नाम देते हैं इसको और इस तरह से इसको यहां पर अनटिक कर देते हैं और कंटिन्यू पे क्लिक कर देते हैं कि हमने

इनेबल नहीं करना है। इसको अनटिक करते हैं। कंटिन्यू पे क्लिक कर देते हैं। यहां पर भी इनेबल नहीं करना है। और अब क्रिएट प्रोजेक्ट पे यहां पर डायरेक्ट क्लिक कर देते हैं। ठीक है? इस तरह से तो इससे हमारा एक फ्रेशर एआई नाम से एक न्यू प्रोजेक्ट यहां पर क्रिएट हो जाएगा। आपको भी इसी तरह से एक फायर बेस का प्रोजेक्ट

यहां पर क्रिएट क्रिएट करना है। ठीक है? और उसके बाद हम आगे चीजें कराएंगे। और यहां पर हमारा रेडी है। कंटिन्यू पे क्लिक कर देते हैं इस तरह से। ठीक है? अब सबसे पहले यहां पर हमें क्या करना है? अ तो सबसे पहले हमारा कुछ ये इंटरफ़ेस हमारे सामने खुल के आ चुका है। यहां पर फ्रेश लिख के आ चुका है। और यहां पर एक ऐड ऐप का

ऑप्शन आपको यहां पर दिख रहा होगा। ठीक है? यहां पर हम जाकर क्लिक करते हैं और अपना एक वेब ऐप यहां पर बनाते हैं। देखो यहां पर iOS Android और एक वेब के लिए है। एक यूनिटी और जो स्लेटर है। तो यहां पर वेब के लिए हम यहां पर एक बना लेते हैं और रजिस्टर ऐप पे क्लिक कर देते हैं। तो यहां पर देख पाओगे एक एक हम ऐप यहां पर क्रिएट

कर लेते हैं अपने लिए। ठीक है? और इसको नाम भी इसको भी यहां पर नाम देते हैं। कुछ इस तरह से फ्रेशर एआई और यहां पर इस पे टिक कर देते हैं। इसको अनटिक यहां पर करते हैं। तो देखो इस पे हमें क्लिक नहीं करना है होस्टिंग पे। हम डायरेक्ट यहां पर रजिस्टर ऐप पे क्लिक कर देते हैं इस तरह से। ठीक है? तो यह कुछ हमने यहां पर कर

लिया। तो हमने अपना एक वेब ऐप बना लिया इस तरह से। ठीक है? एक हमारा वेब एप मिल चुका है। और ये एनपीएम इंस्टॉल fireb ये तो हमारे फ्रंट एंड के लिए काम में आएगा। ठीक है? यह हमारा कुछ फ्रंट एंड के लिए काम में आएगा। हमने इतना कुछ यहां पर कर लिया है। और अब अगर मैं यहां पर जाता हूं। प्रोजेक्ट ओवरव्यू पे आ गए हम यहां पर।

ठीक है? तो अभी हमने अपना क्या किया? सिंपल सा एक ऐप यहां पर क्रिएट किया है। ठीक है? अभी अपना एक ऐप हमने यहां पर बनाया है। अब इस ऐप के अंदर हमें क्या चीजें करनी है? तो इस ऐप के अंदर जाते हैं और आप देख पाओगे कि FirewBs AI नाम से एक वेब एप यहां पर क्रिएट हो चुका है। ठीक है? इतना काम हमने यहां पर कर लिया। वेब

एप क्रिएट कर लिया। अब यहां पर एक सेटिंग का ऑप्शन है। यहां पर हम जाएंगे और अब यहां पर एक सर्विस अकाउंट का ऑप्शन दिख रहा होगा अकाउंट्स का। इस पे यहां पर क्लिक करेंगे तो हमें कुछ चीजें यहां पर मिलेंगी। ठीक है? जिनको यूज़ हमें करना है। तो आप देख पाओगे कि हमें यहां पर Fireb HDK यहां पर मिल चुका है। ठीक है? तो

Fireb एडमिन एसडीके हमें मिल चुका है। जिसके थ्रू हम यहां पर क्या कराएंगे? एक नोट जेएस के लिए हमें यहां पर एक एडमिन के एक हमें इनिशलाइज ऐप करने का ऑप्शन यहां पर मिल रहा है। देखो इस तरह से मिल रहा है। तो सबसे पहले तो हम यहां पर क्या कराएंगे? एक जनरेट न्यू प्राइवेट की पे क्लिक करेंगे यहां पर। जिससे हमें एक

सर्विस अकाउंट की यहां पर मिलेगी। सर्विस अकाउंट की डॉट जेएसn एक फाइल हमें यहां पर मिलेगी। उस फाइल के थ्रू हम यहां पर क्या कराएंगे? अपने ऐप को इनिशलाइज़ कराएंगे। ठीक है? फाइलबेस एडमिन के थ्रू। तो इसको जरा यहां पर क्लिक कर देते हैं और जनरेट की पे यहां पर क्लिक कर देते हैं। ठीक है?

So, we have one here that we have received. Look, this has come inside some folder. What do we do here? We can copy it like this from here. Or we can cut it like this from here. And where do we need to take this? So simply, what do we do here? We go to our desktop. We go to our advanced AI.

We go to the project. We go inside the fresher AI. We go into services under the backend and go inside the service. After going inside the auth service, we paste it like this. Okay? So if we go here, we see that we are getting something fresh, or we are finding something, so we rename it here.

We write here what we need to write, we need to write service account here, so we write it like this. So we rename it here and write service account dot js here like this. Okay? And if I click on this, then we have found something like private key here in js.

So we let this stay here like this. Okay? Now what do we need to do here? If we go back here again. First of all, we close this. If we go back here again, then we need a package here. Like we need our admin firebase package, which is required here.

Required syntax has been used here. But we had made it a module in package dot JSON so that we can import it. So we will write there as well. But we will need a package named firebase admin for that. So let’s install a package here.

Okay? So we go here and install a new package inside our auth service. I will first clear this and by running an npm install, we will install Firebase admin here. Okay? And essentially, why are we doing this firebase admin work? Earlier we didn’t do it. But

Now why are we doing it? Because it is a bit secure for us since we will directly send a token from there to our server. We will send a token directly to our server and we will verify that token through firebase admin. Okay? So the verification part that has been added here

has increased our security in authentication. Okay? So we do some of this and at last we clear this and run npm here like this. So this will run and our package has also been installed here. Okay? In this way, our package has been installed here. Now what do we need to do? Now we need

to initialize an app here. Some required syntax has been used here. But what do we do here? We do things ourselves. Okay? And as soon as all this work is done, when we will what do we have to do in the frontend?

So for that, we will go here. You will see the area with journal. We will go there, and then we will install Firebase in the frontend. And there is an HDK for it. We will copy that here. But for now, we are working inside the server and the service, so through the service account, we will have to

verify the token we will get from the frontend. Through which? Through firebase admin. So we have done some of this. Now first of all, what do we do here? We initialize our app. As it is shown here. Okay? Here we need to initialize

the app. So let’s do that. Look, it is coming here writing initialize app. So we will initialize an app like this. But here we will use import. Here we are using require. So we go there and initialize an app and also export it.

Okay? Now I am writing const app equal to, I am writing here like this initialize app, which is coming from our firebase admin. Okay? Now after this, we put curly braces here. And now inside it, we have our credentials. Inside the credentials.

We need to include things inside it. Okay? So what do we do inside the credentials? What do we need to provide inside the credentials? If I go here, you will see that we need to provide a service account inside the credentials, and inside it, there is a dot like we generated a private key for a package that we just

imported, meaning the one we added to our app service folder. So we need to provide that here. Okay? Let's do this work inside a curl. So here I will write this in such a way that the curl comes from where? Firebase admin, it will come from the app. Just a second, here it will be the app and

let’s write it like this. So it will come from the app. Okay? Now what do I need to do inside it? I need to provide a service account. So here I will import it like this, a service account. Let's write service account here like this. And where will it come from? So this will come from our from. So here

we write from... here. I write dot dot slash and this is our service account here. We will get one service account from here. Okay? We will get something from here. And along with this, we will write this with type. A second here we will write it with curly braces. With type we will provide it like this: json. Okay? We have written something here. So this service account we have brought here and pasted in our app. Okay? And its

name was changed. The name of this service account was changed like this. We will use it here. Okay? And we will import it. And whom do we need to provide this service account? In this scope, we will write service account here. Okay? With this, our app will be initialized here.

Along with that, it will also take a private key here within the credentials. Okay? So our app has been initialized here. We are also exporting it here. Now our work is complete here. Okay? In firebgs where we needed to do things, the basic app initialization has been done here. Okay? Now our work starts again where? Inside our auth controller. So let’s start this work again. Okay? How will we do it? Let’s move forward. And now what do I need to do here? I need to decode. Whom? I need to decode my token. So here I will write

like this: decode decoded. Okay? Equal to, we go here. We have created a variable named decoded inside which what will we do? We will verify our token. And how will we verify it? So we need to verify the token. And we can use await here along with sync. So let’s put await.

So first of all, what do we do here? We decode inside the decoded. Basically, what do we do? We verify our token. So how will we verify it? So we are authenticating here. So we need to get auth inside it. First of all, we need to get the app's auth.

Okay? So for that, I write here like this: get auth and I write get auth here and what do we put inside it? We just put the app that we just initialized. Okay? Where did we do this? Inside our fireb.js. So here

also let’s add .js. And let’s quickly import this get auth too. Okay? So here I write import. And I write get auth like this. Where will our get auth come from? We add from here and it will come from our firebase admin.

Okay? Like this, we will write that we are importing get auth here. Okay? After this, there is a method verify id token. What will we put inside it? We will put the same token here that we are getting from the body. Okay? We will put this token here which we are getting from the body. So inside this decoded, all the values of our token have come here. Okay? So if I write decoded.uid, then it will be our user UID from fileb. decoded.

पर भी जीएस लगा लेते हैं। और जरा इस गेट ऑथ को भी यहां पर इंपोर्ट कर लेते हैं जरा। ठीक है? तो यहां पर लिखता हूं मैं इंपोर्ट। और यहां पर इस तरह से लिखता हूं मैं गेट ऑथ। गेट ऑथ हमारा कहां से आएगा? तो फ्रॉम लगाते हैं यहां पर और यह आएगा हमारे फायरब एडमिन

ऑथ से हमारा आएगा। ठीक है? इस तरह से तो यहां पर यह कुछ गेट ऑथ भी यहां पर हम लिख लेते हैं। इंपोर्ट कर लेते हैं। ठीक है? इस तरह से। उसके बाद यहां पर एक होता है वेरीफाई आईडी टोकन। एक वेरीफाई आईडी टोकन यहां मेथड होता है। उसके अंदर क्या डाल देंगे? वही टोकन यहां पर डाल देंगे जो कि

हम अभी बॉडी से ले रहे हैं। ठीक है? ये टोकन यहां पर डाल देंगे जो कि हम बॉडी से ले रहे हैं। तो इस डिकोडेड के अंदर हमारा जो टोकन है उसकी सारी वैल्यू यहां पर आ चुकी है। ठीक है? तो अगर मैं डिकोडेड डॉट यूआईडी अगर लिखता हूं तो वो हमारे यूजर की वो हमारी फाइलb की यूआईडी होगी। डिकोडेड

If I write dot name, then it will be our user's name. If I write decoded dot emo email, then that will be our user's email. Is that okay? So, it means that the entire user data is now available inside this decoded. Is that okay? And in get auth, what we have done is through get auth, we have

wrapped the app in this way and through that we have verified the token with a verified ID token, so we verified the token through this app. This is why we had to initialize our app inside fireb dot js because we needed to verify our token. Is that clear?

So we have completed this much work here, and now what we do here is apply the same condition that I mentioned to you a little earlier, that here we will check whether our user already exists or not. If the user already exists in our database,

we will log the user in; otherwise, we will sign them up. Now, how will we do this? Let's understand that. Alright? Suppose I authenticated here with Ankush Sahu. I authenticated using Ankush Sahu's ID via the email ID, so what will it do?

It will return a name here. It will return an email and a UID. Where the name will be Ankush Sahu, the email will be the same email I used for authentication, and there will be a unique ID for Ankush in the user ID. Is that clear? And through that unique ID, we will check here whether our

user already exists in our database. So how will we do this? Let's see. First, I write let user. We are using let because we can change this user. Alright? So, we write let, then write user, and using await, what do I do here? I use our

user model that we created, and where is it coming from? It's coming from our dot dot model s user model dot js. Here we are using a method which is our find one. This means that if we need to find a user in MongoDB, we can use find one for this.

After that, how will we find it? If I go here, you will see that we have some things available. What things do we have inside the model? We can find it through the Firebase UID,

through the name, through the email, and through the interview coin. So what is unique here? One is our Firebase user ID which is unique for our user. One is their email which is unique. So through both of them, we can check whether

our user exists or not. We cannot check through the name or the interview coin. Why can't we check through the name? Because names can be the same. Two users can have the same name, and we also cannot check through the interview coin because

everyone will have 1510 coins. So what will it do? It will run on all users, which user will it run on for us? For this, we need to check through some unique field. So here we check through the Firebase which is a Firebase UID.

So here I write like this, if a Firebase UID exists, this means we check if this Firebase UID exists in the decoded we have verified the token, and in decoded, we also have a UID. If it matches with any user from our

model, then what does it mean? That user already exists. If our user is already existing here, it means we need to log them in. So it will directly run the user here. Is that clear? But we put an if condition, that if the user is not found here,

then what do we do? If the user is not found, then we need to create a user here. And before that, if you understand, every user will have their own unique UID. Alright? Every user will have their own unique UID. And every time, every time.

After Google authentication, it will return the same ID. Okay? For the user, it means that there is one UID for one user. And whenever we authenticate, it will return the same UID, Google will. Okay? After Google authentication, whatever Firebase we have will run with the same UID.

Which we will compare with our Firebase UID to see if that same UID already exists for a user. If it exists, what does that mean? It means that we have to log that user in. We won't sign them up again. If we assume that the user is not found. It means that we didn't find this same UID anywhere. What does that mean?

What is it? The user does not exist. So if the user is not there, we apply an 'if' condition. Now what will we do here? We will create the user in MongoDB and basically, what does that mean? The meaning of creating it is to sign up. So we will sign him up here.

So let’s do that. How will we do it? Now see, that's why I wrote it under 'let', because we are making changes to the user now. Okay? Now what do we do in the user? We apply an 'await'. And waiting here, I write that we have to do what for the user.

Now we have to create the user. Okay? We need to create a new user. If our user does not exist, we'll create a new user and we need to add some fields inside it. First, what do we need to give it? We need to give it a Firebase UID. Which will be our UID that we have.

decoded here, decoded dot its UID will be our Firebase UID. Okay? In this way, it will create a user here. The Firebase UID inside it will be the decoded dot UID. After that, we have a name. Okay? We have a name field.

So in the name field, we also have a recordant from which we see an email. We will also have a name here. If I write the name here in a second. If I write the name here, you'll see that there's also a name showing up here. Okay? So the decoded will take a name.

Okay? Now, if I also need their email, let’s write that as well. So how will we get the email? In the decoded, I write decoded. Recorded dot we also have an email. Look, this way it will get the email from here. Okay? This way these three fields will be updated.

A user will be created, and the interview coin will default to add some 150. So that will also be added automatically. Okay? So we have created the user here. Now that we have created the user. Okay? Our user has been created. But how will we know if our current user exists or not? Okay? How will we find that out?

For that, just as we used to store a token in cookies through JWT secret. Okay? If you remember, we created many projects before. In those, what did we do? We generated a token through JWT.

And stored that token in the cookies. Okay? And we could verify it through JWT to find our user's ID. Okay? But what will we do here? Just understand.

Here we will generate a session ID. Okay? So I write here a constant session ID. So I write it like this, I will generate the session ID. Now how will we generate it? There is a crypto package that we already have here.

Okay? So here I write it like this, where will the crypto come from? So we write from crypto it will come. Okay? This is already here, no package needs to be installed because it's already present. Okay? So we write crypto here. Now through crypto, we have crypto dot one here, we have a random UID.

Okay? Let’s write a random UID here with which we will generate a session ID, a random session ID.

It will be done. So what have we done here? We have created our session ID. Now we need to write this session ID inside the response.cookies here. How do we do that in response.cookies? We need to store it. Okay? We need to add it inside the cookies. This session.

How do we handle the session ID? Let's take a look. One second response.cookies is our function. So how do we do that? First, we give a cookie a name 'session'. We can add it here with the name 'session'. And what do we put inside that session? Look here, we gave it a name, we provided it the name 'session'. Now inside that.

What do we need to put? We will provide a session ID like this. Okay, we will provide it in this way and after that we need to give some other things here, like a message, etc. Similarly, there is something called HTTP only. So we will set HTTP only here.

We will set HTTP only here like this. Okay? Along with that, we have same site. We will set same site to strict here. And there’s also one more configuration, secure. So we write here secure, and we will set secure to false here because we are currently.

working on HTTP. Okay? It is not working on HTTPS. So here we set the secure to false, and the same site to strict. Now I also need to give it a max age. Okay? So I’ll write max age like this, and how much do we give it?

What do we set this for keeping it in the cookie? We will give it a few seven days here. So how do we write days? We need to give this in milliseconds. Look here it says max and milliseconds convert to expiry. So what do we need to do for days? We have to change it to milliseconds.

How will we do that? So we added seven first. By multiplying how many hours are there in one day? There are 24 hours. Okay? Each hour has 60 minutes. And each minute has 60 seconds. Okay? And within each 60 seconds, there are 1000 milliseconds. Okay? So.

In this way, what have we done? We have changed it to milliseconds. It means how we have done seven days? So we wrote seven first, and in each day, there are 24 hours. So we multiplied 24 hours. Each hour has 60 minutes. So we multiplied by 60 minutes.

Each minute has 60 seconds. So we multiplied 60 by 60. And within each second, there are 1000 milliseconds. We multiplied that, thus in one day, we will convert it to milliseconds. Okay? This way we have done something. And in the last, what we.

do here? We will return it. We can return response.status. So in this way, we return the response. First, we can set it a status here like this. Okay? And see how we give the status.

Here? So there is a code for status that if there is a 200 code, it means that our API request is working successfully. Okay? So we give 200 here. If there is some error on the front end, it means if there’s some issue from the front end.

then we give 400. Okay? And if there is a server error, we give a code between 500 and 600. So that’s how we do things. Okay? So now here our user has been created for us. What does it mean? It means our user has been created here.

The API has worked successfully. So we write 200. Okay? And after that what we need to do in the JSON? We need to return some data. So we write success within JSON. We write success as true inside the JSON.

And by putting a comma here, we add a user like this. Okay? We set success to true and added a comma followed by user. Okay? If I did this, we have returned this successfully. Okay? We have returned our user afterward.

If there are any errors, we return them as well. Okay? So, inside the return, we provide response dot status here. We provide the status here. If we have any errors, it will basically be our server error. So we give it a 500 status. And what do we do here inside JSON?

And here we write Google Auth error. We write Google Auth error here like this. Okay? And by putting a comma, we also write any error that has come along with it like this. Okay? So, we have written something like this here. Okay? Now so far how much work we have done here that what have we done? A session.

We generated a session ID. We stored this session ID inside cookies here. Okay? Now it feels like this session ID might have our user data. Whenever we generate the token through JWT before, we used to provide it with a user.

ID. Okay? So that we could access our users through that user's ID. Okay? It means that we could find the current user. But here it does not seem that there is a user anywhere in this session ID. Okay? Because we generated this session ID through crypto.

There is no user data in it. So now how will we find the user data from this session ID? Let's understand that. Okay? For that, we will use Redis here. Okay? So, what will we do inside Redis here? We will create a session with a name session.

We will set a value called session through which we will access the session using the session ID. Okay? And inside that session, we will add some things, which will include our user's Firebase UID, name, email, and with that, we will have an interview point.

Okay, and through this session ID, we will be able to access that session. Okay, so let me do that first. Okay? Then slowly you will understand. First, let's do that. Okay? Then, as I move forward, I will explain to you how we are doing it.

So what are we going to do here? Let's just understand that. Okay? That until now, we don't have any user data in the session ID we have here, through which we can find our current user. Okay? Here we will perform authentication. The session ID will go inside the session.

But we will not be able to access our user. So now, to access this user, what will we do? We will create a session in Redis through this session ID with the user ID. Okay? In which we will assign a value with the session ID and put the user's data inside that session.

Okay? So that we can access the user's data. So this is the work we need to do here. Okay? It's simple. For that, we will need to set up Redis here. So let me do that. Then after that, we will set a session in Redis and assign it the value of the session ID so that we can access that session.

This is the work we need to do here. So it might be a little difficult for you to understand because I am speaking. When we perform this, then you will understand it better. So what do we do first? We will install Redis here. Okay? And how to install Redis?

We will do that in our Docker Compose file. Okay? Let's install Redis inside the Docker Compose YAML file. Okay? And where will the instance be created? We will create its instance here in the backend folder, which is our root folder.

Inside the backend, we will create a shared folder. Inside which we will do? We will create the Redis instance here. Where all will we be able to use this? We will be able to use Redis inside the gateway.

You will be able to use it within the services. All the services we have because we do not need to use Redis alone. We also need to use it within the gateway. We need to use it within the interview service too. We need to use it within the resume and also within the roadmap. So, will we install it here repeatedly? Again and again?

We will initialize it. Instead, let's do one better here. We will initialize it within our root, which is our backend, here inside. This way, we will be able to use it within the gateway, and also within the service. Is that okay? So, let's do this here.

In the backend, I will create a shared folder here. We create a shared folder within the backend. And what do we do inside this shared folder? For a second, if I stop the service for a little while, what things do we have in the backend? Firstly, there is a gateway, there is a service, and there is a shared folder.

And what will we do in this shared folder? What will we set up in this shared folder? We will set up our Redis disk here. Is that okay? We will create an instance of this Redis disk here. Is that okay? We will create an instance.

In the shared folder, we will create the instance, but we will have to install Redis. So where and how will we install it? Through Docker. So, we will create a Docker YAML file here. So, in the shared folder,

I will create a file. I will create a folder named Redis. Is that okay? We will create a folder named Redis. And inside this folder, we will create a file. A Redis.js file. Is that okay? Now, what will we do inside this Redis.js? There is a package

called iO Redis, through which we will create an instance here. Is that okay? For that, we will have to install iO Redis too. Now, we will not install iO Redis inside the gateway, nor inside the service. We will install it in our main folder, the backend.

We will install it here. Is that okay? This means that here, we will have to initialize NPM in this backend folder and we will need the package.json file here. Okay? A module will also be created here. So, let's do this work too. Is that okay? And along with that,

we will do one more thing. I will create a file here in the backend where we will install Redis. Is that okay? Let's create a file which I will name docker-compose, docker-compose.yml. So, we will create a Docker Compose YAML file here, from where we will install our

Redis. So first, to install our Redis disk, let's write some commands here so that an image of our Redis will be installed basically, and a container will run. So, let's do this work. Now, what do we need to do inside this Docker Compose file?

Let's understand this a bit. Look, inside Redis.js, what will we do? If Redis is installed, we will create an instance of it here. Is that okay? Inside this Redis, but we will have to install this Redis inside our backend. We need to install it inside this backend.

So, we will not install it directly here. We will take an image of it through Docker and run it here. Is that okay? We will run it in our backend control. Is that okay? So what do we need to do now? In this docker-compose YAML, we need to

do something. We need to take a Redis image inside services and run its container. Is that okay? So, let's do this work. We need to run that image. Basically, this is what we need to do. So first, I will write services, and after services, let's give some space because we have to do something inside services.

If I need to go inside services, then I need to do things in the service, so I will give two spaces here. After that, we need to create a Redis image. So here, we write Redis this way, and then we need to give it an image.

We write the image this way. And we will have to give the name of the image. So what will the name of the image be here? The name of the image is also our Red Radii. So let's write Radii here. Okay? After that, we will have to give it a port here. And what port will we give it? The port for Radii if I go

and if I search for a Radii port here, then see the port for Radii is 6379. So this is its port, and let's copy it from here. So that's how we will give it. First, we need to provide the host port, and we need to specify which port it will run on inside the container. Okay? So

what was its port? This port was 6379, and let's give the same port to the container as well, which is 6379. Okay? So we've done that here. What will happen here? A Radii image will be installed here. Okay? Inside our Docker.

So, please do this work. First, what do we have to do here? First, we need to open our Docker desktop here. If you don’t have Docker Desktop installed, then first install it. I have it installed already. So I will open my Docker

Desktop here. I have opened my Docker Desktop, and currently no container is running here. So what do we need to do here? First, we need to create an image and at the same time, we need to run a container.

Okay? Let's do this work. If I go here, now I need to run our compose.yml file here. So what can I do for that? I simply go here, CD. If I go here, where do I need to go first? To 2.

Go into fresh AI. Then afterward go into the back end because our .yml file is inside this, under the back end. See, the .yml file is in the back end. Now what do we need to do with this .yml file? We need to run Docker Compose up here. So let's write

Docker Compose up. Let's run Docker Compose. Hit enter. Just a second; it’s not happening here. So one second; let's rename this and here we don't need... we need to add hyphen. So Docker Docker-hyphen Compose .yml file. Okay? Now what do we

do? First of all, let's clear this. And now we’ll run the command again. Docker Compose up so that we can install an image and run a container here. Okay? In the back end, we will have one container called Radii.

Okay? So we write Docker Compose up and hit enter. So see, what is it doing first? It is pulling the image of Radii, meaning it is installing the image of Radii here. Okay? It is approximately 54 MB here. So let’s wait for it to finish. After that, what will it do? After pulling the image, it will run a container here. Where will our container run? Inside our Docker Desktop. Okay? Let’s wait for it.

Our work is done here. Everything has been completed here. If I go to my Docker Desktop,

you will see a container is running. Inside the back end, a container named Radii One is running here. Okay? And also, an image of Radii has been installed here. Okay? So what did it do? Inside the back end, it has run a container named Radii.

So our aim is accomplished here, and we can now use Radii in our back end. So our work here is completed. Okay? We have a container named Radii One, and we are getting its container ID. The image we are using is Radii. And

what is its port? 6379, which we specified in the .yml file here. Okay? So we have installed Radii. Now what do I need to do? Inside this shared folder, in this Radii folder, I need to create an instance of Radii in the file called Radii.js.

How do we create it? Through IO Redis. So let's do this work. First, let's do a task here. Again, we go to our backend here. So if I go here again one more time. After that, I go here to the backend. So first, I need to

do npm init here. So we run npm init which will add our package JSON inside the backend. Okay? We click on yes this way. And we don't need to create some index.js etc. We just need one package here. After that, what do we need to do here? Let's clear this.

And now I need to install npm to use our Redis package. So let’s write IO Redis here. IO Redis is the package. Let's install it this way. Okay? Now we have to install it inside our backend's root. Look at what our

backend is, it needs to be inside this. As a result, we have got a node module. We have got a package lock JSON and we've also got a package JSON here like this. Okay? Now we don't need to make many changes inside it. In the dependencies, the IO Redis package has also been installed here. So we've done this much work

here. Now let's move on. Our IO Redis has been installed here. Now let's go again to Redis.js. Now we will import it. Let's import Redis here. Where will Redis come from? It will come from our IO Redis. Okay? So like this from IO Redis,

it will come to us. And now what do I do here? I create an instance of Redis here. Let's write Redis equals to this way. And here, with new written like this, we write Redis which we just imported here. Where from? From IO Redis. From this, let's take a Redis here. And for that here I need to

provide a Redis URL. Okay? So how will we get the Redis URL? So we will put it inside the env. So let's write process.env and give it a name like this Redis URL here this way. Okay? So we will provide it here and

what we've written for Redis we will also export it as default. Okay? Export default Redis. Now what can we do here? Through this Redis now we will be able to access our Redis. Okay? Which we have installed here in our Docker

Compose yaml where its container is running so that we can use the properties of Redis, okay, setting and getting them, inside our entire backend. Okay, we will be able to use it in the gateway, inside services everywhere and now the Redis URL inside process, how will it get that

? Will we need to create a file in the backend? No, we won't do anything. If we need to access it inside the gateway, then we will give its env Redis URL inside its env. Okay? This way, if we need to access it inside our service then inside that service we will write a Redis URL.

Let's write it here like this, Redis URL, Redis underscore URL, we will write it here this way and give it a URL inside it. Okay? What will its URL look like? So first, we will write Redis colon double slash localhost slash and

its localhost colon and what is its code here? 6379, which we gave here, look here, we provided it in the YAML file, let me go one sec down, so look here, we had given it a host and a container port here, so for the host port, we provided it 6379, and the container port

was the same. So here this is its localhost port. Okay? So we have provided it here and what will its URL be? Redis colon double slash localhost colon 6379. So this is the URL for Redis here. So let's also write this inside double quotes.

This is how it is. Okay? So now here whenever we access Redis, we will process dot enB from wherever we access it, like if we access it inside Auth, then what will it do? From here it will take that Redis colon double slash localhost colon 6379, this URL.

It will take. Okay? Here, okay? Just like the same Redis URL, we also provide this. We also place it inside the gateway of enB. Okay? Let's go here too and write the same because we will use Redis inside the gateway as well and we have already provided it inside Auth.

Okay? So what will happen here? An instance will be created for Redis here and it will also take from process dot b Redis URL. Okay? Great. Now whenever we need to use Redis here, we can access this Redis that we are exporting. Okay? So if

I go inside Auth and now go inside the controller and then go inside the OS controller. So now what do we do here? We use our Redis and through the session ID we set what? We create a session inside it. And what things will we set inside that session? We will provide the user's Firebase.

UID. Name and email will be given to it. Okay? So whenever we need to get the current user. Okay? That means, whoever our current user is, we need to get it. So if we provide the credit as session ID. Okay? To access our session, if we provide the session ID, it will give us the data.

Okay? So the issue we were facing here was how to get the user through the session ID? So who is solving that for us? Redis is solving it for us. Okay? Because we are setting it inside Redis. So now how do we access it? How do we set it inside?

Let’s see that. Okay? So here, first of all, we use await and I write this way Redis where, look, where our Redis is coming from, Redis is coming to us here from dot dot slash dot dot slash dot dot slash shared slash Redis slash redis dot js file.

It means where is it taking it from? It is taking our file from the backend root. Look at it this way, okay, because we first applied dot dot slash so we came here to Auth and again applied dot dot slash so we came to services gateway and again applied dot dot slash.

Then we have come back to the backend. And now inside that backend, by applying a slash where did we go? We went to our shared folder. Look, we went to the shared folder. Then by applying a slash, we went inside the Redis folder in the shared folder and inside the Redis folder.

There is a redis dot js file. We have entered it. Okay? So it is very simple to import it this way. So automatically it has already been imported. Now inside this Redis, there is a set method. Now we will use it, and now I need to provide a Redis.

Here and provide a value inside it. Okay? So we will access that through its value. Okay? So now how to write it? So with backticks, we write. First, we give it a key here. What has our key become? A session. Our key has become

session. Now after putting a comma, we give it a session ID key with a colon, a value. Okay? So here, I will write it like this with a dollar sign. So what will it do? Through that session ID which is being created here.

Okay? The session ID that is being created here. Through that, we create a session here through session ID. Okay? And this session ID will be found to us whenever we need the current user, where will we get this session ID from? It will be found to us here inside cookies.

In the sessions, because we are storing the session ID inside cookies here, it will be found, and whenever we need to get it through Redis, we will write a session here through red dot get and provide the same session ID.

we will provide it so that we can get that data. Alright? So it's that simple here. First, we will set it up. When we need to get the current user, we will first get the session ID from the cookies and then we will provide it through Redis.get, and we will get the data of the current user.

Alright? This is the flow we are going to follow. Alright? You must be understanding now why we set up Redis here? Because inside the session ID, there was no user data at all. So what did we do here? We created a session through the session ID inside our Redis and set it up in Redis.

What are we doing inside this session? We are setting up data inside a JS object, which will give us the user ID, user UID, his name, and his email ID, along with a user ID that will come from the database. Alright? We are setting all these things up here.

So here we put a comma and now we look, we have given one key and added Redis here. Now we will add values in front of it. So what do we do inside the value? We stringify it using JS. Alright? Inside JS, we stringify it. First, we need to give what things to it? Let’s provide that. Alright? First, we need to give one user ID.

Alright? Now what will that user ID be? Alright? I mean, we write the user ID like this. So what will our user ID be? So the user ID that we have when we create the user here will be created as an underscore ID in the database. So we need to give that ID. Alright? And how will we give it? So here the user we created or the user we received here, we will save his user.underscore ID here inside the user ID. Alright? This way.

We put a comma here and we will not set the Firebase UID here. Alright? Leave the Firebase UID as it is. We will set the user ID here, name, email, and finally, we will set an interview coin. Alright? Inside this session, in Redis. Alright? So this is now the user.

The ID is set. Now we add a name here. And what will the name be? Our user.name will become our name. Alright? Then we will add the email in it. So which email will it be? That is the user.email, we will write here. So that email will go. After that, we add an interview coin.

Here I write interview. We had given the name interview coin. We didn't give it coins. We gave it the name coin. We had removed the S. Alright? So what do we put into the interview coin? That same user that we just created or got earlier, we write here in the interview coin.

So we add the interview coin like this. Alright? So we have set these four things inside this session. Alright? With that session ID, and we can also set an expiry for this here. So here we write this as ES. We write this in double quotes and also.

We can specify the time for when we want to expire it. So look here, it states that we must tell it in seconds and not in milliseconds. So we have to do it in seven days. So understand one thing that we will have to write seven first. And then we have to multiply by each one. Each day has 24 hours.

And each 24 hours has 60 minutes, and each minute has 60 seconds. So look, how has it changed? So this is how our seven days have changed into seconds. Alright? Because we need to provide the value here in seconds. So we have done this here.

So the session we are setting up through the session ID will expire in seven days. Because we are also expiring the session within the seven days. Where? Inside our cookies. Alright? So we have done these things here. So now what will happen? This way, we have a session of sessions.

तो ये जो हमारा यहां पर सेशन हम सेट करा रहे हैं सेशन आईडी के थ्रू वो हमारा सेवन डज़ के अंदर एक एस्पायर हो जाएगा। क्योंकि यहां पर हम सेशन को भी सेवन डज़ के अंदर एस्पायर कर रहे हैं। कहां पर? अपने कुकीज़ के अंदर। ठीक है? है तो ये कुछ यहां पर हमने कर लिया। तो अब यहां पर क्या होगा? इस तरह से हमारा सेशन के सेशन का एक एक

The session will be created here. It will be set inside Redis, and whenever we need to access the session, we will have to provide a session ID here that we will store in cookies. Okay? Do you understand this much? This was the only work we had to do here. So we have done all this work here. Alright?

Alright? We have done this much work here. Now let's understand this one more time in the same way. Okay? Let's review what we have with Google Auth again. First of all, we will receive a token from the front end. Okay? When we authenticate through Firebase...

...we will receive a token. Where will we send it? We will send it through the body to our Auth Service here. Okay? After the Auth Service processes it, this token will come. Now, we will initialize an app here through Add Fire with Admin, which will verify that token.

And it will provide us a decoded token here. Okay? It will give it to us in a decoded form. Now, what will we do first here? We will check for our user, to see if the firebase UID matches this decoded.userID. What does that mean? It means that our user already exists here.

Okay? If the user does not exist, we will create the user. We will insert the decoded userID into Firebase UID, the decoded.name into the name field, the decoded.email into the email field, and we will finish up the remaining tasks. Okay? Let’s create the user.

Now our user has been created here. Alright? Now we will generate a session ID. Through crypto, we generated a session ID using crypto.randomUUID. Okay? And we have created a cookie in cookies named session, where we saved that session ID.

Alright? For seven days. However, at this point, we didn't have any user data stored within the session ID to access our current user. So we used Redis to create a session, where we needed to save the user's ID, name, email, and interview coin.

And how will we access that? We will access this session through the session ID. Okay? So whenever we need the current user, we can provide a session ID, and if that session ID matches our session's, we will be able to access all the data within it, such as user ID, name, email, and interview coin.

We will essentially access our current user's data. Okay? And finally, we returned our user. Alright? If there's an error, we will return the error. So this was our Google Authentication Controller. Now what do we do here? Let's create our Logout Controller.

Okay? So here I will write export const. Let's write logout here. Alright? And we will create an async arrow function. Here we write it all inside a try-catch block. Okay? Now what do we need to do here? Alright? First, we need to clear this session. Look, we need to remove the session from cookies and also delete the session set in Redis.

Okay? So that we cannot access our current user. If we cannot access our current user, what does it mean? It means that our user has logged out here. Alright? This is exactly what it means. Okay? If we are able to access our user's data, what does it mean? It means our user is logged in. That's it.

So if we do not want to access our user's data, first we will clear the session from our cookies, and also delete the session we set in Redis. This is all we need to do. Let's do that inside logout. For this, we first need to find our session ID. And how will we get the session ID? We can find the session ID within request.cookies under session.

Whenever we call this function here, we will fetch it...

...

If we log out, then we will fetch through X and validate the credentials there. Okay? Because here we will use the cookie parser within our auth. Alright? We used the cookie parser package that allowed us to access the cookies within our auth.

So, what will we do here? Through that cookie parser, we will see what we get, and we will be able to access that cookie through our session, and we will get the session ID. So let's do this work. I will write a cost like this, and we will need a session ID here. So how will we get the session ID? Here we will make a request.

from our cookies to fetch it. If we request from request.cookies, then after that, if there is any session here, alright? If there is some ID for a session, then it will give us through request.cookies, we will get the session like this. Okay? Now if I have gotten the session ID here.

What do I need to do now? First of all, I need to clear the session, should I clear the cookie or let’s clear the cookie. Or we can set the session here. Let's delete it here; that would be the best. Okay? So now we go here. We will set a simple if condition that if we

पास यहां पर सेशन आईडी है। अगर यहां पर हमारे पास सेशन आईडी है तो सिंपल सा एक चीज हम यहां पर कराएंगे। तो यहां पर अवेट लगा देना सबसे पहले। अब यहां पर अगेन रेडिश का यूज़ करेंगे। रेडिश के अंदर एक होता है डिलीट मेथड हमारा होता है। तो यहां पर डिलीट मेथड लिखते हैं। और किसको

डिलीट करना है? तो उसके लिए हमें उसकी की और वैल्यू हमें देनी पड़ेगी। तो हमें यहां पर बैक टिक लगा देना। सबसे पहले हमें यहां पर एक सेशन को डिलीट करना है। ठीक है? और कौन से सेशन को? जिसकी आईडी यह हो। और सेशन को डिलीट करने के लिए एक्सेस करने के लिए हमें उसको सेशन आईडी देनी पड़ेगी। तो

वो इस सेशन आईडी वाले सेशन को यहां पर डिलीट कर देगा। ठीक है? इस तरह से। तो हमारा सेशन यहां पर डिलीट हो जाएगा डेटस के अंदर जिससे जिससे क्या हो जाएगा कि हम करंट यूजर के डेटा को एक्सेस नहीं कर पाएंगे। ठीक है? इतना काम तो हमने कर लिया। अब साथ में यहां पर कुकी को भी क्लियर करा देते हैं। जिससे हमारे कुकी

इसके अंदर भी सेशन ना रहे। ठीक है? ये काम भी जरा करते हैं। तो यहां पर एक होता है रिस्पांस डॉट क्लियर कुकी नाम से एक होता है हमारे पास क्लियर कुकी। ठीक है? अब इस क्लियर कुकी के थ्रू हमें उसको बताना पड़ेगा, नेम देना पड़ेगा। किस कुकी को क्लियर करना है? तो हमें यहां पर एक सेशन

नाम से कुकी को क्लियर करना है। ठीक है? और हम सेशन नाम से ही इसको देखो हमने यहां पर स्टोर कराया था। देखो कुकी के अंदर हमने सेशन नाम से सेशन आईडी स्टोर कराई थी। ठीक है? और बाकी उसके बाद यह कुछ ऑप्शंस हमारे हैं। इनको भी दे देते हैं। जैसे कि हमारा http ओनली को ट्रू कर देते

हैं। सिक्योर को फॉल्स साइड को स्ट्रिक्ट कर देते हैं। ठीक है? इस तरह से ये कुछ कर देते हैं। अब इतना काम हमने कर लिया। अब लास्ट में हम क्या करा देते हैं? रिटर्न करा देते हैं। कोई कुछ रिस्पांस। तो यहां लिख देते हैं रिटर्न। रिटर्न करा देते हैं। रिस्पांस डॉट स्टेटस देते हैं। इसको

कुछ स्टेटस कुछ 200 देते हैं। ठीक है? क्योंकि यहां और साथ में js के अंदर इसको एक मैसेज यहां पर दे देते हैं। ठीक है? ेशन के अंदर हम इसको एक मैसेज यहां पर प्रोवाइड कर देते हैं। यहां लिख देता हूं इस तरह से मैं मैसेज और मैसेज के अंदर लिख देते हैं लॉग आउट सक्सेसफुली लॉगउ सक्सेसफुली।

ठीक है? यह कुछ यहां पर लिख देते हैं इस तरह से। लॉग आउट सक्सेसफुली यहां पर लिख देते हैं और कुछ भी एरर आता है तो एरर को प्रिंट करा लेते हैं। यहां लिखता हूं मैं रिटर्न और एक सेकंड यहां पर साथ में और मैसेज को ट्रू लॉ लॉग आउट सक्सेसफुली लिखते हैं और साथ में यहां पर एक सक्सेस

भी ऐड करते हैं और सक्सेस को यहां पर कर देते हैं इस तरह से ट्रू कॉमा लगा देते हैं और यहां पर एक मैसेज रिटर्न करा देते हैं। तो ये कुछ दो चीजें हम यहां पर देते हैं सक्सेस ट्रू और मैसेज कुछ और साथ में यहां पर हम कुछ इसके अंदर भी रिटर्न कराते हैं। इस तरह से बटन दाते हैं। रिस्पोंस

डॉट स्टेटस कुछ 500 जेएसएन के अंदर सक्सेस को फॉल्स कर देते हैं और मैसेज को यहां पर एरर डॉट मैसेज को प्रिंट करा लेते हैं। ठीक है? इस तरह से तो ये कुछ हमने यहां पर कर लिया। ठीक है? तो इतना काम हमारा यहां पर हो चुका है। हमारा जो लॉगउ का कंट्रोलर है वो भी यहां पर बन चुका है। ठीक है? तो

Logging out was very easy. What do we need to do here? We had to delete the session ID from the Redis session and clear the cookie. That's it. And finally, we returned a log out successfully. So this is our log out controller, right? Our login is through Google Auth.

And here the logout controller is ready. Alright? So the controllers have been created. Now let's create some routes for them. Okay? After creating these routes, what will we do here? We'll start setting up our front end for a little while. Okay? For now, we will keep the Auth disabled here.

Because now what will I do? We will log in and log out through the front end here. Alright? We will check them there. Okay? So what will we do for that? After this, we will create the front end. First, let's create our route here. So we will create a file named auth.route.js inside the route.

Alright? And how will we create the first route? For that, we need to use Express. So let's import Express from Express. Okay? We have done quite a bit so far. After this, what do we do? First, we initialize our auth router here. So I will write.

const authRouter = express.Router(); So here we write express.Router(). Through this, our auth router will be created. Now through this auth router, we will request the auth router and first we need to make a POST request.

And for the slash, we will write slash login or we can just write login here. Alright? Let's stick with writing login. Okay? Also, we need to specify which route we need to call. So here we need to fetch the routes for Google Auth here.

So, as I explained to you about the route section, we will give it a route so that when you click on this button, which means when you click on this login, what will it do? It will perform all the actions that we have written in this controller.

Okay? So if we understand it like this: the route is like a button. When we click on this button, whatever we have created here in Google, consider it as a fan. So as soon as we request this login, we will turn on our switch, and our fan will start running.

Meaning whatever actions we have performed in Google will start working here. That's all. Okay? So whenever we fetch something like this, if we fetch this kind of local host that is http://localhost:port, okay? Now the request will go to the gateway first.

Meaning we will make a request at port 8000, then we created a proxy through which we made a route in the gateway so that if we need to access something, to access our auth service. So whatever URL we have in our gateway.

Then if we add /api/auth, we will be able to access the auth service here. Okay? So similarly, we will write here, see, we will write /api/auth and if I add /login after putting a slash.

In this way. Now this controller will be fetched here. Okay? Meaning the authentication we will perform within this controller will work successfully here. Alright? It will need to fetch this URL. Meaning we need to fetch the entire URL. And where will we fetch this URL from? From our front end.

Okay? So this task we need to do afterward. So we will set up the front end. Before that, what do we do? Let's create a simple router for our logout. So here we will simply make a GET request. We'll write /logout here. And we'll name it the logout controller.

It will come to us. Okay? And after this, it is very important to set up JS. There was no JS here. Some errors might have occurred, so we set it up. Okay? And in the end, what will we have to do here? We will have to export it. We will export the default here to whom? To the auth router. Because this auth router.

We also have to place it somewhere. Where? Inside our index. Inside the index.js. We also have to write this for our and the service’s index.js. So here using app.use we write in this way and add a slash like this and add a comma so that we write here what? Auth router.

We write it this way. Okay? So the auth router has been imported. Now what does this slash mean here? This slash means that if we make a request here to our gateway and write API/auth after adding a slash. Now after this slash, if we write anything.

If we write login after this slash, then it will go inside the auth router. So if there's something named slash login here, and if there's something after that in the auth router, then what will it do? It will fetch that API. Okay? So we have done some things here. Now look here, what have we done.

Was there? I had also set up cookie parser. Okay? And what do we need to do here? We also need data in JSON. So for that, we will have to do some things. We also need to access our cookies. So we will have to write cookie parser here as well. So first, let's do one thing here. We write app.use and here we write.

Like this. We write express.json inside app.use. This way our data will come correctly in JSON. Okay? Whatever data there is will come in JSON. After that, using app.use, what do we do here? We will also write our cookie parser here like this. Okay? So that if any cookie-related errors.

Don't occur here because look here if we are doing something in logout because what are we doing in logout? We are accessing our session through cookies. So we need to enable the cookie parser here. Okay? That's why we have also set the cookie parser here and additionally added express.json and a request on.

The slash route to the auth router is also being sent. So we have done this much work here. Our authentication work is completed here. Only the server's work is left. Meaning that the authentication part inside the service is completed here. Now what do we need to do?

We need to make a request from the front end to this. We also need to create a Firebase project in the front end. Okay? From this, we will get a token that we will send to the server at our service. We will send it to the server. Okay? So we need to do all these things now. So first, we start setting up the front end.

Okay? And here we request to the auth service on our server at the gateway. So what will the gateway do here? The gateway will make a request to auth, and through auth, the request will go to login here. Okay? The rest of the things will happen. First, let's start creating our front end here.

Okay? So now what do we do here? We start creating our front end. And before that, let’s check one more thing that there's a small error coming in our auth service. Let’s figure out what it is. It is saying that it can't find any service account from here with the service account. Okay? So let's.

Go back to our Firebase again, and inside the service, we wrote it in curly braces like this shouldn't be done. It should only be written as the service account like this. Okay, and now we run it. Still, there is some error saying import Redis from.

Io Redis, it cannot use import. Okay, so let's do one thing here; it cannot import here either. So look here, if I go there and turn off my service. We go inside the backend. So here inside package.json of the backend, it has common JS.

Let's change it. Because it will not use the import syntax then. Okay? If there's CommonJS here, it will use the required syntax. It won't use import. That's why it was coming up. We have modularized it. Now it will be able to use import. Let's run this again here.

Let's do Control C once. And we'll run npm dam for this. Okay? And now it has run for us. Now, there are no issues here. Okay? Our gateway is running here. Our service is running here. And we have also created a docker compose file here.

Here, we have created a docker compose file in which our Redis container is also running. Look, our Redis container is also running here. Now what do we do here? We start creating our frontend. So let's create the frontend. We will make a login page there.

Okay? And from there, what will we do? We will send a token to the backend through Firebase. And we will fetch our login controller here. Okay? So that we can log in here. After that, what will we do here? We will find the current user.

And we will show their data. Okay? So these are the small tasks that are left, let's complete them. Let's design our home page of the frontend. Let's design our login page and then move forward. Okay? So now let's first do one thing here. Look, we have about three power cells here. Let's open one more.

We will go there first. And first, we go by cd to 2.fresher AI because we were previously on the advanced AI mind project, so we come here. After that, we cd again and now we will go to the frontend, we were going to the backend, now we go to the frontend, and now what do I have here?

I need to create a bit plus React project here. Okay, so if I go to Google here and search for bit plus React, if we search for that, we will find a command to use, npm create bit @latest, so we will use this here and create one.

Bit project here. Okay? Through this, we will create our frontend in React. Okay? So we have copied this command here. Let's paste it here and create it. Okay? So now we are creating through bits.

And it's asking us for the project name. So we type dot and hit enter. This way it will be created within the frontend. And now it's asking which framework you want to use, so we are using React. We are using JavaScript in the variant.

Here, an option is coming to choose a linter. So let's write ESLint here. This way errors will be shown correctly and we will install whatever we have. Click yes in this way. So now here what will happen is that two commands will run. npm install will execute whatever needs to be here.

Our frontend will get ready for us. Look, now what things are there in the frontend? If I turn off the backend here, if I close it, then inside the frontend what comes to our module? In src, there is the assets folder. There is appsx. Okay? All these things are here with us. Okay?

In index.js, some things are coming in this way. So now if I go here and delete this. Now let's do one thing here. Let's go to localhost 5173. Okay? Because you can go here by pressing Control plus Enter. We directly wrote localhost 5173 here. So in this way.

Something is visible to us here. Look, this is a bit large, so let's make it a little smaller like this. So look, this is showing us in some type. Now what do I need to do here? First, I need to clear these. Okay? Let's remove all these things.

Let's make some changes. We'll name this pressure e.i. Okay? And we will also use fab icons inside it. First, what do we do here? We remove our app.jsx from here. Okay? We also clear out the app.css and index.cs.

We clear it out and leave main.jsx as is. Okay? Now, if I go here, our page is empty, but some content is still coming up. So let's do one thing, let's do the RFC here. Now is this okay? Let's go back here. So look, now if I write anything here, nothing shows up.

Okay? You're seeing an empty page here because we've removed everything from here and we've also created an import-export function here under the app name in apps. Now what do we need to do here? We need to install some packages that we'll use here. So let's install those packages.

Let's do that. By running npm install, the first thing we need to do is create our routes here. Okay? Like if I want to go to the home page, I'll go to the slash route. And if I want to go to the interview page, after localhost 5173, if I go here to interview after a slash, then I'll be able to go to the interview page.

Okay? So we need to create routes for them. For this, there is a package called react-router-dom. So let's install react-router-dom here. Along with it, we will also use react-icons here.

So let's write react-icons here. Along with that, we'll use motion here. We will use motion for animation. So let's install motion here. And there are some other packages that we will gradually install here. For now, let's just do these. Okay.

Let's click enter. And as we need some packages, we will keep installing them here gradually. So our packages are installed now. So again, let's run this with npm run dev like this. So this will be our run. Let's remove this from here. Now first of all, what will we do here? We will create some routes.

Okay? And inside src, we will also create some components. Let's create a pages folder where we will write all the pages. After that, let's create a components folder where we will write all the components.

Okay? This way we can organize things. Now here I will do one thing, I will go to my main.jsx. And first of all, if I have to use react-router-dom inside my app, then what do I need to do here? Let's remove this strict mode from here. We don't need this.

Okay? Let's remove this, and the import at the top. Let's remove this as well. Okay? Now first of all, what do we need to do? For that, we need to wrap this with BrowserRouter, which will come from our react-router-dom. So let's write it here like this, BrowserRouter.

Okay? So what do we need to do? We need to wrap this. So let’s cut this and wrap the app with this, so we can use the properties of whatever react-router-dom is inside our app. Okay? Okay? So let's import this.

I will write this here like this, BrowserRouter and where will it come from? So we add from here. It will come from our react-router-dom. Okay? This way we have imported it here. So this much work has been done here. Okay? Now I need to create routes inside.

the app. Okay? So let's do that. First of all, let’s remove the dip like this. We will write something like this here. Okay? This is something. Now after this, what do we need to do? We need to create some routes. So how do we create routes? Let’s have a look. So here we write it like this.

Routes. So this will come from react-router-dom like this. Okay? So let's import this once here. So let’s write it like this, Routes. Okay? So this will come from react-router-dom. Now what do we need to do inside this Routes?

I need to create routes. So here, I will write the route like this. Okay? And we should not write it like this. We will cluster this here. Like this. Okay? This is something. Now what do I have to do here? I need to give it some pages, etc. So inside pages, I

What do I do here? I will create a home page named homegs. Okay? Let's create that. We can create some interview pages or a resume, a dashboard. Okay? Right now, we're not writing resumes. Here we will create a simple dashboard.

So we will create a file named dashboard.jsx and write RFC here. This will do what? Our syntax will come here for import and export. Okay? Like this, the dashboard function has been created, and this is exported. Right

? And inside home, we will also write RFC like this. So here too, the home function has been exported and this function has also been created. Okay? So if you write RFC here in the same way, your install syntax will also come here with the import-export, for which we have an extension. If I search here

for ES7, you will see ES7 React Redux or something like this. You can install this here and enable it. Okay? After that, if you also write RFC like this, your function will also be exported here.

Like this. Okay? So it's a simple thing. You can do this, and we have done something here. And now I will write home page like this. Okay? So that we can figure out which page we are on. So let's write the home page here. And the same, we will also write a dashboard here. Let's write dashboard.

We will write a dashboard page or just write dashboard here like this. Okay? Now what do we do here? Inside the app, we will create the routes. So that if I go to slash, I will reach home. If I go to slash dashboard, I will reach dashboard. Okay? This task, let's do it.

So first, what do we need to provide here? We need to give it a path. Look, we will write the path here like this and one second, let's import the routes above. I will write like this, routes. So if we write the path here now,

Look, we are getting suggestions for the path. We will give it a slash path here, and for the slash path, we add an element here which we want to navigate to. So here we will navigate to our home page. Okay? We will redirect to the home page like this. Okay?

Similarly, I will create one for the dashboard now. A route, let's write slash dashboard here like this. Okay? And where do we want to keep this? So we will navigate to the dashboard like this.

Okay? So we have done two things here. Now if I go here. Okay? And look here, home page is being displayed. Because if nothing is placed here, what does it mean? It means we are on slash. If I put a slash here and write dashboard. Like this, if

I write dashboard here and hit enter, you can see it displaying dashboard here. Look, it is showing dashboard here. So this is what I wanted to tell you that this way we can create the routes. If I go to slash dashboard,

we have reached the dashboard page. And if I don't write anything here. If I just write a slash, then we have reached the home page. Like this. So the routes we created here are working properly. Now what do we do here?

We are going to use Tailwind CSS here. Okay? We will set up Tailwind CSS for our styling. After that, what will we do? We will start building our home page. Okay? We are not going to make the entire home page now. We will create a small nav here first, after that.

We will create a login model. For example, if we click on a button, a login popup will appear if the user is not authenticated. Alright? We will do this work here. Okay? So first of all, I will do one thing here. We go here like this and do some things here. So first I go here and

come to Chrome and search for Telbind CSS. Alright? Let's search for Telbind CSS. So we have come to the official website of Telbind CSS. And you will see an option for documentation here. We need to click on this. Okay? And here is the installation using beat.

Okay? So we created a beat project. So it has directly come to us here. Here it is first telling us that you need to create a beat project which we have already done. We have completed that much work already. Okay? We have created the beat project. What will we do first here?

We will install CSS here. Just as it is telling us. It's simple, just copy it from here. And we will go here. First, I will clear this so that this comes up. Okay? And here I will paste it. Okay? npm install tailwindcss@tailwindcss/beat and click enter.

Okay? This will get installed here and it has been installed here. Okay? Let's move ahead. Next, what it is telling us is that there will be a file named beat.config here. It will be in TS or JS. Okay? What do we need to do there? We need to add our tail CSS inside plugins.

Okay? And we also need to import it. So first I will copy this import here. And where is our file? So look, we have a beat.config file here in the frontend. Okay? We have found it. And here, we need to import this and write it here.

Okay? So we put a comma here that React is already imported. Now, adding a comma here, we will also import Tailbind CSS like this. Okay? We have done some work here for Telbin CSS. Let's move ahead. So we also added TBn CSS inside plugins.

Now what do we have to do inside our main CSS file? We need to import Tail CSS and finally run npm run dev. So we will copy this. And now which will be our main CSS file? So our index.css file is our main CSS file. So let's import it here. And then what will we do last?

We will do npm run dev here like this. Okay? We have done npm run dev. Now how will we know if Tail CSS is applied or not? So

we will give it something in Tail CSS. Okay? We give some values. First, we will add a class name here. Then we will give some color to the text. We will give some red shade to the text, like 200 here. Okay? Like this, and we will also give some font to this.

I will give it 3xl like this. Okay? So one second, here we won't give a font but we'll give this text. We write like this some text. So we will set this text to 3xl and then give the same CSS to this too. If I go here

then we will also add some CSS here and we will change its color to green. Okay? Like this, we will set it to green. Now if I go back here and go here, you will see something in red color writing the homepage. Okay? Alright? We had taken some light color, right? So let’s do one thing.

We will set this to 700, and similarly, we will give some red a shade of 700 here. So that a dark red color will come. Look, this is showing a dark color now. If I write dashboard by putting a slash here, you will see it coming up in green.

So this means that our Tail CSS has been applied here. Now what I need to do here is start building my homepage. After that, what will we do here? We will create a login model and if we have a button to place inside the homepage,

But upon clicking, we will open our login model here. Okay? And if our user is logged in, we will not show them the home page. We will show them the dashboard instead. So, this is what we need to do. But for that, we need the current user. So what do we do first? We log in here.

Then after that, we will find the current user. First of all, what do we do here? We create a map inside our home page and set up our login model so that we can log in. After that, we will proceed with the next steps. Okay? Now let’s move forward. So first, what do we do here? We start setting things into our home page.

Basically, we are adding a map or something here. Okay? So first, what will we do here? We have given our class name. Let’s remove this from here. Okay? And in its place, we provide some other CSS. Here we set the

background color to white. We give the text a dark black color. We adjust the font size here. We set the main height of the screen. We make the overflow-x hidden. Now we don't need to write anything for the home page. First, we will create our navigation bar area.

Okay? Let’s do this. And by the way, we had also imported a motion library here. So we will use motion here as well. If I go to the motion website here. Okay? Why are we using motion? Because we need to add animations here. So motion.dept is

the website where we have our React animation library. So we have arrived at our motion website. It has been newly created here. And there is an option for documentation. There is an option for some examples as well. So first, we go to documentation here. And on the documentation page, we can select.

Let me make this a little smaller. Okay? There’s an option for React in JavaScript. So let’s click on React. Okay? So first, if you see here how we need to use motion. First, we need to import it from motion select.

React. So let’s copy it from here and go up to import it here. Now we can use motion here. Okay? And how do we need to use motion? We need to use it with any HTML elements. See here, like there is a button showing up for you. So here,

by doing motion we created the button this way. Okay? So we can use motion this way. As soon as we use motion with our HTML elements, what happens? Here we will be able to use some properties inside it. There’s an animate property here.

The animate property is available. The rest here is our installation area. Okay? Now you can see here. This way we will be able to use things. One animate property has come. And see here, inside animate, we are rotating it 360 here. If I refresh this,

you will see that it rotated 360° here. Okay? Like this. Let's again go down. So there is a motion button where its initial state is an initial property that has a scale of zero. After animating,

its scale opens up here. Okay? It means that initially it is initial. There are some properties related to animate here. The initial state indicates where it will be first. After it animates, what will happen? Animate will tell us. Okay? If I refresh this,

in the initial state, zero means it will be from the bottom going inside initially, and after animating, its scale will increase. It will appear coming from the bottom to the top. See, I refresh this, and it appeared coming from the bottom to the top. Similarly, there is an initial animate property, and inside buttons, there are some properties for while hover and while tap. See, and what will happen on hover? It means that as soon as we hover over it, we can increase its scale. Like if I am hovering over it, its scale has increased to 1.1 here. See, and if I tap on it while tap then.

वाइल होवर वाइल टैप की प्रॉपर्टी होती है। देखो और वाइल होवर करने पे क्या होगा? मतलब कि जैसे ही हम उस पे होवर करेंगे तो उसका स्केल हम इनक्रीस कर सकते हैं। जैसे अगर मैं उस पे होवर कर रहा हूं तो उसका स्केल 1.1 यहां पर हो चुका है। देखो और अगर मैं उसको टैप करता हूं वाइल टैप तो

His scale should be a little lower. So if I click on this, see it is going inside. It is going. So similarly, we can add hover and properties like this. In the same way, there is a while and view property. It means that as soon as we view this, some animation will appear here. Okay? Look at all these things, this is something.

The animation is here like this. So there are many properties here. Similarly, we can also create some buttons using motion for this. Okay? We can do a lot of things here. By clicking on this, we can hide and show it too. In this way, we can add properties inside it. When we need to hide and.

show. Okay? All these things and here we have many properties. Some of our common properties include one of our initial one is animate and along with it is while in view while in view property. One is here we have while tab while hover. Okay? And there is also an exit.

property. We can also use that here. So all these properties, we will use here. We have discussed this many times before. If you want to know this in detail, you can read their documentation. Otherwise, just write on chat GPT and you will get a detailed.

explanation there. Okay? And what do we do? We start to create the project. The properties that we will use here, I will keep showing you there. Okay? This will be right for us. Otherwise, everything is here. You can read their documentation.

Okay? Now we go back here. So now what do I have to do here? I have to create a nav bar. So here I write nav bar like this and comment it out so we know that we are going to create the nav bar here. Okay? Let's write like this. Now what do we do here? We create a nav.

Okay? And for that we will use motion. Let's create a motion nav here like this. Okay? Now by writing motion here, what will happen? We will be able to use some properties inside it. Initial, animate. Okay? And there are many other properties. We will be able to use all those.

That's why we have written it with motion here. Okay? Like this. So first of all, what do we do with it? We give it some class names. And in the class name, we are going to give it something here. First of all, we will fix this nav. We are using the fixed property from the top.

It means we are using position fixed. So here we can use top, right, left. Top zero, right zero. Ah, let's make left zero. Let’s increase the Z index to 50 here.

Which brings everything below it. Okay? We are giving its height here some 42 pixels. We are giving its height some 52 pixels here. We are making it flex. It means we are giving it display flex. Item center justify between and justify between here we are.

giving it because if we create two divs inside it, one div will come on the left side, the other div will come on the right side. So we justify between here. Let’s give padding x some five here. It means that we give it about 20 pixels 20 pixels.

It means we give it in the x direction. Okay? And we lighten its background color to some white, making it about 70% transparent so that it looks slightly different from our background. After that, there is a backdrop filter. We blur it here in excel and give some.

border at the bottom and give some border black at 5% transparent. Okay? Like this and now inside it we will use some properties to determine where it will be in our initial. So there is one initial property. We use it like this to determine where it will be initially.

Okay? So where will we keep it in initial? So in the initial we will keep it in the y direction. And in the y direction, where will we keep it? Let's put it at minus 60. Something like this. Okay? And along with that, for its opacity, look, initially we can give it something like this. y.

Where should we place it in the direction? We can also set the opacity here initially. So, let's set its opacity to zero here. Okay? Now, what will happen with this? Where will it be? In the Y direction, it will be -60. This means it will be above. Okay? This means it will be upwards.

It will be upwards. Okay? And when it animates, where will it come? We need to bring this down from above. We set it to -60 in the Y direction. This means it is above our screen. And when we animate it, what will we do here? We will take it out in the Y direction. Okay? We will do something here.

We will take it out in the Y direction. So, we will bring it down from above. So here we will set it to zero in the Y direction. This means that previously it was 60 animated. As soon as its transition works here, after a few seconds, it will appear to us coming down from above. Okay? And as soon as

it comes down from above, we set its opacity again to one here. Okay? What happens here? Because its opacity will be zero above, we won't be able to see it. But as soon as it comes down from above, we will stop its opacity, so it will start to be visible to us. Alongside

we have a transition property. So, we also use the transition in it. So, we can add some time here for the transition. We can add some duration here. So, within the transition, there is a duration property. So, we use the duration. And we can add some duration here.

Okay? So, we can set the duration to 0.5 here. And there is an ease property as well. So, we will set the ease to ease out here. Okay? We will do something like this here. And we should not write it this way; we need to write it inside double quotes like this. And

we shouldn't import this, so let's remove that. So, we have done something here. So now, if I go back here, let’s head to the homepage. Okay? So that's how we go. So, right now you might see a line here. You might see a nap-type thing appearing here. But now, as we start manipulating it, then

we will see the things more clearly here. So this is our navigation. If I refresh it once, then we won't be able to see much right now. If I set its background color to black for a second. Okay? We can change it later. If I set it to black here.

and go back here, and if I refresh it now for a second, look after refreshing, it appears to come down from above. It is coming down like this. Okay? So this is coming down from above here. As we add things to it, it will appear even better.

So what do we do? We set its background back to white again. So, we will currently see a simple border type appearing here. It doesn’t look like a very good border because we've kept its opacity low, keeping it dark. Okay? That's why. So, our work is done here. Now here what

do we do? What do we do inside it? We create a div. Okay? We create a div where we will add our logos and such. Okay? We need to make two divs on the left side. One on the left side and one on the right side because we set it to justify between. So one side will show our logo and the

header area and the right side will have a login button. So let’s create those two items here. Okay? So, we will create a div for our logo. Okay? And inside this div, we will have another div where we will set our logo and span where we will write like this.

Let’s write here for a second, something like this in a span and the span will contain something written like this, Fresh AI. Okay, let’s write Fresh AI like this. And we need to include a logo in this div to do that, we will use a React icon first. So here, what do I do? I will give it a class name.

I am providing this here and we will center this using flex item and give a gap of two here. Okay? This way, the flex will align it properly on the sides. This means our logo will be on the left side and on the right side, this will be written with a small gap of two pixels in between.

There will be a gap of eight pixels here. Okay? This way. Now we need to add the logo inside it. So, let's bring in the logo. Okay? We had installed a package here. Now look, it is showing as Fresher A like this. So, we had installed a package here that is.

our React Icons. Now let’s go to the React Icons website and pick one React icon from here. Okay? So, I will type Artificial here. So, you will see an icon named Artificial Hype here.

We are going to use a few icons for our logo. So what you can simply do is import this from here. Just copy this like this and we will paste it above so that we can use this icon here and to see how to use this icon, we will copy this from here like this.

And inside it, we write like this. Okay? So, we have added a few icons here. If I go back here again and check, see the icon is also appearing here. See, the icon is coming along with it. Now we need to adjust it a bit. Let's add some CSS stuff to it.

And let’s also add a button here a bit. So, let's do one thing and add some CSS here. First, we will give this div a class name. Where our icon is. And we give it a class name like this. We will set the width to seven, height to seven, and make it rounded large.

So that we will see a square type appearing here. Okay? It will be a box type showing here with a width of seven, a height of seven, and it has rounded large. We will give it a background color of this black. Flex item center justify center and we will give it a shadow of.

a grey color. Okay? This means we will give it a blackish type shadow here. And with this icon, we can also add some things. If first I take it a little down. Okay? Like this. Now, we can give some sizes, etc., to the icon.

So here we will give a size of about 15 and we can also give a color to the icon. So we will set it to white color. Okay? Like this. Now, we should give our span a class name. Some here for the span, we give it a class name. We will set the font to.

extra bold here. Set the text to base and tighten the tracking. And here we will assign the text color. The text color here is black, so if I go here, it should appear like this to you. Here it is showing an icon written. Okay? And here it is written as Fresher AI.

It is written like this. See, it is appearing as written. Now what I need to do here? I need to also place a login button here alongside. After that, for our main section, we will lighten its background color a bit to make our nav appear more clearly. Okay? Let's do this here.

So as you can see here, we created this div where the logo is coming and there is a span inside it where what is written? It is written as Fresher Air. So, we created two divs. One div we made and inside it, we created a span. So, the left-side div is.

completing here because we had set it to justify between. So, we are going to create two divs inside it. So instead of one div, what do we do here? We can create a motion button. Instead of div, we will make a button here.

We will take care of that. And after that, what do we need to write inside this? Let's write that too. First of all, we add some class names here. Alright? And we will give the background color here a black type. So, we will set the background color to black here. Alright? And after that, we will set the backdrop.

We will blur this filter. We will change the excel text to white. We will make the font semi-bold. We will add a border. The border will be something of white color with 10% transparency. We will make it rounded. We will give the button a padding of 3px and around 1.5px padding here.

We will set the text to extra small. We will set the cursor to pointer. And within this, you will see that we also add more transitions here because we are applying hover properties. On hover, we will set the border to white here.

20% on hover. Alright? And additionally, we are adding a shadow to it. We will give a shadow of 0 pixels, 8 pixels, and 24 pixels in some black color in RGB. Now let's write what needs to be written inside this. So, we need to write it like this: Login and we also need to add an arrow here.

So here we search for an arrow. I will write 'arrow'. So, we have some arrows visible here. We will take one of these arrows which looks just right. So, let's take this one. We can copy it from here like this. And we can also import it here.

Alright? So, it's very easy to import icons here from react-icons. Just import them up top directly. And wherever we need to use the icons, we can use this 'fa-arrow-right' written here like this. Alright? Like I need to use it here.

So here I will directly use it like this. Alright? Like this. So if I go here and check it out, it looks like this right now. Alright? It looks like this. So, we will add flex inside it. So, this is what we have. Within it, we will add some more flex. Alright?

Along with the CSS. So, here I will write flex. We will center the items. And we will add some tap, which we will add as two here. Alright? Now if I look at it, it is coming up like this, with Login written on it. An arrow type is coming up here. Now within this.

We will apply some motion properties. Like we saw earlier, we had a 'while hover' and a 'while tap' in the motion properties we just saw a little while ago. Look, this is the property for 'while hover' and 'while tap'. So, let's use this here so that we can hover and click like this. Alright? We will also use some properties.

So, let's go here and we have used motion inside it. So now if I write like this 'while hover', we will use the 'while hover' property and increase its scale here.

So, we will set its scale to 1.04 here. We won’t give too much. Alright? A normal amount. And one 'while tap'. As soon as we tap on it, what do we need to do? We need to slightly reduce its scale. So, we will set the scale here to about 0.97.

We have done this like this. Now if I go back here and click on it, see, when I hover over it. On clicking it, it's moving inside. Alright? You can see it's not going too much because we've given it a normal slight rise so that it appears to lift slightly up. So, see, it's slightly lifting up and on clicking it, it’s moving down. You can see it.

So, we have created this here. Now what do we need to do when we click on this? We need to show a login modal here. We will show a popup here. So, by clicking on this, what will we do? We will show a model for our login here. Alright? Here our login popup will be visible to us. By clicking on this, and there we will fetch whatever login API we created, right?

So, let’s get that done.

Okay? For now, our nav is ready. Let's do one task here which is our main section, let's give it a little class name. Later when we create our main section, we will start putting things inside it. Alright? For now, we will just do one task. Let's give it a class name. Inside this, we will give some background color to the main section.

You can see here. We created a motion map. Alright? We made it inside this div. Look, this is our main div. And inside this main div, we created a motion map. This is our complete setup. Now after this, we create a section area.

Alright? Let's create one more section in this way and give this section a class name. So this is going to be our main section. So I write here like this main area and we comment it out like this here. Okay? So this will be a main area here. We give it a class name here and make it relative.

We set padding top to about 20. Then we set padding bottom to about 14 and overflow hidden. And we give its background color something like this blue type of white color. If I go here now, you will be able to see it showing like this.

When we start putting things inside it, automatically as we keep adding things inside, its size will keep increasing. Alright? So right now, this color is visible in this small area here because we haven't given it any height or width yet. That's why it has taken this small area.

As we keep adding things inside this div we created in the section area, its size will keep increasing and it will take some main height, screen, etc. Alright? It will take some area here. For now, we haven't written anything. That's why it has covered this much area.

Alright? So it's good that our nav bar is starting to display properly. Okay? Now let's do one task here. Let's create our login model and also show it here as a popup. Okay? Let's do this task. So now let's do one thing.

We create a file inside our components and name it like this login model. Alright? We are creating a login model here. We write login model dot jsx here like this and for it, we prepare a model here. Where will we show this?

We will show it on our home page. When someone clicks on the login button here, we need to show this. Alright? And as soon as the user logs in, we don't need to show the home page again; we will show them the dashboard area. So all these things will happen when we will have the current user, we will log them in. Alright? For now, let's log in here.

So we can start seeing things here. We will log things in the console here so that our user gets created. Once a user is created like this,

then we will handle the rest of the things. Like finding the current user. Alright? Setting the data of our user. We will do all these things later. First, let's prepare our login model here. And we also need an on close inside its parameters.

Okay? Why are we using on close? We take it inside a parameter here. Because when we click on it, we will basically provide a close button here. Okay? And upon clicking that, we need to remove this login model from our home page. That's why we are adding an on close here.

Alright? So let's use it. We start giving some class names in the inside div and start putting things inside it. Alright? So we give it a class name. First, we make it fixed. We set insert zero here. We give it a z-index of about 50. After that, we make it flex. Align items centered.

Justify the center and here we give it a background color, we're applying some flux, 40% transparent backdrop filter, and then we blur it. Add some padding here. Okay? So what have we done here? We added some CSS to it. This way it becomes one.

That’s our main div here. Alright? Like this. So, inside it we added CSS. Now after that we will create another div where we will take care of things. So, this was our complete area that will be displayed here. We're setting insert zero for fixing it.

Meaning this background color will be black, 40% transparent across the whole page. Now after that, we are creating a tip, we're looking to create a box in the middle of it. Okay? Because we have added flex item center inside it. This will center our box here.

So we need to work on this here. Now we give this div a class name. And we add this class name inside. We make it relative. Set its width to full here. And we are making the max width small. Meaning we are giving it a max width of 384 pixels.

And as soon as what happens here? When the width is less than 384 pixels, it will automatically take full width. Okay? This means it will start using the full width of this div. And after that, the background color we’re giving it something black, 80% transparent.

The backdrop filter is going to blur it a bit, to excel here. And border, something white here 10% transparent and rounded to excel. We set overflow to hidden. And we add a shadow here, zero 8 pixels of black color. Okay? Now this is our main div here. We are creating a main box like this. Now inside that box, we will add a header. We will add a button. Okay? We have to do that here. We will add the Google authentication button.

So this is something we have to do here. First, let’s create a header area. We write a header here. Alright? And also do one more thing. Here I create a div. Because what we need to do? We need to add a glass flash on top of this div in black color. For that, we create a closing div like this.

And I give it a class name here. We had related it. So we make it absolute with insert zero. This means we are going to give a background gradient color on this box at bottom right which will start from white.

Some 0.08% transparent will then become transparent in the middle. Then to transparent means that above we will see a glass-type finish here and pointer events set to none. This means we will also not be able to point at it. Okay? Let’s get this done here like this.

Now we need to see what it looks like. So here we will need to integrate a login modal inside our home. So let me do one thing. Let’s go down this section. This section and below the map area, we go down here and we will import our login modal from the components.

Okay? So we import it from components like this and it will be imported above. And if I go here, you will see it like this. First there’s a background color appearing across the entire page and in between there’s a small box coming up. We haven’t provided anything inside it yet.

For this reason, you are seeing a kind of line here. As we put things inside, its height will automatically increase here. Its width is taking a small width here. Okay? It's taking up max width this way. Now let's put things inside.

And you can see above the home page is ours. Okay? This is somewhat glass-type on top of the home page. Our fresher AI was written here. There was a button, and above that, this is showing to us. Now what we need to do in between here? A login box needs to be added here.

कराते हैं। और आप देख पाओगे होम पेज के ऊपर ये हमारा है। ठीक है? यह कुछ ग्लास टाइप का ये होम पेज के ऊपर है। यहां पर हमारा फ्रेशर एआई लिखा हुआ था। यहां पर बटन था। उसके ऊपर यह हमारा दिखाई दे रहा है। अब इसके बीच में यहां पर हमें क्या करना है? एक लॉग इन का एक बॉक्स यहां पर

It needs to be prepared. Okay? The area for logging in where there will be a button. By clicking on it, we will perform authentication. So, now we go again to the login model. And now what do we do here? We create our header area. So, for that, we give it some class names, dip, and

Here we set it to relative and give it padding of seven here. Okay? And we are doing it relative because now I need to add a button here. Okay? So we place a button here like this. For a second, we add a button like this. And what do we do inside it? We add an

icon. Okay? So if I write fix here, sorry, if I write FA here like this, you can see that the fax icon is appearing here. So what can you do here as well? You can search for icons etc.

As you wrote fax, this has automatically been imported from the react icons above. We can use it here like this. Okay? So if I do what here? First of all, I give this button some class names. And now what do we do here? We give it some class names.

We make it absolute. Four from the top, four from the right, and the text will be somewhat 30% transparent in white here. Upon doing this, the text will turn white. We are providing it in the transition color. Okay? We give it some things and also add some size inside the icons.

Inside this, we set the size to 16 here. Okay? The first thing, why did we make it absolute? Because we had given the one above as relative. So we can set this to absolute. And what we need to do? We need to put a button here on the right side inside our entire box, four from the top, and four from the right.

Okay? By clicking on this, we will perform something here. And by clicking on it, what will we perform? So we put onClick here like this. So on clicking, the parameter we have is an onClose name with a value that we are taking here, so that by clicking, we can close it. Okay?

So if I click on this, whatever function we would have created related to onClose or whatever value we would have given here will take it and remove it from here. Okay? This means that when we click on this button, it will remove the whole area that is currently visible to us. Okay? And there is some cross icon here.

Look, when we hover over this, it is showing up with our style. And hold on for a second, this does not seem like the right icon. So, let's do one thing. Let's use another icon in its place. Okay? We have an icon named fix. So, let's do one thing. Let’s check on react icons.

So, we search for a fix here. So, a fix icon is something we have. We can copy it like this and paste it here in its place. Same as the SX icon. Okay? Now if we go back here and check this, our icon is here. Okay? It’s also small and it is clearly visible.

So that's fine. Now we proceed to add the rest of the elements. We will add some headers, etc. Here you can see our box has appeared. Initially, a small line type was showing. As soon as we added our button inside it, the size automatically increased.

Okay? Like this. So now what we do is we place an H2 below this button, meaning in this div, we place an H2 and give it a class name here and in the class name, we will make it text somewhat larger and the font we will make it bold,

and center the text. We will give a bottom margin of two. And the text will be white here like this. Okay? We add some CSS inside it. We lift it a little higher. And after that, what do we need to write here? So we will write sign in and sin in two here and add a span in between.

Here we add another span like this and inside the span, we write like this, "Freshers AI" like this. Okay? And we will also give this span some class name here. And we will give this span some font.

Some extra bolding is done. The text is being charged. Tracking is tight, and some text is white. Okay? It differs slightly from the above, we give it a font here that makes this Fresher AI look different here. So if I go back here, it shows 'Sign in to Fresher AI'.

Like this. Okay? And if we take this down here like this. So this is how it is showing. Now there’s a gap in between them. So let's do one thing. Here we put a curly basis and set it equal to and add curly basis with a little space in double quotes. This will create space between them.

Okay? So 'Sign in to Fresher AI' is being displayed like this. Okay? It looks good. Now we proceed with things below it. Below this H2, we add another paragraph here. We give this paragraph a class name. And within the class name, we set this to.

Text white 24 45% transparent, text center, and some text small here. And what should we write inside this paragraph? So we can write like this. Let's write 'Continue Your AI Interview Journey.' Okay? This is something we write here.

So if I look at it again, you’ll see that our upper part is more white and this one is slightly white. Now we add a button below it. Okay? We add the Google Authentication button and below it we will add another paragraph and some buttons. Okay? This.

What do we do below that? Now we need to add a button. So we make a div here like this. Okay? And we give this div some class name. Here we assign a margin top of about seven like this. Okay? Now after that, we create a motion button.

Let’s write 'motion.dot button' here. Wait a second, let's write 'motion.dot button' here. Okay? Right now, our motion is not imported above. So let’s import the motion. We’ll copy it from the home page like this.

And we’ll also add motion here. Okay? And we need to use some properties here. While tab, while hover. So let’s also copy it from here like this. And where will we place this? We will place it inside this button. Like this. Okay? We will apply two properties here. And now.

Let's do one thing here. We have done something here. Now what we need to write inside is this. Before that, what do we do here? We give this button some class name and other properties. Okay? We add some class names below it and we format it a little bit.

So it will look proper. So we add some class names inside it. We assign it some CSS. We set width to full. Make it as a flex item with enter and justify center. And we set item flex item center justify center and gap three.

We are doing this because we will use an icon inside it. And below that, we will use a span. Okay? And we give padding of PY three here. We make it rounded a bit and add a border. The border here will be somewhat white and 15% transparent. The border will be some.

White 10% transparent, and we will set the backdrop filter to blur. On hover, the border will turn somewhat white here. When hovered, its background will become somewhat white too. Okay? White with 0.14% transparency shadow a little inner and turn on transition. Okay?

So here we are changing the background property on hover. And when hovered, we need to increase the scale through our motion. Okay? We have done something here. Now, let's format it a little bit. Now let’s write it this way. Okay? Towards the top.

So we have written it properly here. Okay? Now inside it, we will do things. For that, we will go here again and you will see that a button area has been created here. On hovering over this or clicking it goes inward. Okay? Now we need to do things inside it. What do we do first?

We place the Google icon here, okay? Which icon do we need to place? So, let’s use this colored Google icon. We can copy this icon from here like this. We will import it. We copy this and we will import it here on top.

And we copy this FC Google from here and place it inside this button. Okay? What do we write below this button? Like this, we write FC Google and place it here, and we add a span with some class name to it. Okay? We add the class name here.

What needs to be written inside? We will write that too. So we give it the class here. Text some white font, some medium text, some small and we give this Google icon a size here. We set the size to 18 here. And what needs to be written inside the span?

Let’s write that. Here we write ‘Continue with Google’. We write it here, okay? So if we go here and check again, you will see a button like this. Google is written here. The text ‘Continue with Google’ is written here. When you click on this, on hover,

it is hovering. When you click, it goes inward. You can also see that its background color is changing here. See how this has been created. So this way we have created a button here. Now let’s do one thing. Below this, let’s write something like ‘Our auth is secured by Firebase’ because we are

फायरबेस का ऑथेंटिकेशन करा रहे हैं। तो हम यहां पर क्या करते हैं? थोड़ा सा फायरबेस को भी क्रेडिट दे देते हैं कि उसके थ्रू हम ऑथेंटिकेशन कर रहे हैं। तो उसको यहां पर लिख देते हैं कि फायरबेस के थ्रू कर रहे हैं। ठीक है? तो एक काम करते हैं। अगेन यहां पर जाते हैं इस मोशन बटन और इस

डिप मोशन बटन और इस दो डिप के बाहर आते हैं। ठीक है? तो ये कौन-कौन से डिप थे? तो एक डिप तो ये वाला था हमारा। ठीक है? ये कुछ डिप था। एक मतलब कि यहां पर जो टेक्स्ट वाला एरिया है और कंटिन्यू विद Google वाला एरिया है। इन दोनों के बाहर आते हैं। और अगेन एक डिब यहां पर बना लेते

हैं। ठीक है? और इस डिप को कुछ क्लास नेम यहां पर हम देते हैं। इसको रिलेटिव कर देते हैं। बॉर्डर कुछ टॉप हम दे देते हैं यहां पर। और साथ में इसको बॉर्डर कुछ वाइट यहां पर दे देते हैं। बैकग्राउंड कलर इसका कुछ ब्लैक कर देते हैं। 30% ट्रांसपेरेंट पैडिंग इसको कुछ हम फोर दे देते हैं। और

टेक्स्ट कुछ इसका सेंटर कर देते हैं। ठीक है? इस तरह से। और इसके अंदर हमें क्या करना है? एक पैराग्राफ भी ऐड करना है। ठीक है? और पैराग्राफ को कुछ क्लास नेम देते हैं। और पैराग्राफ के अंदर लिखना क्या है? वह भी जरा लिखते हैं। तो यहां पर इसको टेक्स्ट वाइज बाइट कुछ यहां पर 30%

ट्रांसपेरेंट टेक्स्ट कुछ ट्रांस और यहां पर हमें लिखना है सिक्योर ऑथेंटिकेशन अय फायरबेस इस तरह से कुछ लिखते हैं। तो यहां पर इस तरह से हम लिखते हैं सिक्योर ऑथेंटिकेशन पावर्ड बाय फायरबेस। ठीक है? ये कुछ यहां पर लिखते हैं। अगर हम जाएंगे यहां पर तो देखो इस तरह से हमारा ये बन के

आ रहा है। देखो इस तरह से बन के आ रहा है। ठीक है? तो इस तरह से हमारा बन चुका है। कितना बढ़िया लग रहा है यहां पर। ठीक है? ए सिक्योर ऑथेंटिकेशन पावर्ड बाय फायरबेस लिख के आ रहा है। और इस तरह से एक हमारा एरिया बन चुका है। ठीक है? अब मुझे यहां पर क्या करना है? इसमें फायरब के थ्रू

ऑथेंटिकेशन कराना है। उससे पहले जरा यह काम करते हैं कि इस पे क्लिक करने पे हट जाए और लॉग इन वाले बटन पे क्लिक करने पे दोबारा से पॉपअप आ जाए। तो, यह काम जरा यहां पर करते हैं। सबसे पहले फिर उसके बाद हम क्या कराएंगे? इस बटन पे क्लिक करा के अपना Google से ऑथेंटिकेशन कराएंगे। ठीक है? यह कुछ हम करेंगे। सबसे पहले इस ऑन

क्लोज वाले फंक्शन को काम करना स्टार्ट करते हैं। उसके लिए अगेन हम होम पेज पे जाएंगे यहां पर और कुछ एक यूज़ स्टेट यहां पर बना लेते हैं। ठीक है? और यूज़ स्टेट हम किस तरह से बनाएंगे? तो यहां लिखता हूं मैं कॉस्ट। और अब यहां पर लिखता हूं मैं शो लॉगिन और कॉमा लगा के यहां लिखते हैं

सेट शो लॉग इन और इसको एक यूज़ स्टेट बना लेते हैं। यहां पर इक्वल टू लगा के लिखते हैं यहां पर यूज़ स्टेट और यूज़ स्टेट ऊपर इंपोर्ट हो जाएगा हमारा और इसके अंदर हम क्या करते हैं? इस तरह से हम यहां पर अभी इसकी वैल्यू को फॉल्स रख देते हैं। ठीक है? अभी यहां पर ये फॉल्स रहेगा। इस तरह

This is where we write it down. Alright? Alright? After that, how will we use their state here? Let’s take a look at that. So here we imported the login model under the section below. Okay? Now, when do we need to show this login model? Alright? When here...

the show login is true, then we need to show it here. Okay? Show login needs to be displayed when its value is true. And along with that, we have taken an onClose here as well. Now what do we do inside onClose? We create a callback function. What will we do when we click on this?

When we click on it, what will we do here? So upon clicking, we will change the value of the set show login here to false. Okay? I’ll write false here. In this way, we will set it to false. Okay? And we just need to provide this much here.

This is what we need to provide. Alright? So we need to set it to false. But we also need to change it to true. When do we set it to true? When we click on the login button here. So this is our login button that we created here. Alright? What will we do when we click on this button?

We will change it back to true. So here I write onClick, and upon clicking, what will we do here? The set show login will be set to true here. Okay? We will set some value to true. So now if I go back here, I can’t see anything here.

It has disappeared. If I click on login here, you’ll see as soon as I click on login, the value of show login became true, and as soon as its value became true, we had set a condition that if the value of show login is true, then what will happen is our login model will be displayed.

And as soon as we go here and if I click on this cross, its value became false again because by clicking on it, we are setting its value to false on this button. Alright? We have set onClose here.

Where did we put onClose? When inside this button we put onClick, we added onClose. So as soon as I click on this, the value of our set show login will become false again and this area will not be visible to us. So this is what we did here. How easy was that? It was not very difficult.

Now what do I need to do here? By clicking on this, I need to proceed with Google, click on continue with Google, and what do I need to do? Open a Firebase consent screen here, where we will do authentication with Google and get a token. And as soon as we receive that token, where will we send it? We will send it to our server and the service will verify it.

It will decode it and create a user in the database and give it to us. Alright? And alongside this, it will also add a session with a session ID in our cookies. Okay? This is what we need to do right now. After that, we will see later. First, let's get the authentication from Google.

So first, let's do one thing; we will set up our Firebase here. Alright? Because that’s how our consent screen will open. Through that, we will do Google authentication here. So let's set that up. So for this, I will do something in the SRC.

Let’s go into SRC here and create a folder named utils. So let’s write it like this: utils. We create a utils folder and here we write it as firebase.js. Alright? So we need to bring the Firebase SDK here. We will paste it here.

We will enable our authentication. We will enable Google authentication. Okay? And what will we do? By clicking on this button, we will open a screen where we will authenticate with Google and get a token. So this work needs to be done.

It needs to be done here. So if I go back here again, I go to Google and search Fireb here. Okay? So when we set up Fireb admin here, what did we do at that time? We created our own project. Okay? And which project did we create? The Fresher AI one. So we go to this project.

We go to the Fresher AI project. And here it shows that a One App is coming up. Because what did we do here? Inside this app, what did we do? We enabled the web. Okay? Okay? We created our web app here. Now let's do one thing first. First of all, you will see an option for security here.

You need to go under security to authentication. And what will we do first here? It will show that Get Started is written here. Click on it. So if you see here, there is Get Started under authentication. We just need to click on this. And what do we have to do first here? We need to enable Google.

We will have to enable authentication. Okay? So how did we come here? First of all, if I go back to the project overview. Then you will see some areas. Okay? The Fresher AI one because we already created this app before. Our web app here when we set up fireb admin.

What do we do here first? We click on One App. We click on settings. So something has opened up for us here. Okay? If we go down here, we see the option to install npm fireb. A complete SDK of Firebase is visible to us here. So.

This is what we need. First of all, we need to enable authentication here. So for that, there is an option for security under the product category. There is an option for authentication under security. We will go here. Okay? And after coming here, what do we do? We go to the sign-in method.

And here we select Google and enable this Google authentication. And we provide a support email here and save it. Okay? And as soon as we do this, our authentication here will be enabled for Google authentication. Okay? So you will see that we have enabled Google authentication here.

Again, we go to the project overview here. We go to settings here. So look, here I need to do what first? First of all, I need to run npm install fireb. Okay? I need to install fireb, and where will we take this SDK that we found here? We will paste it into the Firebase JS project inside YouTube.

First, let’s install Fireb. So we come here again and are doing all these things inside the front end. So let's run npm install fireb here. Thus, Firebase will be installed here. Okay? We have completed this much work.

We will again run npm run dev here. Okay? This much work has been done. Now what do we have to do next? After that, look at that SDK we've gotten, let's copy it from here like this. And we go to five.js and paste it there. Okay? We've done some work.

And let's remove these comments. Okay? Now we have some sensitive information as well. What do we have in sensitive information? API keys, so we will not keep this API key here. We will keep this inside.

So we will do one thing, we will create a file in the front end.

We will name it now. We will write it here. Okay? And there is no need to install anything here because we had created the Beat project. So the Beat project already has it. Okay? So we need to write inside here. Okay? What do I need to do inside? We need to put the API keys from Firebase here.

You will not have access to your API. Okay? So you need to write the beat first. Okay? And then, we will simply cut this API from here. Let's cut it from here like this. And then we'll go to ENB and paste it here. Alright? Just like that. So, we have added the API into ENB.

Now, how do we access it? We don't have to do the process here that we were doing on our server. Okay? We were doing this on the backend over there. We don't need to do anything like that here. We just need to import this simply. There is a meta inside import dot import and...

the meta is enb for us. So import dot meta dot b and dot whatever its name is here. So what is our name? We'll take this firebase beat fireb API and paste it here like this. Alright? So what will this do now? It will access this API from our ENB.

Okay? Now after that, we have see that we have an app initialized that we have received earlier. Okay? An app has been initialized that we have received earlier. Now what do I need to do inside it? I need to enable the authentication. We need to add a provider inside it. Okay? We have to do all this work here. Okay? So...

I will write like this - cost auth and inside it, what do we do? We get the authentication like this. So I will write get auth like this and inside it, we give the app where we need to enable the authentication. Okay? After that we import...

our get auth here because where will get auth come from? Let's import it. So this get auth will come from here written from fireb auth. Okay? Like this some get auth will come from us. After that what do we need to do? We need to add a provider inside it.

So here we write like this - a provider. Okay? And we need two things inside the auth provider. First in auth we have enabled authentication through get auth here inside the app. Now here we will need to provide a provider. So we will provide Google...

auth provider here. So we write new here and after that I write here Google auth provider which will come from our firebase slash auth. Okay? Like this, we put Google auth provider here. So we have enabled authentication inside it.

We have provided the provider here. These are the two things we need. Okay? And we will export this from here. Okay? We will export auth from here and the provider will also be exported with a comma. With this, we will be able to open a consent screen through our firebase. Using our Google auth...

we will be able to use it. Okay? Using these two. So we have done both these things here. Thus our firebase setup is complete here. We have set up firebase here in our frontend. So it was that easy to set up firebase. Now, what do I need to do here? For our...

login, we need to create a function here in the login model for logging in. Okay? And what will we do inside it? Inside it, we will use this auth and the provider we have exported here so that we will have a sign-up with a popup screen opened...

Which means a popup type will come to us, so let's do this work. So first we write like this cost and here we write handle Google handle Google auth. Let’s create a function like this. And we will make this function an async arrow function. So here...

we will create an async arrow function like this. And we don’t need any parameters inside it, so let’s skip that. Now we write this in a try-catch like this. Okay? We write in try-catch here. And first we need what here? We need to open a screen. Okay? So how do we open that screen?

Let's see that. So here we simply get a result. Okay? I write result equal to here, we write result. And after that we put an await here. Okay? Because we need to open the consent screen, so we are using so we will put await here and a...

We have a method called sign in a sign in with pop up, so if I write here like this sign in with pop up, it will come with firebase auth. Okay? Now what do we need to provide inside this? We need to give it an auth. We need to give it a provider. So here we need to.

Provide the auth and the provider that we exported from firebase. First, we will give an auth here that comes from our utils of firebase. Then we will give a provider which will also come from our utility of firebase. Okay? Both of these are already imported above.

We have provided this and along with that, the result we got, let’s log this result to the console. The result we got, let's log this to the console. And if there is any error, we will log that to the console as well. Okay? That's that. So now if we come back here.

We need to trigger a click on this page. Okay? But we haven't applied an on click to this button yet. So let's go back and have the handleGoogle function we created trigger on click on this. Okay? Trigger the function by clicking on this. So this is our button for continue with Google.

So let's go in and set an on click here. By clicking on this, we need to call a function. Handle in Google auth. So this function will be called. And let's go back here and refresh it once. And again, let's go back here. Now let's click on continue with Google. Before that,

I will open my console. Okay? Let's open the console here and click on this. As soon as we clicked on this, you will see our concern screen has opened with sign in with popup. Okay? Here, there's an account under the name Ankur Sahu. I'll simply click on this.

And as soon as I clicked on this, it allows us to continue. So as soon as we clicked here, it provided us a result here. Okay? Now let's open this result and take a look. So if we go inside result dot user, here we see.

Result dot user is providing us something. What is it providing? It's giving us a UID. You should see some UID here. So if I expand this, you will see a name and email here. But we will not send the name and email. We will.

Send a UID here. Look, this UID – how did we get this UID? So here within result dot user, under dot UID, we have our user ID. Okay? Do you understand this? So this UID is a token that we need to send.

So let’s write this down. So you see the full result here. This is how we received our result. Okay? So we've done some work. If we don’t want things like this, we can simply find a token here. Okay? How will we find.

That? Lets find the token through this result. So I'll take a token here. So let’s take a token. Set it to equal. Await it. And here, inside result, we have result dot result inside dot user. And within user,

We have a method called get ID token. We will use this method get ID token that will give us a UID token inside this result. Okay? Whatever the firebase UID token is, we will get it here. And we will put it into this token.

Where do we need to provide this? We need to send this. When we call the API, we need to send this data to our auth service. Okay? That’s what we need to do. For that, what do I need to do here? I need to fetch my API. So we will use axios.

We will use the axios package. So first, let's do one thing. Let's install our axios package here. So I go here and type like this npm install and let’s install the axios package here.

So we have installed an Axios package here. Now let's run npm run dev again like this. So we have done something here. Okay? Now before we use this Axios package, let's first do one thing. Let's create an API. Okay? By the way, if

I have to make requests through Axios here, I will write axios.post request. Okay? And then I will write the server URL repeatedly. Okay? After that, I will keep writing with credentials true. Okay? So we don't have to do these things here. Okay? So from that

Alright, I will do one thing here. Inside Firebase, I mean not inside Firebase, but inside utils, I will do one thing. Here I will create a file api.js or exos.js. Okay? Here we will let it know that if I write an API, then what things will be there. It will have Axios added

in it. The server URL will be added and along with it, with credentials true will also be added there. So let's do this work here. Okay? So that we only have to write our route there which we need to fetch. We don't have to write anything else and along with it, we will have to make a request. A get request, post

We need to make a post request. So let's do this work. Okay? You might not understand a bit of what we are going to do. As I do it, you will understand better why we were doing all these things. Okay? So first, what do we do here? I write const. We write export const. Then

here I do one thing. I write const and here I write an API, and we will use Axios here. We create an API through axios.create, in which we let it know what its base URL will be. So we give it a base URL here.

Which will be our server's URL, the gateway. Basically, the request will go to that gateway's URL. After that, if we add /api/auth here. Okay? So what does that mean? We will be doing our auth service through the gateway. Okay? The request will be here

but what we will use? We will use the gateway's URL here. Okay? So here we will give it a base URL. So what is our base URL? http colon double slash localhost. So let's write it here like this localhost and a colon and our local gateway will run on port 8000.

So we will give it a port 8000 here. Okay? So we have added a base URL inside it. The first thing is okay? That we will not have to write this URL every time. Just like we used to import and write the server URL inside our app, we can use that server URL everywhere.

So we tell Axios beforehand that its API will be created that its base URL will be http colon double slash localhost and along with this we add some options like with credentials true. Okay, we do something like this

and along with that, by putting a comma here, we make its with credentials true. So these things, we don't have to write these all again. We don't have to write server URL anywhere nor with credentials true here. If we are using API there. Okay?

Instead of Axios, we will use API. We can directly do things. And we export this. We export default here. This is how we need to do the API. Now how to use this API? Let’s see that. Okay? So now see what we do here? We need a response. So we write response here like this and set it equal to await.

So we use await. Now what I need to do here? I need to make a request to my API. Earlier, we used to fetch requests through Axios. Now we will fetch through API.

We will. Because we have created X within the API inside Exos. This means we have created X. For this reason, we will use the API here. So the API has already been imported above. And now through the API, what do I need to do here? I need to make a POST request. So the request

needs to be specified right here. So we need to make a POST request and where do we need to make it? We need to make it at the request server URL, but we don't have to write the server URL here because we have already defined the base URL here. Now after this, if we need to add some route.

Like, slash API slash auth, then we need to write that here. Is that clear? So let's write it this way, slash API slash auth, and the already defined base URL is appended here in the API. Is it clear? So after this, we need to write slash API slash auth.

And then with a slash added, whatever its route is, like if I go into the service inside the backend, let's see what route we had given it? Let's examine it. So we had given it slash login. Is that clear? What does this mean? We need to make a request to slash API slash auth and slash login.

Is that clear? Because within the gateway, you will see how we were accessing this URL? Through slash API slash auth. So we combined the server URL with the gateway URL plus API auth, and now what I need to do here is fetch my Google auth login

controller, so I’ll add slash login to that. Okay, this is basically the work we have to do. So let's write it this way, slash login. Okay, I also need to provide some data with this. That's because we're making a POST request, so we will have to provide data.

What data will we provide? We will give this token within the data that we found through Firebase here. We will provide that token here. Okay? So let's do that much work and as soon as we receive the response, we will also do the onClose on it.

Okay? Let’s do the onClose again this way. So what will happen here? That popup will disappear. Okay? And along with that, we will also log to the console. We will log something. One moment or we will log to the console whatever response dot data is

our data, we will log it to the console so that we will receive whatever data comes in the response. And we send the token from here within the data. So now let's do a request. Okay? Meaning, we click on it and bring our response. Okay? But here we're going to encounter an error when we

make a request from the frontend to the server. There will be a CORS error because we have not provided any course origin in the index dot js of our gateway yet, indicating which frontend will be making the request. Meaning from which URL the request will be coming.

So we need to provide that, and along with it, we were also using a morgan package. Look, there was a morgan package and a cors package, so we are also using the morgan package here. We are also using cookie parser. So we need to include all of these.

So now let's go here and see what things we need to add. Okay? First of all, what do we do here? First of all, I write app dot use and then we will write express this way. Let's write express dot json so that our data comes correctly in JSON.

Okay? And after that, now, through app dot use, we will add a middleware here for CORS. Okay? So I write it this way: cors. So we had installed a cors package. That will come here. So let's make use of that this way.

One moment. First, let’s import this cors from here. So we write import and cors here. And where will it come from? So we’ll write from here. This will come from our cors package. Okay? Just like this. Okay? Now within this cors, we need to set a.

We need to provide the origin for this and set its credentials to true. So we write it like this, and first we give it an origin here, and what do we set inside the origin? We will provide our frontend URL here. Okay? So the frontend URL is given from here.

Let's copy it like this. Okay? And then we go here and paste it like this. Okay? Our port 5173 is running. Okay? Localhost is our frontend. After that, there are credentials inside it. And we set the credentials to true. Because here we are.

What are we going to do? We will also be accessing cookies and so on. So that's fine. That's why we also set the credentials to true here. After that, we have app.use. And now what are we going to do? We will use our morgan package. Okay? I write here.

Morgan. So where will this be imported from? From Morgan. And what do we set inside it? We will give it a format like this. Okay? And then now what do I have to do here? I have to use cookie parser using app.use. So we write here like this.

Cookie parser so that we get our cookies correctly. So we have done a few things here. First, we used express.json. We set F.use middleware. Then we set a CORS middleware. We have added a morgan so that if any request comes here at the gateway.

It appears on the terminal. We have set cookie parser here. Okay? We have completed all this work here. Now what do I do here? I request from my frontend. Here we request to the gateway on the API all login and see if we log in.

Yes or not. Okay? Let's do this. So we click on login. We click on continue with Google. So our concern screen has opened here. Let's click on this. The account of Ankush Sahu, and as soon as we requested here. We got an Axios error.

There is a network error. Let's see what the error is. So how do we observe it? Understand this. First, we had requested on our auth. Okay? But there is no error showing on auth. So let's go to the gateway here. Okay? So look, it is showing us writing.

Okay? That deb is not defined, it is showing up writing here. So we need to write deb in double quotes here like this. Now it's fine? Now it will come. Okay? And let's run it again. So look, our gateway has run again.

Okay? Now let's request again. So I go here again and remove it. Let's request again. Okay? We bring it here and request again, and here we have requested, and see here success true is being written.

Our onClose has finished and here we have a user, look, inside the data there is a success true, and along with it, we have a user with a Firebase UID and an email of Ankush Sahu, the name inside is Ankush.

The name is Ankush, and here there are around 150 interview coins in the interview coin section and an underscore ID, which is this one from us. And who gave us this? The database provided it to us. Updated At has been given by the database, and Created At has also been provided by the database. Okay? Now let’s see one thing.

Do we have a session in the cookies or not? Okay? It is also essential to check this. So here is an applications option. If I go here inside applications,

then you will see that we have a session on localhost HTTP call In localhost. Look, a session is there. Look, we have a session ID here. Look, we have a session here. So a session is being stored here in this cookie. Okay? We have accomplished this much work here.

We successfully fetched our login controller. Our API is working properly and we used a modgen package. So, you might see here that it has made a POST request to /api/auth/login.

The result here is 200 and it has returned the request to us in so many milliseconds. Okay? In that time. So this is what is happening here. Okay? And we can also see that we made a POST request here. Okay? So we've accomplished this much work here. Now

What do I need to do here? I need to get the session here. I have to get the session from the cookies, and from that, what do we have to do? We have to get the session through our Redis. We will give it a session ID from the cookies. This way we will get that session and what all things are inside the session?

We have the user data available. Okay? And we will access that user. And this way we will find our current user. So let's start the system to find our current user. We are properly logged in. Right?

Then we will do this that if we are logged in. If we have session data, we have user data, we will not show it on the home page. We will not show it on the home page. We will show it on the dashboard page. We need to do this work as well. We also need to save our user.

This is work we need to do. Okay? Meaning we need to set our user in the frontend of this app as well. So, we need to do this work too. First, we find the current user here. So, now we do one thing. We have to find our current user here. Alright?

Now, understand one thing where we will find the current user? Should we find it here? In the auth, inside auth service, or in the interview, or in billing, or in all these things in our roadmap? But we need the user ID everywhere. We need the user ID in billing as well.

In the interview as well, because when we will perform the interview, we will save the user ID then. So, the user ID is needed in all of these. So, should we create middleware for all of these? No, we will not create middleware for all. We will create middleware in the gateway and we will find the current user inside the gateway.

What will happen here is that we will provide the current user's ID from the gateway to whom? To billing, interview, resume, roadmap. We will not provide it to auth. Now why won't we provide it to auth?

So if you see one thing that we have enabled its cookie parcel here. So we will directly take the session ID from the cookies here. Alright? In our auth controller, meaning in the auth service, we will take the session ID directly from cookies. And from here, what can we do? We can find our session.

And from the session, what can we do here? We can also get the user ID. Okay? So here we will not provide the user ID; we will provide it among all of these. For that, we will have to create middleware in the gateway.

So here we write the middleware folder like this. Ah, so you might not be understanding how we will provide the user ID among these. So when we provide them, I will show you how we provide it. But right now understand one thing that we need to create an auth middleware in the gateway.

Okay? We need to create an 'easy middleware' like this. 'easy.middleware.js' and along with that, we need to create a controller inside it. So let’s also create a folder for controllers. We will create a folder for controllers as well. And inside it, we will create our user controller because here we will find our current user inside the gateway.

So now what do we do here? We create an export const 'is middleware' for our current user that we will find through. So in this material.

How do we create it? Let's see, we will also create an async arrow function. Okay? And what all things does it contain? There is a request, a response, and also a nested method. Okay? Since it's middleware, we'll also add a next to determine when we proceed to the next one.

Okay? This is something. Now let's write this whole part inside a try-catch block like this. And now what do we do first? We get our session from cookies. Okay? First, we get our session from cookies. So first, we get our session ID here. Okay? Like session ID.

Where did we get it? We did not get it from our logout controller. Is that clear? Similarly, we have to fetch it from request.cookies to get the session. After that, we need to get this session here. Look, we deleted it here.

Inside logout. But here we will get the session and ask for the user ID from it. Okay? This is something more, and whose user ID will this be? It will be for the current user. Okay? We need to do this much work here. So here we find request.cookies.

Here we write. If request.cookies exists, then our session will be inside it. We need that here. Okay? We need a session from request.cookies here. And we did one more thing that we also set credentials to true here. Okay? With credentials, we.

That means what were we doing here? We were also setting cookie parsing here and also setting credentials to true here. So whatever request will come here to our gateway, if with credentials is true during refresh time, then whatever cookies will be there, we will get them here. Okay? Thus we.

will be able to access that cookie inside it. So now what do we do? We fetch our user data from this session ID. So now let's do one thing. We will set a condition here that if suppose we do not find the session ID here, then we put a not here. If the session ID is not found, what will we do here?

We will return a response, response.status gives us some value here. And for status, we give it 401. Because it will be an error from our front end. If we do not find anything from the front end here, then it is an error from the front end. And in JSON we will do what?

We will return a message here. I write like this, message, and we write inside the message unauthorized. Okay? So if the session ID is not found, it means our user is not authenticated. That is why we are not getting the session ID from the session. Okay?

That's something. Now let's move forward on this. So as soon as we receive the session ID, we need to fetch that session which we set here. Look, now what do we need to do? We need to find this session which we are setting here. Where? When we set up our Google auth, we set a session ID through Redis.

Inside which the user ID, name, email, and interview coin are included. So this complete string of data we have here means that all the data inside our JSON belongs to our user. So this data we are setting is the data of our current user. Okay? So as soon as we here.

What do we do? We will fetch an API for the current user. So it will return the same data which includes user ID, name, email, and interview coin. Okay? So now here we set it through? Through the session ID. Now we can access this session again using the same session.

ID. Okay? How will we access it? So look, we are doing this work where? We first shut down the service. All this work we are doing inside our gateway. Okay? So now you might ask how can we use the session here if we set it in the auth.

But we did not set it anywhere else, we set it in Redis. And where is Redis? It is present in our main route. Inside the backend. Look, inside the backend.

And there is a gateway inside the back end, there are services as well, and our Redis is inside the shared folder. This allows us to access this Redis from the gateway as well as from inside the service. Is that clear? Therefore, we will be able to access that session inside our gateway which we have set where? In our

services. Is that clear? Do you understand this? Now, let's get our session here. And how do we get the session? So we write session equal to Redis here. So here we use Redis which is coming from our shared folder.

And it's there. Is that okay? And if we use Redis dot get here. Is that clear? We use Redis dot get. So what we need to do inside this? We need to get a session named session. Is that clear? This is the session name we saved and along with it we provide the session ID.

So we provide the value of session ID. What will happen because of this? Through this key of session ID, we will be able to access that session which we had set. We will be able to get it here. Is that clear? So what will we get from this? A session will be available here from Redis.

We have received one session. Now we have retrieved all the user data from this session. We have obtained the current user's data. Is that clear? Now we place a condition here. We again put this condition that inside this session we set it up this way that if we do not get a session. Is that clear? Session ID

If we do not get the session here, then we will return a message that there is no session here; we will return a message like session expired. Is that clear? Let's assume that we do not get a session through any session ID from Redis, so that will simply return a message saying session expired.

And as soon as all these things happen, we take request dot user here and what do we provide inside it? We provide the entire session here. And how do we give the session? In JSON format so we write it this way; we will give it by using JS dot parse.

So we write it like this, JS dot parse, and we provide the entire session inside it. Is that clear? So whenever we access request dot user, if this middleware is placed between them and our route, then what will it be able to do here? It will be able to get the entire session. Is that clear? This

is the work we have done here. We have done this much work. What does this mean? We have retrieved the current user via request dot user. And at last, what will we do? We will call the next function. Is that clear? So what will happen here? As soon as the next function is called, we will automatically get here.

What will we get? The next function will be called only when we have session data inside request dot user. Only then will the next function call happen. And if there is some error, we will return the error. So we will return an error here. We will return it in this way.

We will set response dot status to something like 500 and in JSON we will provide a message which will be error dot message. We will write this way here. Is that clear? We have done this much. Now let's understand this again. Let’s review it one more time.

So first of all, what did we do here? We found the session ID. From where? From our request dot cookies. Is that clear? Because we have enabled our cookie parcel and have set credentials to true in CORS. So that if there is any request from our frontend, then if the credentials are true from the server side, we can access that user's cookies. Is that clear? And if we find any session in request dot cookies, we will place that session where? In session ID. Is that clear? And if

the session ID is not found, then we will write unauthorized. Now we have a key in session ID through which we will be able to access the session we created in Redis. So we have given this session a key in session ID from which we have retrieved the session from Redis.

सेशन आईडी नहीं मिलती है तो अनऑथराइज्ड लिख देंगे। और अब सेशन आईडी हमारे पास एक की है जिसके थ्रू रेडिस के अंदर हमने एक जो सेशन बनाया था उसको हम एक्सेस कर पाएंगे। तो हमने इसको सेशन को एक की यहां पर दी सेशन आईडी जिससे हमने उस रेडिस से उस सेशन को गेट कर लिया और वो और उस सेशन

Inside, there is the complete user data including the user ID, user name, user email, and their interview coins. Is that clear? And finally, within request.user, we parsed the session into JSON and called the next function. If there's an error, it will return an error here.

So what do we do here? It has already been created in the middle. Now what do we do here? We find our current user. How do we find the current user? It's simple, we write here: a cost. We write export cost here.

And I write like this: get current user. Get current user and we will create a sync arrow function here like this, and inside it, we will need some data, etc. We will need to write a request, comma, and response. Alright? So let's write that here, we write this whole thing in a try-catch.

Now after this, what do I have to do here? I need to find my current user. How will we do that? So with this, our EJS middleware is giving us a complete user session inside request.user. Alright? So we will find the complete user data from that. So how will we do it?

So here we are not finding using our user model. Alright? Where are we finding from? We are finding user data from the session that we set during login. Alright? We are not using any user model here. Alright? You need to remember this.

The only thing to remember is that we are not using the user model here. We are fetching data from the session which contains the complete user data. Alright? We just need to remember that. Therefore, we will not import our user model anywhere here to get our user. Alright? Where will we use the user model? Inside this auth.

service because this is where the model is and we cannot access it anywhere else. Alright? You need to remember this clearly. Now, I will first simply do nothing here. We will return a response. We'll give status here. We will provide a status. We'll set this to 200.

And simply inside the JSON, what do we do here? First, we set a success to true. Alright? And after a comma, we return a user inside our user. Where will that come from? From request.user, which we have set in our middleware.

Alright? The complete data from the session inside request.user will provide us with what we need here in the user. Alright? And likewise, let's run an error here. Alright? Here, we will write 500. Like this, we set access here to false. Set access to false.

And along with this, we write a message here and inside the message, we have to write a secondary message. We will print whatever message is in the error here. Alright? This has become our controller for getting the current user. That's all there was to it.

There wasn’t anything else we needed to do. It was very easy. Alright? Now we will have to create its API. But how will we create its API? We will write it here. Alright? Here we write it like this: app.use and if we write API.me here, we need to call a function.

We need to call the get current user function which will come from our controller in userController.js. Alright? We will add .js here like this. Now what do we need here? Inside it, we need to get

करंट यूजर के अंदर रिक्वेस्ट डॉट यूजर के अंदर सेशन चाहिए। तो जो हमने एक इजॉट मिडिल वेयर यहां पर लगाया था इजोर्ट मिडिल वेयर उसको भी यहां पर इंपोर्ट कर लेते हैं। यहां लिखता हूं इजत इसको इंपोर्ट कर लेते हैं ऊपर और डॉट जीएस भी यहां पर लगा देते हैं इस तरह से। तो देखो जैसे ही हम

इसके इसके बीच में एजॉस मिडिल वेयर यहां पर दे रहे हैं तो जैसे ही यहां पर क्या होगा कि हम एक फ्रंट एंड से रिक्वेस्ट करेंगे स्लैश एपीआई स्लश मी पे तो यहां पर उसका विद क्रेडेंशियल भी ट्रू कर देंगे जिससे हम कुकीज़ को एक्सेस कर पाएंगे यहां पर इजत के अंदर और अब इज़त जैसे ही वो यहां

But when this function is called, it will go to the middleware. What will the middleware do? It will access the cookies and return a session with it inside request.user, and we will access that request.user in our get current user, which allows us to return it to the front end.

We will get our user's session. Okay? We have done this here. Our work here is complete. The middleware work has been done right here. Okay? Now just understand this much: what have we done here? We accessed our session through the session ID in the middleware from Redis.

We provided it to get current user, and get current user returned the user's session to us. At no point here have we used the user model. We have only accessed the session that we set during login. Okay? Just remember this. The work here is done. Everything is completed.

Now what do I need to do here? I need to fetch this API. And how will we fetch the API? We will request it on localhost:8000/slash/api/me. So this route of ours will fetch. This means that this API will be fetched here, which will return a session.

Which we are doing here. Look, the session in request.user will be returned to us. We will get it. Okay? And we will set this session in the set user within the app. So we will get the current user's data. Okay? Now we will get the current user's data here. And if there is no session in our cookies,

so what will this middleware do here? If there is no session ID, it will return an unauthorized error. That's all there is to it. Now what do we do here? We fetch this API. Where will we do this? Inside our front end.

Let's fetch the API inside the front end. So now let's do one thing: let’s temporarily shut down our backend here. Let's just work inside the front end. Okay? Because now we need to fetch this API. So for that, I will create a folder here called.

I name it API, and right here we will create user.api.gs. Here we will refresh an API. And where will we use this function? Inside our app. Whenever we enter the app, we will call a function inside useEffect which we will.

create here in our user API. Okay? So now what am I doing here? First of all, I write export. Now let's do one thing: we fetch an API for our current user inside. Okay? Inside our user API.

So I write get. Get current user, get current user. We write it this way. Set it equal to an async arrow function here. Okay? So we don't need to take any parameters inside it. After that, I write it inside a try-catch. Okay? And now we.

need to know how to fetch the API. So I write a simple cost here. A cost response we can write like this. We need a response. So first we add await here. And now I need to make a request. Okay? So we will use axios.get for this.

But here inside axios, we have created an API, so simply we will call API.get and there we will not even have to make true our credentials and we do not need to provide our base URL for the server gateway either. Okay? So this is great that we don't have to.

provide it. Okay? So now we start with the API that we will get here from utils axios and call a .get request here. And before making a .get request, I don't think so we have created a route yet.

Which request should we make? So for a second, we go into the backend and into our gateway and then into index.js. So for a second, we do not want to create a middleware, which we wrote here using 'use'. We should not write 'use' here. We should write 'get' here. App dot get

We need to make a request to slash API me and in between, we will put middleware and write 'get current user'. Okay? The problem with this is that if we wrote 'use' here, such middleware would work here. Whenever any API call happens here, what does it do?

It also calls the get current user API again causing a lot of problems for us. So here we will just get it. Okay? So we will write dot get here. Okay? You also need to fix this. We accidentally wrote 'use' here. We will write 'get' here. App dot get

We will request A to me. Okay? Like this. So now we go back here. Now we request a get here. So we do not need to give any server URL here because we have already provided the base URL. We will directly write 'sale API me' here. Okay? And we do not need to give any data here

since we are making a get request. So we will get some response here and we will return as well. Whatever our response dot data is, we will return that. And if there is an error, we will return null here and if there is an error, we will console log that right here. Okay?

We will write error here. And we will console log that right here. Okay? So we have done this much. We have now written our get current user API. We have created a function here. Now when do we need to call this function? So we will call this function in our app

inside. Okay? Here when we enter 'app', it means that we will get the current user found here. Okay? So for this, what do we need to do? First, we need to create some state. Like we also want to set data here. So we will set up a user's data as well.

We will get data inside response dot data. That is basically our current user's data. Where will we set that current user data? We will set it inside this user state. And if I need to provide user data to the dashboard, I will simply

write it like this. Parameter can the user and whatever our user data is, I will simply provide it from here as user data. Okay? Like this, so we won't write it now. We will leave it like this for now. We will write it later. Okay? And we will create a use state

and set it equal to. Here I will write use state. And for now, we will leave it as null here. Okay? Initially, we will leave it as null. After that, what do we need to do here? We also need to add a loading. Like, look how we will add loading that first loading will remain true.

initially. And as soon as we find the current user, meaning the API we are fetching for get current user will find it here, then we will set our loading to false. Okay? So what does this mean?

Initially, a loading will work here. Then a function will run here for get current user. If it does not find the current user, then what will it do here? It will set loading to false and will return to our home page for the user and if what will happen here is that

if we get a result, then the result will be available to us, okay? So simply, here it will set the loading to false again and then when there is user data, it will send that to the dashboard, so we need to implement this, let's see how we do this perform.

In that case, we will need to show a loading message here first. Let's write a loading message like this, a set loading. Okay? We will write a set loading here. And what kind of loading will this be? Our loading will be such that we will show where this loading will be displayed? This loading will be visible on the app.

It will appear when we cannot see anything. At that time, the loading will be visible here. We will create a black color line above. This means we will animate it to pulse, so it keeps fading in and out. Okay? So that we know that some loading is happening. Alright? Until we do not get the current user.

Until then. Let's write the user state here and set it to true for now. Okay? Like this. Now what do I do here? Now we call that function here. Alright? Like this. So now we are calling a function inside a useEffect that we created.

Which one? The one for getting the current user that we built inside the API. Alright? And we will give an empty dependency array inside the useEffect. Okay? Now what do I need to do here? Let's create a simple function. Here we will declare a constant named getUser equal to an async arrow.

We will create such a function. Okay? Like this. And now what do I do here? I will take a constant data here. Alright? Since the data we are returning, we will first put await here. We put await. And how will we get the data? By using await as soon as we call a function here. A get current user, which is our.

Where is that happening? It will not happen from here. Look, where are we getting it from? It is coming from the API user API, right? And what is it returning? It returns response.data, which we get from the get user API call. Okay? This means that within this, the data contains.

The entire session has arrived. Okay? And all the data has arrived, which includes what? A success true and a complete session data within the user. Okay? Like this. So now what do I need to do here? It's simple; we have received the data. So what will we do? We will set the user in the setUser.

We will take the user from the user state here, and within that setUser, we will input data.user. Okay? Because here, within response.data, what things are coming? If I show you here, we are getting two things under response.data. Look, we are getting a success true and along with that a request under user.

We are getting data.user. This means that if I write response.data.user here, then I will get the session data. Okay? Like this, that's why we wrote response.data.user here so that the user data is set in setUser. Okay?

And after this, we will finally set it to false for the set loading. Okay? So we will do this. Alright? We will set our set loading to false here. Alright? But now you might ask me that if there is an error.

If there is some error in getting the current user, the loading will continue. It will not turn false. Because we did not write it inside a try-catch here. But where did we write the try-catch? We wrote it inside the API. Okay? Look here, we wrote try-catch.

Okay? If an error occurs in the get current user API, it will return null. What will happen then? Inside app.js, setUser will be set to null and will set loading to false. This means that even if there is an error, if we do not get the current user, the loading will still turn false. And if.

The current user is found, after that also, the loading will turn false. Okay? And this API will not take long to call, the get current user will happen quickly because we are still on the localhost. But if we deploy it, this API call might take some time.

What do we have to do here at that time? So at that time we need to show a loading on our home page. Okay? We need to show a loading in our app on our main page when this API is fetching. Okay? So the loading we had set to true here, we will use this loading.

Now let’s create it here a bit. Okay? We need to put this in our app. So we do something simple here that we set an if condition here. Like this, if our loading is happening here. Okay? If our loading is happening here then.

Here we will return something like this, so I write return here. So we will return a div like this here. We will fix its class name. Set top to zero, left to zero, and make its width full. And we will set its Z-index to the highest.

That means it should definitely be visible to us. If it is over anyone, it will be visible to everyone. Okay? And inside it, we create a div whose height here is one. That means there will be one line here whose background will be white. Animate pulse and we will make the width full. But instead of making the background white here, we will.

Make its background black. Okay? Why do we make the background black? Because our page is already white. So white on white will not be visible. So we will set a black color here. Okay? Like this. So if our loading is happening then.

What will simply happen here? A line of black color will be shown here above. Okay? And as soon as we find the user or if we do not find the current user, then automatically that loading will turn false here. Okay? There are some other things but we have to call the function we made here.

Inside our user bat. So here we also call the function getUser. Okay? This function we created in which we set the data inside setUser and we have also called the function we made here inside the user pack. Okay? If loading is true here, then a line of black color will appear.

It will show an animated line and as soon as our function gets called, that line will automatically disappear, meaning its set loading will become false. Okay? We have done some things here. So if I go here and let's console log the data we are setting here.

Okay? Or instead of console logging the user, we will do one thing. We can set a console log here. Look here, we write. Just as we are logging an error, similarly we can log a response.data to the console. So we will know what response we received.

Okay? Let's do this first. First, let's try to fetch our API. After that, we will add some things here. Okay? And if I go here and look, a pulsating black color line is showing here. It will be visible to you like this. If I refresh it like this.

And there might be some error coming up. An error has probably occurred. Look at what the error says that cannot read property of null reading user. Okay? This property is not making sense. And a 500 error has also occurred. Let's look at this. So there might be an error in the gateway.

So let's go inside the gateway. Look, a request was made for slash E push me. Something 500 is being shown here. Okay? It is throwing an error here. So, let’s do one thing. If data is here then we will put a question mark like this here. And go again.

Look now this error is not appearing here. But still, this API is not being called. Still running into issues. Okay? It's giving some 500 error here. Okay? Let’s check this. This is our server error.

So let's go to the server and check. Okay? There can be a 500 error here. Where can we see the 500 error? One can come here. Get current user, but there is no problem here. Here we are just writing request.user. Okay? And let's move on to this.

There can be another 500 error here in middleware. Look at this one. Okay? So there can be some problems here. So here, see where we are getting the session. So here a promise will be returning. So let's just add await here this way. Okay? Meaning,

that we first need to get the session of red here. Okay? Only after that will request.user come here. For this reason, it was giving an error here. Let's first add update. Okay? Adding update is very important. Otherwise, what will happen here? We will get the session from red session here. We were not able to get the session.

That's why that error was coming. Okay? Let's go back again and now request here again. Let's refresh. Look, as soon as we refreshed, our app's use effect must have worked automatically and it would have run get current user here again.

Okay? Inside it, success is true and inside the user, our email, name, interview id, interview coin, and user id have all been obtained here. This means we have acquired the current user's data and at the same time, our data is also being set inside set user. Okay? Now the data set inside set user needs to be provided to that user in several places.

For example, it needs to be provided in the dashboard. Okay? And we need to provide it on all the pages we create. And one more thing we need to do here is if we have the user data, then we should not show our home page. This home page,

we should not show. We need to show the dashboard page directly. So let's make this change as well. We have got our current user. Okay? So let's do some work. Our current user work is happening here. So first, let's go here and what we were doing here.

Where were we doing the console log? One second, check within your API, we were doing a console log here, right? Let's remove response.data like this. Similarly, remove the console log that was causing the error here as well. So we don't need to do the console log.

Let's remove it. Okay? So what does this mean? We are getting our user's data. Still, we've only removed the console log here. So if I refresh, the console log won't show up here. But we are still getting the user data. Okay? So let's check this out.

So I do one thing; again, I go into the app and inside the dashboard like this I’m going to take two things into one parameter here. I take here user, a set user in the parameter. This way we will provide our user to another page.

Where from? From our app.jsx. Okay? We take one user into the parameter like this. And which user do we put inside? We put this user in that we are setting here. Okay? This user is being done inside use state. So here we give one user.

Like this. Similarly, we also write a set user here. So what are we going to do inside a set user? Remove one comma. We must not put a comma. So inside set user, we also provide this. Okay? Because what will we do in the dashboard?

We will handle log out etc. There we will have to set this again. Okay? So let's do this as well. And one more thing we do. Even inside home, we take something into parameters here.

For example, we take one set user at least here. Okay? Because we also need to set this when our login happens. So we need to take one set user here as well. Okay? So let's provide this set user in the parameter.

Let's proceed with the user sheet that we have created. Okay? So we will do some of this here. Okay? Now, if I go to the dashboard here and if I write in this way, I will have to write inside the user curly basis. Okay? So I will write user dot name here. If I write here.

So if I write in this way. If I go here. Okay? And now if I write with a slash on the dashboard, it shows Ankur Sahu here. Why is it showing Ankur Sahu? Because what we are displaying here? The user that we had set in our app, look at this user that we had set.

in our app. Okay? The current user that we provided here inside the dashboard where we provided the user inside the parameters, we also provided one more set user here inside set user. Okay? Similarly, we provided one set user inside home so that we can update our user inside the app, that's why we have also provided set user here.

So we are able to access our user here because we have written user dot name because name is in the session of the user and email is there as well. If I write email here in this way, then it will start showing the email here. So this is how we can access our user's data. So let's keep a simple user name for now. Okay? So let's write the name in this way. Okay? This is a good thing. Now let's do one more thing.

Whenever we log in, okay? Whenever we log in here, what do we have to do? We have to update the set user again. So, for that, we will do one more thing. What we do here? Inside our login model where we are writing on close inside the parameters, we will write set user and here. Okay? And how will we get this set user? Because we haven't created any page for the login model.

But we have the home page where we are providing set user from the parameters. Okay? So we will also provide this set user here to the login model through parameters. Okay? So let's write set user here and inside set user, we put the same set user that is.

available to us here from the app inside home. Okay? So we have done that. Now if I go here and now one more thing I will do is that I write set user here and inside the set user, simply what do I put? I put response dot data here. This is how if.

the response is, then it will put its data here like this. And we will remove the console log we are doing here. Okay? So we will remove the console log here. This will also work on on close. So we have set our set user as well. Okay? So if I log in here with another ID.

then its name will appear here. See, if I go here. Before that, let's do one more thing. Let's do one more thing. Like, if we are on the home page and we logged in from the home page, if the user has data, it means that.

if the user has data, we will navigate to where? To our dashboard. Let's do that. After that we will also try to log in with another account. Okay? So first let’s do one more thing. So how do we do this? Let's understand that if we say we have data of the user.

that we are setting here the user data. If we get the user data. Okay? It means that the user data is not null. If we get the user data, what will we do? If we are at home, we will navigate them to where? To our dashboard. Okay? Let's do this.

Because on the home page, basically, we are opening our login model. That's why we will directly take them to the dashboard. So in a way, the home page is our entry page. Any user who comes will.

जरा क्योंकि होम पर तो बेसिकली हमारा जो होम पेज है वहां पर तो हम अपना पॉप अप हम अपना लॉग इन मॉडल ही ओपन कर रहे हैं ना। इस वजह से हम यहां पर डायरेक्ट डैशबोर्ड पर उसको पहुंचा देंगे। तो एक प्रकार से देखा जाए तो जो होम पेज है हमारा वह एक हमारा एंट्री पेज है। कोई भी यूजर आएगा तो

He will first come to the home page and will log in from there, and as soon as he logs in, a dashboard will be ready for him with us. So, what will he do directly here? He will navigate to the dashboard. How to do this? Let's take a look at it. So, there is a simple

change that we will need to make? We will need to make the change inside this element. There is one element here. We will need to make the change here. So, we will set a condition inside this element. How will we set the condition? Let's see that. So, this is ours. Now we will set the condition like this that if let's say we have a

user, then what do we need to do here? So, we need to navigate him to the dashboard here. Okay? We don't want to keep him on user. We need to navigate him to the dashboard. How will we do this? Let's see. So, here I will write navigate like this. So, we have a navigate here.

In React Router DOM, we write it here as navigate. And let's write it like this. And inside this navigate, there is something we have which is to. So, where do we need to do the navigate to? We need to navigate to slash dashboard. Okay?

And like this, we will write it inside double quotes. We will not write it inside curly braces. So, we will simply navigate this to the dashboard like this. Okay? And along with that, we will replace it like this. We will put a replace. Okay? And if let's say we don't have

user data, okay? So, we will set a not condition. So, this way we can set if and this kind of condition. See like this. I will take this down. This way we can set if and else conditions that if here if we have user data then he will

navigate here. Where? He will navigate to our dashboard. He will replace what we already have. Okay? And if we don't have user data here, then what will he do at slash? He will directly take him to the home page. Okay? He will take him to the home page.

We have set some conditions here. In the same way, we need to set the same condition here. Where? Inside our element. Okay? So, if we have user data here, if we have user data, then it will show the dashboard here for us. If we don't have user data here.

So, in this way, we are doing things that if we have user data, then it will directly show the dashboard. But if we don't have user data, then we set a colon here. What does this mean? If the condition after the question mark is true, then it will be this, and if our condition is false, then the thing after the colon will be what it will be. Okay? For this, we will simply do this. So we will simply navigate this and where will we do the navigate? So we will put to in front of this like this and two navigate we will do this to our slash and at slash which

route will work? This route again will work that will check if there is user data, then it will go to dashboard, otherwise it will navigate to home. So, if we look at it, we are again getting to home here. Okay? Because if we try to go to dashboard and

the next user is not there, then it will automatically take him to home for us. Okay? And similarly, we will put replace here like this. We have set some conditions here. Okay? This is our condition that we were going to set here that if there is no user data, then it will take us to home. We will not go anywhere except home. But if there is user data here, then we do not want to show home. We want to show our dashboard area. Okay? So we have set some conditions here like this. So if I go here, we will see the dashboard area here. If I try to go to my home

look, if I cut this and request on slash, then also it is taking us to the dashboard. It is not taking us to home. Okay? But if I do one thing here, if I go here and go inside my applications and what do we have inside it?

के अलावा हम कहीं नहीं जाएंगे। लेकिन अगर यहां पर यूजर का डाटा होगा तो हमें होम शो नहीं करना है। हमें अपना डैशबोर्ड वाला एरिया शो करना है। ठीक है? तो ये कुछ कंडीशन हमने यहां पर लगा दी इस तरह से। तो अगर मैं यहां पर जाता हूं तो हमें यहां पर डैशबोर्ड वाला एरिया ही शो होगा। अगर मैं यहां पर अपने होम पर जाने का ट्राई करता

हूं। देखो अगर मैं यहां पर कट करता हूं इसको और स्लैश पर रिक्वेस्ट करता हूं तब भी यह हमें डैशबोर्ड पर पहुंचा रहा है। हमें होम पर नहीं पहुंचा रहा है। ठीक है? तो लेकिन अगर मैं यहां पर एक चीज करूं अगर मैं यहां पर जाऊं और अपने एप्लीकेशनेशंस के अंदर जाऊं और जो हमारी इसके अंदर एक

The session is our store. If I delete this session here, then there is no session here now, and if I refresh this, it will take us to the home page because after that, it neither got the session ID nor did it find the session. So as soon as it doesn't get the session ID, what does it mean? It is unauthorized.

If it is unauthorized, then the current user will not be found. If the current user is not found, then the automatic setting of the user that we are doing here will also not happen. And if the set user is not there, it means there will be no user data. If there is no user data, it will navigate us to home. Okay?

This was a small story that I just told you a little while ago, and this is how everything is working. Okay? We don't have the session ID here, and because of this, we are not getting the user data here. Okay? So the conclusion is that if there is no session here, then there will be no user ID, and if there is no user ID,

there will be no user data available to us. Just understand this. Now let's log in here again through Google, and as soon as we log in here, where will it automatically take us? It will take us to our dashboard. When we click enter, it will replace here in the dashboard.

Okay? And our data came here after a little while. So what did we do here? We logged in, but our data did not come at once. After refreshing this, what did it do?

It would have called get current user here. Then it got the user data here. What does this mean? That the user we are trying to set inside the login model is not getting set correctly. So let's take a look at it. Okay? So it means that we are not getting the response.data inside our set user here.

Okay? So let's do one thing; let’s console log the response.data for a moment to see what all is inside this response.data. Okay? Let's console log this.

So now if I go here again from a different account here or delete this session in the application. Okay? And again try to log in here. So if I refresh this, we will reach the home page and try to log in here again.

Okay? So that we will have a session here. And one thing is clear; we have come to our dashboard where we found an object that contains one success and one user. Okay? Now I understood one thing that inside response.data, there are two things.

One is success, and one is user. For this reason, it cannot set the user data here. Okay? Now one main thing we understood. For this, we have a solution that we need to set the user inside set user if response.response.data is present here. Okay?

So we can remove this console log and refresh this again. So, Ankush Sahu has come on board. Now I will do one thing; let’s try logging in here with a different ID.

So here I write localhost 5173, and it has taken us to the home page. Now I will try to log in here again. We are logging in from our virtual courses account. Okay? So from the virtual courses account,

the user name will come here as Ankush, not as Ankush Sahu. As soon as we log in, we won’t need to refresh. Our data has automatically come here. We didn’t have to refresh. Why? Because now where has this data been set?

This data has been set from the login model. So we have done this much work here. We have found our current user. Okay? We have also obtained all the user data. Now what do I need to do here? I need to do the rest of the tasks here. First, I will do one task that I will set our user on the home page.

We will start making it here completely. Okay? We've completed our login work. Now we also need to do the logout work. Okay? So when we make the homepage here, then we will create our dashboard page afterwards. We will also implement the logout function there, and as soon as we do that.

Then our main task will be to upload resumes, score the resumes, and perform interviews. Okay, which means we will start doing all the work related to our other services here. Almost all of that work is complete. I just need to create a little bit of front-end here, and then we will also do the logout work.

Our service-related work will be completed. Okay, so we have done quite a bit here. Now, first of all, let me do one thing. We will start creating our homepage. For that, I will do one thing. Let's delete our session in the applications here so that our user remains logged in.

No. So we will see our homepage here, and now let's start designing this homepage. Okay? So let's start building the homepage here. But before that, let me show you one thing that we have created our user. So let's take a look.

To check if our MongoDB Atlas has been updated. Okay? So first, let's open MongoDB. Here we have created a project called Fresh AI, and within it, we created our user. So the option to browse collections is coming up. Why is it showing up? Because we have created some kind of cluster in the database.

Okay? So that's why the option to browse collections is appearing here. Let's click on that, and we will see which user has been created. So look, here we have an option for a user. So we have one user in this user.

Here you can see that we have two users. One is our virtual courses account and the other is our Ankur email account. This means that we had logged in two users, both of whom have already been created here. Okay? So that much work is done. Now what do we do right here? We start building our homepage.

Let's start adding some text here. We'll add a button, then an image underneath it. And the agents that we will have in this project, such as a resume agent, an interview agent, a feedback agent, and lastly a roadmap agent. So we will create a small box detailing each of these four agents. At the very end, we'll create a footer. Okay? Our name is ready. Let's start designing our simple homepage.

Okay? So now you should be able to see an image on your screen. We need to add headings here. Okay? We need to add headings and an image here. And lastly, what we need to do is create four boxes here for our agents and a footer at the bottom. So this is the work we need to do here. Let's start creating that.

And before that, let me do one thing. I will bring some images and videos here. So let's go to our assets folder where our asset folder is located. Look here, there are some HBJGs already present. Let's delete these first and bring in some of our own images. You will find all these images in the description. Okay? You can get them for free.

So I simply bring them in first. Okay? You will see that we have one video of a female here. Okay? Which looks like this, and we also have an image that will be looking like this. Okay? You will see some images here. This image is for our dashboard.

That we will show on our homepage to let people know that if they log in, they will prepare a dashboard where they can create resumes. Okay? This means you can create interviews and resumes.

सबसे पहले लेकर आ जाता हूं। ठीक है? तो आप देख पाओगे यहां पर एक हमारे पास एक फीमेल वाली यहां पर वीडियो है। ठीक है? जो कि इस तरह से यहां पर है और एक इमेज हमारे पास कुछ इस तरह से यहां पर आपको दिख रही होगी। ठीक है? ये कुछ इमेज यहां पर आपको दिख रही होगी। यह हमारे यह हमारे यहां पर डैशबोर्ड

की इमेज है जो कि हम वहां पर होम पेज पर अपने शो करेंगे कि इस तरह का डैशबोर्ड हमारा होगा। जिससे यहां पर लोगों को पता चलेगा कि अगर वह लॉग इन करते हैं तो उनका एक डैशबोर्ड तैयार होगा जहां पर आप रिज्यूे क्रिएट कर सकते हो। ठीक है? मतलब इंटरव्यू क्रिएट कर सकते हो। रिज्यूे

You can build it. So, there is a roadmap builder. Here is the resume scorer. Along with that, there is an option for interview coins. Here are our analytics. Okay? All these things are here and there is also an image of an email. Here is a video as well. Okay? In this way. So these are some things we have.

And with that, we have a logo PNG inside a public folder here. Look, we have some logos here as well. Okay? And these icons and so on which are already there, let's remove them from here. So there are fab icons that we were previously given by Beed; let's remove them.

What do we do here? Where will we place this logo? We need to put it in our fab icon. Okay? So here, if you see, we will go inside the HTML index, where there is an option inside an HF. If we put a slash and write here its name, which is logo.PNG, then it will be included inside our fab icon. Okay? logo.

PNG is written here. If I go here. Okay? And if I refresh this, then you will be able to see here in white color that a 'refresher AI' is being written and here, look, 'fresh AI' is being written and an SVG in white color has been placed here.

In this way, we have also placed our fab icon here. Now, what do we do next? We start adding text, etc., inside our homepage. So, again, we will go to our homepage; here is our homepage and where we need to.

This is the main section, which we have given some background. We need to do things inside this main section. Okay? So, let’s start creating our main section. So now we will start creating it here. First of all, I make a closing div like this. Inside this, we will add.

a glowing background where our text will come. Okay? It means that we will add some text here. Before that, we will add a glow behind it. Okay? We will add some lightly grayish-black type here. Here, we will add a class name and give it something like this.

We will first exclude it. After that, we will give it something like 1/4 from the top. Meaning, we are going to give it about 25% here as a type. If we look at it, we will also give it around 50% from the left. And we will make it translate.

to half here. Okay? Minus and minus translate to y; we will do that to half here and the width will be around 600 pixels and height will also be 600 pixels and we will round it off meaning that our background will be black with a 0.04%.

Transparency, we will add some blur of about 90% and set pointer events to none because we are going to keep it as a background. We are not going to do anything else with it. We will keep this as a background. Above it, we will provide our text so that our text stands out a bit.

Okay? That’s why we are adding this here. If we go here, you will be able to see that the area in between that appears here is a bit lighter type of white. But the area in between is a little dark colored now. Okay? It is dark because we will put text inside it and our text will be slightly dark. So, a slightly dark background will make our text appear lifted.

That’s why we have added a little background here. Now we will add some text and buttons below. Then.

we will add images, etc. Okay? So first, we will add a div where our text and everything will come. So we are adding the div here, and we will give some class name inside it. First of all, we will give a max width of around 4XL, meaning 896.

pixels here. We will set margin-x to auto and px6 padding for center text. Now, what will happen by doing this is that we have given it a max width. Okay? So here, the maximum width will cover only the area, meaning it will not cover the entire area.

Our width is 896 pixels, which will be taken here too. It means it will be centered in the middle. Is that okay? This is how we are placing it here, so that it doesn't take more items from the sides. We are giving it maximum width here. This means that in this area, our test will be shown. The rest of the area will be empty.

So now let's do one thing here. Let's create a batch type. For that, we will use a motion dip. We will create a motion dip here. We will make a batch type where it will say 'Multi Agent Interview Platform.' Okay? So let's make some batch types here.

For that, we will give it a class name. And we will give the class name like this. We will set it to inline flex. Okay? And we will center the items. We will add padding accessories. We will give the padding a value of about 1.5 rounded full. We will give it a border, and the border will be black.

15% transparent background, some black 5% transparent text, some white, black 70% text, extra small font medium, and margin bottom some four will be given here. Okay? In this way, we also need to add some animation inside it. First, we write text and so on inside it or one.

Let’s work on it. First, we will give it an animation. So those three properties that we always use, initial, animate and to add a little duration, the transition property. Okay? So we will use these three properties here. So first of all, we use the initial property here. Like this.

We use the initial property here. What things do we need to give inside it? We keep it in the bi-direction. Okay? Then we keep it downwards. Then we will bring it upward. We do something like this. So in the beginning, it will not be visible. So we need to set its opacity to zero.

You know what opacity means. If we set opacity to zero, it won't be visible. When we set opacity to one, it will be visible. So we will set opacity to zero. And in the y direction, we will keep it some 16. This means we will keep it downward. Look, if we are giving a plus value here, it means.

We are placing our dip at the initial state downward. If we give a minus value, it will go upward. And if I show you, we probably gave a minus value in the nav. See, we gave minus 60, which means it was upward, and that nav.

is coming down from above. Okay? Our nav will come from top to bottom. After that, we will also add a little delay inside it. First, the nav should come, then our motion dip should come up. So we will also apply the animate property in this. Like this, we will close its opacity.

Okay? And we will set y direction to zero. This means we will bring it from bottom to top. After that, we also add a transition inside it. And we add the transition property here. Inside which we firstly give a duration here; what duration do we want to add inside it?

So we give it a duration of about 0.5 seconds here. This means we give it a half-second duration here. And then there will be a delay here so that first, our nav comes, then after some time, that is, after 0.05 seconds, this will come from bottom to top. Okay? We can also write something inside it.

So here we write 'Multi Agent Multi Agent Interview Platform.' We write it like this here. Okay? And if we want to see it, we will go here, and you will see it coming like this, 'Multi Agent Interview Platform.' So we have created a batch type here.

And now after this, we will add some text below, add headings, add paragraphs, and so on. Okay? And now, look, we added a div here. But we need to do things inside this same div. This we have.

The width was given as 4xl here. Inside this, we will create our motion h1 again. Is that alright? Let’s create a motion heading here in this way and give it some class names first, and in the class names, we’ll provide the text some 3xl here. Now the 3

xl is being made fully responsive along with responsiveness. So, the 3xl will be applied for small devices here. After that, the mid devices will take mid and large devices, where it will take test some fivexl here. The font will be made a bit extra bold.

The leading is set to 1.5 here, meaning there is one line. We are adding the length inside it in this way and tightening the tracking. We are also adding more bottom margin. And we are giving the text color here something black and adding a shadow in some gray color. Okay?

This is how we are adding text shadow basically. So, if we need to apply shadow on this text, we use text shadow. If we need to apply it in a box or a div, we use box shadow. Is that okay? We need something else here, zero or 0 4.

Pixels 24 pixels are added here as some gray color shadow. Now we need to add some animation in this. So, we will copy those three properties we used here and apply them here. This time we will set the y to some 20. It means we will push it a bit lower.

And we will bring it here. Just like that, we will give the same transition some 0.55 here and increase its delay a bit. We set it to 0.12. It means that first our element will come down from above. Then our multi-agent will come up from below, and after a tiny delay of 0.1412.

Second later, our heading will come up. Okay? What should we add after this? Let’s write that down. So we will write it like this. I will write first that we write job interviews here. Then we will put a BR tag to bring this down a step.

After that, inside the span, we write don't have to stuck. Meaning that we are giving the text color here in black, some 30% transparent. It means that the black text we applied above is on something. Where is it applied? On the job interviews and any more. But here, our don't have to stuck is here.

Here what is it? We have given the text some black which is 30% transparent here. If we look at it, we go here and see that it's coming from our black color. But here the don't have to stuck is showing a gray color here in this way and the glow we applied behind in the black background is just behind it.

This makes our text look a bit lifted. Okay? This looks good.

And automatically as we keep adding things inside it, our dip that we created here continues to grow in size, where we applied the background color. Look, our box is getting larger because we are adding data into it, so it is growing automatically. Now after this.

Let’s add some buttons, first adding a paragraph. Then add some buttons, okay? We are working on this. So now our H1 has been created. Now let’s create a motion paragraph below this H1 as well. So here I write motion.DOT P.

A paragraph here, now adding a question mark. Here we make a paragraph. First, we will give it a class name. So we will assign a class name like this. And in the text, we give it black with some 45% transparent text and some small here.

We are relaxing the leading here. And we set the max-width to mid here. We set the next margin to auto and bottom margin to six, and add text shadow inside it. Some zero two pixels, ten pixels, with some gray color.

Okay? We have done some of this. Now what do we do inside it? We give it some animations. Just like we provided above. See, alright? We give some initial animate transitions. It will remain almost the same. We don't need to make many changes here. We will just increase its delay a little. Here we are taking 0.12.

We are making this 2 here. Before this, it will come from below upwards. Then after that, our paragraph will come from below upwards. And now what do we need to write in this paragraph? Let's write it down a bit. We need to write in this paragraph, let's write it down a bit. Alright? Fresher AI is an innovative.

AI-powered interview preparation platform designed to help job seekers excel in their interviews. So, let's write some of it down like this and I will format it so that it comes out correctly. So, we have written some of it down here. If I go here, you will see.

You will be able to see that it is coming down here written like this. Now we add a button here. Okay? We write 'Get Started', etc., and just like when we click on 'Log In' here, it gives us the login model. In the same way, we will open our login model when we click on that. Okay? Because here on our home page.

We are not doing much. We are only informing people here about how things will happen here. What agents will be there. So we will not go anywhere with the button; however, we can open our login model. So we will do that here. Okay? We will write 'Get Started for Free' there.

So when clicking on that, we will open our same login model here. So let's do that. Now we go below the paragraph. First, let's create a motion div. Okay? And inside this motion div, we will give some of this animation. Which one? We will give this animation which we are providing to everyone. The same animation.

We will give here as well. Let's write it down like this here. And we don't need to add any CSS, etc. in it. We will only give it an animation. Now after this we will create a motion button. We will give it some class names, etc. Okay? So, we have written in our div opacity.

direction 20 means it will go down. Then it will come up and we will add some duration to it and increase the delay a bit. It should come just a little after our paragraph. So we will add a little delay here. Let’s set this to 28 like this. Now, after this, our work on this div gets completed. We will format it as well.

Now after this, we create a motion button inside here. Now there will be things inside it. Look, we create a motion button here. We will add class names, etc. inside it and we need to work on it here. So first we give it some class names.

Like this we will make it relative. We will hide its overflow. The background color will be a bit black here and 80% transparent. We will make the backdrop filter black. Some 2 excel. Okay? This means we are making it 80% transparent. It means.

That it will be almost transparent. Okay? And inside it, what we will do? We will add a span. We will add some closing span in which we will also give it a gradient color. Okay? And we are blurring the backdrop filter, so it means it will look blurry.

And it means we will add a glass finish type inside this button. Okay? And here we will give it text some white, font bold, padding S5, padding some 2.5 and round it to large. Text.

Extra small, cursor pointer, provide border. The border will be something white 10% transparent. Shadow we will give here some gray color. Here 08 pixels 32 pixels transition all over making its border here white some 20%.

transparent. Okay? Let's do a bit here. Now what do we do here? Inside it, we write what we need to write. Before that, we will add a while hover and while tap property. Okay? And when it hovers, we will also add some shadow inside it. Okay? So we will place the same inside here.

The second part that we placed inside the login button, let's add it here as it is. And similarly, when we click here, we will set the show login option to true as well. Okay? We can pick up all three of these here. Copy this and place it inside the button as it is. Look at this.

We place this inside the button here. Let's format it this way. Okay? And at the same time, we do one more thing here. When we hover over this, we add some shadows, etc. Okay? This is what we used to do. We add shadows to it. So, we will give it some box shadow.

Box shadow. We add box shadow inside it. And we scale it slightly bigger. Let's make it 0.05. Okay? And we provide some box shadow here. We add some gray color in 36 pixels RGB here. Now, what do we need to write inside it? Let's write that. And inside it.

we add a span. Okay? Which we will set as absolute. We are making this relative. We will place it above this by making it absolute. Okay? For the glass finish. So here we write get started. We write get started for free here. And similarly inside it we also add.

an arrow that we had placed inside the login button. Look, this is the right arrow that we had attached to our login button. Okay? We will put the same here. So, let's write this in this manner. So we do one thing. Let's also set it to flex.

We center the flex items. We center the flex items. And inside it we give a gap of 2 here. Just like this. Okay? Now after this, we create a span inside it. This way and we make it closing. So this way I close it. Okay? And inside it.

we give some class names. Now, we will give this a class name like this. We will set it to absolute. We are making the top one relative. So inside it, it will become absolute insert zero. Okay? On the entire box and we set the background color to a gradient from.

right bottom. From here we add some white with 0.1% transparency then here we set the transparent to transparent and make pointer events none. So we can't point on this, and we round it up a bit. Okay? Now if I go here. Let's see this. So this button is coming.

to this side here let's center it a little. So let's do one thing. We remove some flex here. We do one thing. Okay? Now let's go back here and now it has come to the center. But here get started for free and the arrow is coming a bit down.

So let's do one thing. This whole thing, we will write it inside a span like this. Okay? Inside the span get start for free. And we write it here like this. And inside this span we put this class name like this. And in the class name.

we set it to flex. We center the items. We center it. And we give it some gap here as well, too. Now if I go here then one second, it was written twice. One because we didn't remove this one. We copied it from here for that reason. Now let's go back, and it looks like this.

Okay? Just like this get started for free. And there is an arrow here and the item is centered and we justify this center as well. Now it looks fine here. So it appears this way here. On hovering, it hovers like this for us. The same also hovers on this. Okay?

If we click on this here, then our sign-in model for signing into FRESHER AI will have opened. Okay? We will remove it by clicking on this. Now we have done this much work. Now let's move ahead a bit. Now here in this section, we need to add an image, that's left. After that section.

we will create the next section which will be our agents section. Where we will provide details about our four agents. Now first of all, just adding the image here is left to do in this section. So what do we do here? We come out of this motion button. First, we go here.

This motion button comes out of this div and this section. Okay? It comes out of this div. And here we handle things. Now I will create a motion button here. Let's make it motion dot dip. Sorry, and for this dip, let me give it a class name. And we will set the margin-top to about 10.

We make it rounded with some large overflow hidden. We add a shadow inside it. Some gray color of 60 pixels RGB and we set the max width to 2 excel and then we set the margin x to auto. Now, we add some animation properties inside it.

We set an initial animate with a while hover and along with a transition. So we use about three properties. So the ones we used above, let's copy them first. And we will place them here like this. So first we will set it to 30 here and we set it to 0.7.

We set the duration to 0.3 here for its delay. Okay? This way we add a delay inside it. And we remove one second. We have done something here. Now we will add a while hover property inside it. While hover and inside the while hover, we will set something in v.

direction of this will be lifted upwards. Okay? We will lift this upwards in the v direction. So we set it to minus 10. This way we will take it upwards. Along with this, we will also increase its scale here. We set the scale to 1.02 here. Okay? This way and now.

What do we need to add inside it? We need to place an image here. So let’s place a simple image like this. Okay? This way we will place an image here. And now inside the image, first, we need to provide some value in the src. So the image we have is.

the one with the dashboard. Okay? So we need to access this dashboard image. So how will we access it? First, we go up here and we need to import that image here. Okay? So we give it a name. We take it as image.

Or let’s do one thing and add an image named dashboard here. And where will it come from? So here we write dot dot slash. So we can access the folder of assets. We click enter. We can access it by putting a slash inside the assets folder if I write here.

this way image dot png then we can access it here. Okay? So we give the dashboard image a little. We will go here and write in curly braces like this and here we will place dashboard and add some info in the alt.

For instance, if the image doesn't show, we write here we just write dashboard in this way in case the image does not appear we write dashboard img here. Okay? We give this image some class name here and in the class name we will give it width full height auto.

object cover and block it this way. And if we go here, you'll see an image has been placed here, behind which a shadow is also showing. And if I hover over this, it is going up. See its scale will increase and it is coming up. And if we refresh this whole.

You will see that our nav comes from top to bottom and these are going from bottom to top. See, let’s refresh it. Look, you can see that you have just seen that our nav came from above. It came down from the top and these all went up from below. Once again, we click on this. Look, you can see it is animating here on refresh.

Okay? It means whenever any user comes here for the first time, it will animate like this, see. Okay? And we will lift on our image. Our image will go upwards. So we have created something here. Our main section has been completed here. Now we need to create our agents section.

After that, our homepage will be completed. Only the footer remains. We need to create the footer as well. So there are two things we need to do here. Okay? Let's tackle this work. And let’s do one more thing. The scroll bar that you are seeing here, we need to.

We turn it black here. Okay? First, we will turn this to black. Look, this is how we've put the scroll bar. We'll make this black. For this, where do we need to go? We need to go into our index.cs. So here we go into our index.cs.

Let's go. First, we put a universal sector here, which will apply everywhere. So here we have our scroll behavior. We'll set the scroll behavior to smooth here. Okay? Now here, we will add some background colors, etc., inside the body.

We give some background color inside the body. Is this okay? And we set its color to white. We input the text into the font family here. And here we input comma FL system and blink mac system font and we provide some of this here. Okay? These are all our sensory.

We'll take from the family. After that, we move on. Here we need to write body again in this way. Okay? Now we proceed with it. Now here we customize the scroll bar. Okay? So this is how we write colon colon iPython web kit web kit, then here.

Write the scroll bar here in this way, and we wrote something here so that we can access the scroll bar and its width we set to six pixels here like this. Okay? We set this width to six pixels here. Again, we access it here. Now what do we do next?

What we have here is a web kit. Here we write web kit. And then we write scroll bar, and scroll bar is another track we have. Through this, using a track, we can add background color to our scroll bar. Okay?

So we do something here. So I write the background color like this. And we give it some background color here. Here we give it a black background like this. Now we go back here again. So now as soon as we come to that thing, I mean, if we come to the thumb of our scroll bar, what should be its color? I mean, what should be the background like? So let me set this first.

So here we write web kit and web kit scroll bar and you'll see we have a thumb. We go to it and now we change its background, etc. Okay? As soon as we go there, we see the background, etc., changes a little. Okay? So, we set its background here to white. And there is one border radius within it. We set this to.

Set it to three pixels. Okay? In this way, and if we hover here as well. Okay? I mean if we hover over it, we apply hover here. Now what is our thumb? When I show you on this, you will understand it better. So we change its background color.

Okay? We give it some color like this. Okay? I mean, a gray type. If I go back here again, then see what it is? On hovering over it, look how it is hovering on the scroll bar and it's moving up and down. And we set the background of the scroll bar to pure black here. So from this, you will understand one thing here, the thumb is the one that moves up and down like this. This is our thumb and behind it, the black color is our track. Okay? It is the web scroll bar track and what is this? Its thumb is the one that is going up and down.

It is moving with the track. Okay? So we have made some changes here. We changed their color a little bit here. Okay? Just that much will be done. This is something that is also gray type. Look, as soon as we are on hover, it is turning a little gray type. So what have we done to our scroll bar? We've animated it here, which means that we've customized the scroll bar a little bit. So this is what we used. First, we set the width of the scroll bar to six pixels. And our track where.

बार का वो था उसको हमने यहां पर क्या कर दिया? प्योर ब्लैक कर दिया। तो इससे आपको एक चीज यहां पर समझ में आ रही होगी जो थंब है जो हमारा इस तरह से ऊपर नीचे होता है। यह हमारा थंब है और इसके पीछे जो हमारा यह कुछ ब्लैक कलर का यह हमारा ट्रैक है। ठीक है? वेब स्क्रॉल बार ट्रैक है और यह हमारा क्या है? उसका थंब है जो उसके ऊपर नीचे

यहां पर हो रहा है। ट्रैक के साथ चल रहा है हमारी। ठीक है? तो इनको हमने यहां पर इसको हमने थोड़ा सा यहां पर क्या कर दिया? इनका कलर चेंज कर दिया यहां पर। ठीक है? बस इतना कुछ और होगा करने पर। यह कुछ हमारा ग्रे टाइप का भी हो रहा है। देखो इस पे जैसे ही हम जा रहे हैं हुबर कर रहे हैं

तो ये हल्का सा ग्रे टाइप का हो जा रहा है। तो यह कुछ हमने अपने स्क्रॉल बार को यहां पर क्या कर दिया? एनिमेट यहां पर मतलब कि स्क्रॉल बार को थोड़ा सा हमने कस्टमाइज यहां पर कर दिया। तो ये चीज हमने यूज़ की थी। सबसे पहले स्क्रॉल बार को हमने कुछ विड्थ यहां पर सिक्स पिक्सल कर दिया था। और जो हमारा ट्रैक था जहां पर

Our thumb is located above and below. So what have we done to the track here? The background color here is set to black. And the thumb here has been given a white background. We gave it a rounded radius of about three pixels, making it slightly rounded at the top and bottom.

And after that, when hovering over the thumb here, we are changing it to a gray color. Alright? Alright? So we've done just this much work here and everything else is fine. Now we go down here and create our agent section. We again go to the home page and now we create an agent section here. So our agents.

section is being created. So here we write Agents like this and comment it out here. So first, we have commented out the Agents. Now we create a section. Let's create a section here like this. This was our main section. We create an Agents section. We give it a class name.

We set this to Py = 16. We give its background color something like this. Now in this section, we mean something like a white type of blue. Now what do we do inside it? We again create a div and give this div a class name.

We will give some max-width here so that everything fits in this area. Now let’s give this div a class name. We set max-width to 5 excel. Mar den x auto and Pyx to six padding here. Now we can process the remaining things. Now we create a div.

Inside this div, there will be a badge, a heading, and a paragraph. So we give this div a class name. So we set the text-center margin bottom to stand here. Okay? Now we create another div inside it. Like this, we create an H2.

heading. Okay? We write an H2 heading here like this and below it, we create a paragraph like this. Okay? So first we give a class name to our div and inside it, we give some text within the badge. So we give it inline flex like this, item.

Center Pyx3 padding Py to 1.5, rounded full border with some border color in black 15% transparency. background color is somewhat black 5%, and text color is somewhat black 70% transparent with the text in extra small font and medium margin bottom about four.

And the badge we gave earlier, the same we are giving inside this. Okay? And here we write AI-powered. AI-powered agents are written here like this. So this is what we wrote. Now let’s see if we go here.

Like this, a badge has been created. So our AI-powered agents are displayed like this. And now here we assign a class name to this H2. We give it a text of something like 2 excel in the middle and text of something like 4 excel, meaning that if the width of our devices is smaller than mid.

then it will take a text of 2 excel otherwise it will take a 4 excel font, something extra bold tracking tight with background color black and text we give it something black, and text shadow here four pixels twenty pixels RG.

Some color we give is gray, and now let’s write inside it what needs to be written. Okay? So we write like this, special specialized agents for every interview stage, so here we basically block this in the span.

We are giving this black 30% transparent text, and we write in it every interview stage, meaning that this will be somewhat dark and this will be our light every interview stage. Okay? If we format it for a second, then it’s written like this. Now let’s see if you can see that our above text is.

black and afterwards it is somewhat of a light color. Like we gave in between here like this. So we have done this. Now we go downwards and we add another paragraph. Now we will also give this paragraph a class name like this. We set the test to be somewhat black.

40% transparent test small made we set the maximum width to 2. Margin auto on top some leading some relaxed we set here. This means we add some line length inside it. And now we provide some paragraphs in it. What should we write in it?

To us? And we write it this way. Fresh air combine multiple AI agents that work together to help you build your resume. Practice interviews receive detailed feedback and follow a personalized roadmap to land your

dream job. So, let’s write something here this way and format it too. So that it appears properly, let’s take a look. It is coming up like this here. Is that okay? We have written it like this here. Now, what do we do next? Here we create some grid boxes. We add four boxes here.

And inside, we take one piece of data. We take an array here which will hold the details of some four agents. Okay? Let’s map them here. So now let's do that. So we go below this paragraph. We do things inside this dip,

which was where we were giving text center and such. Now we come outside this dip and again create a dip and assign some class name here. And we will create grid boxes with that class name. Alright? We set the grid. In the middle, grid columns.

Some two, in the last grid column some four. Meaning that here we will be making four boxes. So in small, one box will come above and below, and in the middle, there will be two boxes. Meaning next to each other, one box will be above, below two boxes next to each other. Alright? And

in large, we will see four boxes in one line. So we do that here. Now what do we need to do after that? We need to map some data. Let’s do that. So now we have to map inside this. Let’s place a curly bracket here and I bring an array this way. So one

array I have added here. Look, this is our array. Now let me format it for a second. And let's see what’s in this array. First, I will remove it. Inside this array, we have one object which contains an icon. Some file test is okay,

right? Title is resume agent, and in the description, it says create ATS-friendly resume, improve profile strength, and maximize interview opportunities. Alright? That is something. After that, we have another object, which is okay? Here we have a total of four objects in which

the second one has an icon. It has a microphone icon inside. Here in the title, it says interview agent. In the description, it says conduct realistic HR and technical and coding interviews with powered simulations. Okay? This is something here. After that, the feedback agent has

a bar chart type of icon. Its title is feedback agent and in the description, it states get detailed answer analytics, scoring reports, and improved recommendations. Alright? So this is our third agent, and lastly, the fourth agent

we have is a roadmap agent where it says generate personalized learning roadmaps based on goals, skills, and performance. Alright? Here we have four objects. Meaning that inside the array, we have four agents. Now what do we add here? We apply a map

and we map it. Alright? Inside it, I take two things. One I take as agent and one I take as index. And we map them here this way. Alright? Now we add a div inside it. Inside it, we add a motion div where we will map.

Alright? This way. Inside it, we will map things. So if I write agent dot icon here, our icon will get mapped, and if we write agent dot title, then our title will appear there, and since there are a total of four objects, there will be four motion div.

They will be created here because we are mapping this motion div to this array. So four of our one motion div will be created here. Okay? So first we need to give this a key. So we give it a key here. We will give it the same index key. We assign some class name here and class name.

First, we group it. What does grouping mean? That all the divs we create inside this div will be grouped here. Okay? It means that if we are doing one page, it will be over all pages. And here we set it relative, with overflow hidden, we give it a background color, something black.

80% transparent. It means that we are giving it a sort of transparency. And we are adding a backdrop filter blur with some two excel glass finish here. Okay? This way the border is something white with 10% transparency, round two excel padding of five, and the shadow here is zero.

Pixels 8 pixels 32 pixels here in RGB with some gray color, when done, increases these pixels. Okay? And we give it gray color. And when done, the border here will be white. 20% transparent and.

Transition all means that this entire thing will work on the whole group. Okay? We are adding hover and so on. Okay? This will work on the whole group. And after that, we are now adding some animation properties inside it. Because we have set the motion tab here. So we are adding some animation properties to it.

Let's format this a bit. So now let's understand the animation properties inside. You will see some things common here and some things might look different.

Like while and view, and there you will see a viewport looking different. Okay? Let's understand what this is? Initially, our y direction will be 24. It means it will be downwards. All the boxes will be down. They will come from the bottom upwards. And when will they come? When we use the while in view property here.

It means that when we scroll down here, we will come to our agents section. Then as soon as they come into view on the screen, they will be seen coming from bottom to top. Okay? You might be understanding by the name that when we view it, what happens is it comes from bottom to top, which means it starts at 24 and the y direction is set to zero, meaning it will be seen coming from bottom to top when those boxes come on our screen.

And the viewport is doing once true, meaning this will happen only once, like when a user comes here for the first time and scrolls down, as soon as our boxes come up, they will appear coming from bottom to top. Okay, and after that, if they want to go up or down as many times as they want, they won't be seen animating because we have set it to once. And if we refresh it, we will see them come from top to bottom once again.

Now let's add some duration in the transition here, add 0.45 duration and delay something i * 0.08 here. What does this mean? Let's understand this.

So the index means that first, this is our zeroth index which is our first resume agent. This interview agent is on our one index. This is the two index or three index meaning here from zero to three index. So here we are adding delays in such a way that the first box comes up first. Then the second box comes up slightly later, then the third box will come even later, and the fourth box which is last will come up. Okay? Because its initial property is 24. Meaning all four are currently down.

हमारा पहला वाला रिज्यूमे एजेंट है वो हमारा जीरोथ इंडेक्स पे है। ये इंटरव्यू एजेंट हमारा वन इंडेक्स पे है। ये टू इंडेक्स या थ्री इंडेक्स मतलब कि यहां पर ज़ीरो से लेके थ्री इंडेक्स यहां पर है। तो यहां पर हम इसके अंदर इस तरह से डिले ऐड कर रहे हैं कि पहले जो हमारे चार बॉक्सेस

है उसमें से सबसे पहला जो बॉक्स है वो थो वो क्या करें? पहले ऊपर आए। फिर जो दूसरा बॉक्स है वो उसके थोड़ी डिले बाद ऊपर आए। फिर उसमें तीसरे बॉक्स उससे भी ऊपर उससे देर थोड़ी उससे थोड़ी देर बाद ऊपर आए और चौथा वाला जो बॉक्स है सबसे आखिरी में ऊपर आए। ठीक है? क्योंकि इसके अंदर इनिशियल प्रॉपर्टी 24 है। मतलब कि अभी चारों नीचे

is going down. All four are going down and we cannot see them here. Alright? As soon as we view them, they will come up one by one. First, our first box will come up. Then the second box will come up. Then the third and then the fourth. In this way. So if the delay here is zero, it means that

if the i index here is zero, then 0 * 0.8 means that as soon as we view, the first box will come up first. Okay? And as soon as it comes to the second one, it will have a delay of about 1 * 0.08, which means there will be a delay of 0.08 seconds here. Meaning the first box will come up first, then

the second will come up after 0.08 seconds. Then we will multiply this by two, so the third will come up after 0.16 seconds. Then we will multiply by three, so the third will come up after 0.24 seconds. This is how things will be. Alright? We are using some more properties inside it while

hover, which will cause it to go upward in this direction, and as its scale will be about 0.2 here. In this way, it will be 1 and 1.02 here. Now we will do some things here. After this, we will add some glass screens and so on. So

this way we will create a closing div. Alright? Inside which we will give some class names as absolute. Since we are re-labbing it, we will make it absolute. We will give this a class name and set it absolute. Insert zero background color, give it a gradient to

the bottom right. Because for this one, we had almost made the background color transparent. And the backdrop filter, blur, was given here to excel. Thus creating a transparent blur color. Alright? The box we have will add a gradient color with a glass finish

of the gradient color. Alright? In which we will have from white some 0.08% transparent, then here transparent, then here transparent, and we will set its pointer-events to none. Alright? Now, after this, we will add a hover effect inside this. Alright? We will also create a closing

div for this. So inside it, we add a hover glow. Alright? Then we will add some CSS here. We will also make this absolute. Set it at -10 from the top and -10 from the right. We will give it a width of some 32 and a height of 32 here. And we will set the same background colors

to white with some 10% transparency rounded full. Blur some 3 excel from zero above and while hovering over the group. Meaning, why are we doing this? When we hover over the group, its opacity will become 100. The point is that we will not see this right now. The box

inside which we are doing things has a background color of some white with 10% rounded. We will not see this initially. As soon as we hover over it here. Alright? So the whole group we had created will hover over. Its opacity will become 100. Meaning, as soon as we hover over it, now our

box inside which we are adding some colors, etc., will be visible when hovered. And we give opacity inside the transition. The duration is about 500 for this. This is how it is. Now after this, we will map our data. Like

icon, title, description, we will map them here. Alright? So after this, we will create a div, give it a class name here, and set it to relative. Alright? In this way, we make it relative. And now what things do we need to add inside this div? First of all, we need to add a

div inside which our icon will come. And then we need to add an H2 where our title will come and a paragraph where our description will come. First, we give this div a class name, some. We give it a width of some 11 height 11 rounded excel. Meaning this

will make it like a box type. Rounded excel and we give this a background color of white with 10% transparent and a backdrop filter of blur mid. The border will be white with 10 15% transparent flex. To center the items, we can just set them to be in the middle.

Our text is somewhat white. The text has large bottom margins, some for shadow, and some inner. What is to be written inside it? First, we apply curly braces. And inside this, we have to write what our agent is. We had mapped it here, and the agent's icon that is here, we need to provide it. Look, so we

Here, see we were writing the agent like this, and I was writing an index I. So if I write agent.icon, then this icon will appear in all four boxes here. Okay? So we've done some of this. But if I go here for a second, it's giving some error here. What it says is that this is the one we stated here.

The icons we have used are not defined here. It means that it is not imported above. So let's import them. Okay? So we will basically find them in react-icons. We will import them from there. Okay? So here, we were using four icons. These are

our FiMap, FiBarChart, FiMic, and FiFileText. So if you search for these, okay? In react-icons, you will find all of them. We will import them directly here. Okay? Where will they come from? They will come from react-icons.

Okay? Now if we go back here, look, there is no error appearing now. And in this type, see, our four boxes have appeared. And see, this is our small device. So here, they are coming up and down. Okay? And as soon as I make it larger,

look, they have come side by side. And as I make it larger, these four boxes are coming with me. Okay? In this way, our full response is saved here. You will be able to see our full response is saved here. It's showing like this, and if we remove this, then it's showing like this. Okay? And if I show this in the view while and view,

property, then let me refresh it once. Okay? So they are animated now. Just as we go down over our boxes here, you will see that first this box came up. Then this box came up. Then this one, then this one. Okay? Let's look at it again.

Refresh it. So as we view this, they will come up one by one. Look, as we go down. See, one by one our boxes have come up. It has happened a little quickly, but you will be able to see that they came up one by one. And icons are also placed on them. Look, and as we render them,

you will see that their background color changes a little. Look, it's changing as they are being hovered over. The whole group is changing. Now what do we do inside this? We will add our title and description. So now let's go down

और सबसे पहले यहां पर H2 को क्लास नेम देते हैं। यहां पर टेक्स्ट बेस कर देते हैं। फों्ट बोल्ड मार्जिन बॉटम कुछ टू टेक्स्ट कुछ वाइट और इसके अंदर लिख लेते हैं और इसके अंदर लिख लेते हैं हम अपना एजेंट डॉट टाइटल। ठीक है? एजेंट डॉट एक सेकंड टाइटल यहां पर लिख लेते हैं इस तरह से। तो हमारा टाइटल लग चुका है। और इस

वाले पैराग्राफ के अंदर लिखना है हमें एजेंट डॉट डिस्क्रिप्शन। ठीक है? ठीक है? और इसको जरा क्लास में मोड़ देते हैं पैराग्राफ को और यहां पर इस तरह से लिख लेते हैं फ्लै इसको टेक्स्ट कुछ वाइट 45% ट्रांसपेरेंट टेक्स्ट एक्स्ट्रा स्मॉल और लीडिंग कुछ रिलैक्स कर देते हैं। ठीक है?

और अब अगर मैं यहां जाता हूं इसको देखते हैं तो आप देख पाओगे इसके अंदर पूरा डेटा हमारा लिख चुका है इस तरह से और ये हमारे कुछ इस टाइप से यहां पर दिखाई दे रहा है। ऊपर नीचे हमारे होबर होगा करने पर हमारे ऊपर की तरफ आ रहे हैं। और अगर मैं इसको रिफ्रेश कर लूं एक बार और हम इनको जैसे ही व्यू करेंगे तो पहला वाला देखो सबसे ऊपर

आएगा। फिर दूसरा वाला फिर तीसरा फिर चौथा। इस तरह से हमारे एनिमेट होते हुए आए और यह हमारा पूरा काम यहां पर कंप्लीट होता है। हमारा जो एजेंट वाला सेक्शन है वह भी बन चुका है। लास्ट हमारा एक फुटर रह गया है। अब उसको और बना लेते हैं जरा। तो अब लास्ट में यहां पर ये वाला सेक्शन भी कंप्लीट होता है हमारा। तो अब इस वाले जो हमने एक

I had created a login model, right? Now let's move down. And what do I do here? I create a footer of my own. Okay? This is how we write a footer. And we start creating our footer. We give it a class name here. And let's put some top border here.

We make it black. 7% transparent padding with some six text, and here we have a center background color of white. Okay? And now we need to do things inside it. So if we go here now, you will be able to see a white area below has appeared. You will be able to see it here. Okay? This

will be our footer. So now we create a div inside it where all our work will be done. And we give this div a class. Flex item center, justify center, gap some two, and margin bottom some 1.5 we do like this. And now we create another div inside it which will contain what? It will contain an icon.

Our Fresh AI and text will be written Fresh AI, and below it, we will write All rights reserved. We will write something here like this, All rights reserved. First, we give a class name here. So here we give it a class name. Width five, height five, rounded mid, background color some.

We give it black. Flex item center, justify center. So, inside this div, there will be an icon and another span. Okay? Now what do I need to do inside it? First, I need to put an icon here. After that, we will add a span. We add the icon inside it. The same

GI artificial high that we had used in the nav. And we give it a size of about 11 and we will change its color to white here. This way we give it a white color here. One second, we give it white. And this work is done. Now after this, we write text here inside a span. In the span,

we write it this way, Fresh AI. Okay? This way we write Fresh AI. And here we add a class name. And we give this front width text some extra small. Text some black 70% transparent. Okay? So what did we do inside this div?

We added our icon and wrote one fresh area inside this div. Now below this, we will again create a div where we will write things like this. First, we give it a class name. We will see how it looks first. So here you will see it is writing Fresh area.

An icon has been placed here. Now below this we will write All rights reserved here, we will write something. Okay? So we give this class some text, black 30% transparent, text extra small, and now we write things inside it nicely. So here we write something like this, we put a C symbol here and write New Date dot get full year so that whatever year is running here will be displayed and Fresh AI dot All rights reserved will be written here clearly under the reserved. Okay? And if I look at it like this, you will see things like this.

And so we will work on this, we make it 50% transparent a little so that it looks a little dark to us okay now this looks a little dark. Now it's looking good enough. So, this part has been made here. Our homepage has been completely made. Okay? Here we have added some text and

other things. Then we added an image of our dashboard. After that, we told about our agents that we have some four agents here and lastly the footer and our nav was already here and also we had slightly customized our scroll bar here. Okay? That's it

So this much work has been done here. Our homepage is ready here. And if I click on this, then our login model comes here. We can log in on this. So let's log in. And as soon as we log in here, we will come to our dashboard. Look.

तो इतना काम हमारा यहां पर हो चुका है। हमारा जो होम पेज है वह यहां पर रेडी है। और अगर मैं इस पे क्लिक करता हूं तो हमारा यह कुछ हमारा लॉग इन मॉडल आ रहा है। इस पे हम लॉग इन कर सकते हैं। तो लॉग इन कर लेते हैं। और हम जैसे ही यहां पर लॉग इन करेंगे हम अपने डैशबोर्ड पे आ जाएंगे। देखो

Come to the dashboard. Our name is coming up as Ankush. And now what do I have to do here? I have to design my dashboard. Here we will create a map first. If I show you the dashboard, just hold on for 1 second. For that, first, I will have to clear my session here. Alright.

First, let me remove my session here. Let me do this. Let's go there. Let's delete our session so that we can again go to our home page. We have reached the home page. And now the dashboard should be visible to you.

Understand that we need to create the dashboard this way. First, we need to create a fully responsive sidebar here, so that it can be accessed outside and inside. On clicking here, we will have a create interview button, a resume builder, a roadmap page, and a roadmap builder resume scorer. Alright, and below that, whatever our interview coins are, they will be written down here, and below it, it will show our name Ankush Sahu written. Then we will write the email here, and a log section will be included. We will create some of these.

After that, as soon as we complete our sidebar, we will then create our resume builder, and we will create our resume scorer.

We will create the interview section, and then we will get the data for our interview. Then we will map that onto our main area of the dashboard. So that's the work we need to do here. First, we will create our sidebar, and then we will create our resume builder. We will create the resume scorer and then the interview section.

After that, we will create this main area. Okay? So let's start creating our sidebar inside the dashboard. Alright? Let's start creating the sidebar inside the dashboard. So let's go back to the dashboard.

We are logged in. We are now on the dashboard. Let's start creating our sidebar. So what do we need to do here first? First, we need to create our sidebar inside the dashboard. We won't create the sidebar directly in our dashboard file. We will create a separate component for it.

And we will import that component into the dashboard. This will be more appropriate for us. Alright? This way our code won't look cluttered. We will simply create a separate component for the sidebar and import it into the dashboard. Okay? And we need to create the sidebar somewhat like this.

If I go here and show you an image, this is our entire dashboard image. Let's understand this a bit. This is how our sidebar is going to look here. Look, this sidebar is going to open here.

So this sidebar is currently open here. Alright? This sidebar is currently open here. But if we click on this icon, the sidebar will slide in. Meaning, only the logo will be visible here. Along with it, we will see a plus icon. Inside agents, we will only see these three icons, and the text next to them won't be visible. Alright? Meaning, the text won't show. Just some icons will be visible here, like the AS icon will be shown here. And as soon as we click on it again, it can slide back out. Alright? So this is how we need to create a sidebar that can slide in and out.

And this is for our dashboard. Meaning, this is for our desktop here. But we will separately create a map for mobile that we can open and close. We will design it in such a way that by clicking, we can slide it in and out. Alright? Meaning we will be able to open and close it.

We will create a separate one for mobile too. Alright? So basically, we will create the sidebar in a similar way. But we will use it differently for mobile and differently for desktop. Alright? The UI will remain the same. Let’s start creating this first.

कि ओपन और क्लोज कर पाएंगे। मोबाइल के लिए भी अलग बनाएंगे। ठीक है? तो बेसिकली साइड बार तो हम एक ही जैसा बनाएंगे। बट उसको मोबाइल के लिए अलग यूज़ कर लेंगे और डेस्कटॉप के लिए अलग तरह से यूज़ कर लेंगे। ठीक है? बस UI तो हमारा यही सेम रहेगा। तो इसको बनाना स्टार्ट करते हैं। सबसे पहले

What do we need to do here? We will need to apply people like this. We will need to add an icon. By opening and closing this, we can open and close it. An icon for creating an interview. Now we will need to create that interview button. We will have to create something like these three agent buttons. One interview coin.

We will need to create a section here. And finally here, whatever our user is, their name, email, and this text will be written as the user's name inside our icon. And alongside, we will add a logout icon. Look, we will add some icons here for logout like this.

By clicking on this, we will log out as well. Is that okay? So this is the work we need to do here. Let's do that. First of all, look, we will remove the user.name we've written here. And here, we will also remove the CSS for the text green 700. Okay?

What will we do here now? First, inside the dashboard, we will create a sidebar inside our component. So here simply I'm going to create a file inside this component. I will name it Sidebar. Okay? I will write here sidebar.

js here. Okay? And where will we import this sidebar? Inside our dashboard. First, we will write RFC here like this. This will import export our sidebar here. Okay? And along with that, we will need some values in the sidebar parameters that we will.

send from the dashboard. So what values do we need? First, we need a user. The data of which user we will show there. We need that. Along with that, onNewInterview means that when we click on the new interview button here, what will happen? Okay? So we will take onNewInterview as a parameter. Along with that,

we will write here onLogout, so when we click on the logout button here, what will happen? We will write all these things in the dashboard. Okay? And along with that, we need to check if the sidebar is open, then we will write sidebarOpen, and we need to take here setSidebarOpen, so these two.

things we need to take here, so we will write setSidebarOpen here and all these icons will be here. The use states we create for them, we will create them inside our dashboard. We will keep a mobile open here, we will write 'mobileOpen' as a parameter and we will write 'setMobileOpen' here. Okay?

Like this and we will write and we need to pass all these in the sidebar in our dashboard as well, so what do we do in the dashboard? We provide the parameter values to the sidebar. Okay? After that, we will start creating our sidebar. So first, what do we do?

We give the main div a class name. We set the background color to white. We set the main height to be screen. We give it some black color text here. And we give the font a sense and flex here. Okay? So it should look something like this here because we have removed everything, and now here let’s first create a useState. I will write cost here and first, we will write sidebarOpen. We will write setSidebarOpen here and set it equal to useState and.

in default, we will give its value here as false. Okay? This means that initially, it will remain false. So similarly, we write cost here mobileOpen and by adding a comma, we write setMobileOpen, so we will create two use states like this and we will write it here like this state and similarly we will write false, so these are two things we need to provide here. Along with that, what do we need to do here? We also need to send a logout function inside our sidebar. And where will we put the sidebar?

हैं यहां पर। एक सेकंड यूज़ स्टेट यहां पर लिखते हैं। और डिफ़ॉल्ट में इसकी वैल्यू को हम कर देंगे। यहां पर फॉल्स दे देंगे। ठीक है? मतलब कि शुरुआत में यहां पर फॉल्स रहेगा। तो सेम यहां पर कॉस्ट एक लिख लेते हैं यहां पर मोबाइल ओपन और कॉमा लगा के लिखते हैं यहां पर सेट मोबाइल ओपन तो ये

दो यूज़ स्टेट यहां पर इस तरह से बना लेंगे हम और यहां पर लिख देंगे इस तरह से कुछ यूज़ स्टेट और सेम यहां पर लिख लेंगे हम इस तरह से फॉल्स तो ये कुछ दो चीजें हमें यहां पर देनी है। साथ में हमें यहां पर क्या करना है? एक लॉगउ वाला फंक्शन भी यहां पर भेजना है अपने साइड बार के अंदर। और साइड बार को हम लगाएंगे कहां? तो इसके

We will place the sidebar right here below. So in this way, I write the sidebar here, and this component will come up. Now we need to provide parameters inside this. Like first, we need to give it a user. So what do we give inside the user? We will give the same user that we get from the app here.

Is that right? Here we were saving the user in set user inside the app. So we will access this user from the dashboard. We will access it from the app to the dashboard and then provide it to the sidebar. Now, what was there? Let's take another look. Now, there is an on new.

The interview is here, and there's an on logout here. Is that okay? So let's go here and write on new interview, and what do we need to do on new interview? We need to make it navigable by clicking on this. Alright? So we can also take a navigate here. Alright? This way, I write use navigate.

Let’s set navigate equal to this, and here we write it like this use navigate. We are writing use navigate here, and maybe our use navigate hasn’t been imported above. So let’s import it. We write use navigate and from where will it come from? Let's write from here.

It will come from our React Router DOM. Alright? This way we write it. With the callback, we write like this. And on clicking this, we will navigate it to a page that we will create later. We will navigate it to a slash interview. So now we don’t have a page.

But we write here that when we click on this, we will take it to the set new interview page. Alright? After clicking on new interview. Then there is an on logout function. Now here, what do we do? We call an API for our logout function. Alright? Because we also have to send logout along with this that on.

Clicking that, what will we do? So we create a function named handle logout. So here I write const handleLogout equal to an async arrow function this way we will make it like this with a few parameters inside not needed. And now we write this inside try catch.

Alright? So simply what do we do? Here we take a constant response. So here we set response equal to await firstly. And here we need to make a get request through axios. But here we had created our axios.js. We created an API here.

We will use this API where the base URL is and credentials true. Alright? So simply here, we write the API that will come from our URL dot we will make a get request where? So we already wrote it at the server URL; we had already given a base URL.

We will make a request at slash API auth slash logout. So we write here like this logout, and along with that, we don’t need to give anything else here. Alright? So we will make a request at logout. And once I go to the auth model here. Meaning that we will go to the auth service here.

Is that right? So here it is something. After that, we go inside the auth service in services. So there are some routes here at slash logout. So we have added slash API slash auth, which allows us to access our auth service through the gateway and we added slash logout to that.

Is that right? This way we will be able to call this API. We will be able to fetch our logout controller. Alright? So we have handled quite a lot here, and we need to make a get request so we don’t need to give any data along with it. So we have handled this much. So our API will fetch here. Now we set a condition. If the

हमारा रिस्पांस डॉट डेटा डॉट अगर सक्सेस यहां पर ट्रू है तो एक सक्सेस भी हम साथ में यहां पर दे रहे थे। तो देखो अगर यहां पर अगर मैं दोबारा जाऊं अपने तो यहां पर दोबारा मैं जाता हूं जरा कंट्रोलर पे अपने तो लॉगउ वाला कंट्रोलर अगर हम देखें तो यहां पर हम रिस्पांस के अंदर एक सक्सेस के

अंदर ट्रू भी भेज रहे थे। ठीक है? तो अगर यहां पर सक्सेस जो रिस्पांस डॉट डेटा डॉट सक्सेस अगर यहां पर ट्रू है इसका मतलब क्या है कि हमारा लॉगउ सक्सेसफुली यहां पर काम किया है। ठीक है? इसका मतलब ये है तो तब हम यहां पर क्या कराएंगे? तो इस तरह से इसको हमने लिख लिया कि अगर यहां पर

If response.data.success is true here, then what do we need to do? First of all, we will navigate it. Simply navigate to your home and set the user to null again here. Is that alright? We set the user to null.

We'll do it simply. And let's do one more thing, let's write this a little below it. First, we will set it to null, then we will navigate it. Is that okay? Because if we don't set it to null first, it won't navigate. So we will set it to null here first. Then we will navigate it. And if there is an error, what do we do?

We take a console log of that error. So we have also created a logout function here. So here I will write logout. We will write handleLogout. Alright? Just writing the same function we created in this way. So on this button, if we put the handleLogout function inside our sidebar, it will work. Is that clear? Now what do we need to do next? We need to give an open sidebar.

What should we provide inside open sidebar? The same user state we created before, we will provide it inside open sidebar. Just like this, we set open sidebar again here as setSidebarOpen. After that, there is an open mobile and we will also provide mobile open inside that. We are providing the same user streams we created here. Alright? We will set mobile open here in the same way.

So, all the values we were taking inside our sidebar we set in the dashboard. Alright? So now there is data inside them. If I go to the sidebar and type user.name here with curly braces, then it will show here. Is that clear? If there is a user, then what is the name? If I go here and write Ankur, it's showing up. But where did we write this? We wrote this inside the sidebar. Alright? And it's showing up here on the dashboard area of the page.

So first of all, let's do one thing. Let's remove some of this. And first here, what do we do? We create a motion sidebar. Alright? So first let's import motion. Because now we will also use motion along with it. So let's import motion from here to home and set it like this. Alright? Now, we won't put this debug here.

So like this, let's set a closing and opening tag here. Now what do I do? Here I create a sidebar. So I will write it like this motion.asSidebar. Alright? Now we create a sidebar here and we will give it some class name. Let’s write class name like this.

We will add some animations inside it too. We will give the width in the animation, that if our sidebar open is true here. What does that mean? If sidebar open is true here, then its width will be slightly more for our sidebar. Alright? And if the sidebar open is false here, then the width will be smaller.

That means if you are seeing, this is our sidebar in the BS code here. Alright? This whole part is the sidebar here. If I close this, then we can only see this much area. Look at it appearing in the sidebar. So.

We need to create a sidebar like this, that if the sidebar open here is true, then this whole area will appear with this width. Here in the sidebar, and if the sidebar closes here, then it will only take this little width where our icons will show. Alright? So we want to create a sidebar like this. And first of all, what do we do here? We give it a class name.

First, we are creating a sidebar for our desktop. And as soon as our sidebar for desktop is created, then we will create a sidebar for which? For our mobile. Alright? Right now here

इसी तरह का एक साइड बार हमें यहां पर बनाना है कि अगर यहां पर साइड बार ओपन होगा तो ये पूरा एरिया इतना इतना विड्थ यहां पर दिखाई लेगा। यहां पर साइड बार में साइड बार हमारा और अगर साइड बार यहां पर क्लोज होगा तो केवल इतनी विड्थ यहां पर लेगा जिसमें हमारे आइकंस दिखाई दें। ठीक है? तो इस तरह से एक साइड बार हम यहां पर

बनाना चाहते हैं। और सबसे पहले यहां पर हम क्या करते हैं? इसको क्लास नेम देते हैं। पहले हम यहां पर डेस्कटॉप के अपने डेस्कटॉप के लिए यहां पर साइड बार बना रहे हैं। और जैसे ही हमारा डेस्कटॉप के लिए साइड बार बन जाएगा उसके बाद हम यहां पर बनाएंगे साइड बार अपने किसके लिए? अपने मोबाइल वाले के लिए। ठीक है? अभी यहां पर

We are creating it for desktop. And basically, we do not need to do these things separately for the mobile version. What we will create here is a sidebar. We will provide the same sidebar to it. However, we will make some things different here. For example, we will place a hamburger icon there. By clicking on it, a sidebar will come out.

It will have a cut symbol. By cutting on it, it will go back inside the mobile. Okay? So we will do something in this way. First, let's give it a class name here. So understand one thing that we need to keep it hidden on small devices. I mean, our desktop version of the sidebar will not be visible on small devices.

So our desktop sidebar will be visible on mid and large devices. We will flex it inside mid here so that it will be visible on mid and large devices.

Meaning, if the width here is more than 68 pixels, then it will be visible in all devices that have a width greater than that. It will remain hidden in others because we will provide a separate sidebar here for small and mobile devices.

We will fix it at the top with zero left and zero height. The height will remain as long as it stays on the screen, and we will set the background to white here. We make the background color white and give a border.

We will give the border a black color with some 8% transparency, and we will flex it into a column so that everything comes inside the sidebar from top to bottom. So we will flex it into a column, and set the Z-index to 40 so that our sidebar appears on top. We will hide the overflow here.

Now we will provide some animations inside it. We will use the animation property like this, and we also write the animation here like this. And we will add width to it like this. Okay? And we will provide the width in such a way that if our sidebar is true here.

Okay? Meaning, if our sidebar is true here, then what do we need to do here? Then we will provide the width of about 260 here. And if it is false, then we will give 72 width here. And we will also give the transition property inside it.

The duration will be set to 0.5 here. Ease and ease-in-out here so that it transitions smoothly inside and outside. Okay? And the duration will be in 0.25 seconds when we click on the button, during which this will move inside and outside. Okay? This is what we have given so far. Now, we need to write what?

We will create a component inside this. We will create it above here. We will put that component here. Okay? Inside which there will be all the data of the sidebar. What icons are being used inside the sidebar? What things are being used? How many nav links are we using?

Where is our logout button? Okay? So we will create all this inside it. So we create a component above. We will manage things inside that component. So here we write a cost like this and create a component under the name Inner. Okay? This is how we start creating a component.

And we create a simple div inside it. Something like this. Okay? And now we will manage the elements inside it. We will place this Inner inside here. So everything we manage inside Inner will keep creating inside our sidebar. Okay? So we will do some of this here. So first, we give this div a class name to this inner one, and as we make changes inside it, it will automatically change inside.

Okay? So our main div here will be flexed as a flex column. We set the height to full. After that, we again create a div.

that we will handle the rest inside it. And we will give some CSS inside it. But here we will provide CSS based on the condition that if the sidebar is open, then it will have different CSS. If the sidebar is closed here, then the CSS will be different. Okay? So let's add CSS inside it. Look at it this way.

So first we are assigning this with a condition. So here we placed a backtick with curly braces and give some padding of three pixels here. And we set the height to about 42 pixels and we provide a bottom border here and the border is something black at 8%.

Set the transparency and shrink it to zero this way and we set flex to center items. Now how is justify-between and justify-center being provided here? So if here let's say our sidebar is open, if that is true for us, then justify-between will be applied.

Okay? If the sidebar is closed here, then basically nothing will happen around here. Okay? It means there will be an icon here and alongside it will be our icon. It will say "Fresh AI" and along with it, there will be an icon for our sidebar so they will come beside each other. Okay? When our sidebar is open and.

As soon as the sidebar closes here meaning that our sidebar is not open, then here it will show just one icon in the center, so it should come to the center. Okay? And we need to keep the sidebar open initially. So for this, we do one thing here that we set our sidebar to be false by default.

We keep it true by default. Okay? This way, our sidebar will remain open initially. And as soon as it is clicked, then we will set it to false. So we do this here. Okay? By default, it will remain true. But the mobile version will be false by default. This thing.

So we have done some work here. Now let's do things inside this. So now here we are creating a div with a condition that if our sidebar is open. Okay? Or we add an "and" here this way. Then we will show a div here. Okay? And this div will be like this in that it will contain.

our icon for "Fresh AI" and secondly it will have "Fresh AI" written in it. Okay? And this "Fresh AI" will only be visible when the value of our sidebar open is true. Okay? Only then will we give it a class name. We will do some things inside it. Okay? Otherwise, if our sidebar.

is closed. Okay? Or our sidebar is inside mobile, then we will show an icon for the sidebar. Clicking on it, we will open or close our sidebar. Okay? So this is something we will do. First, we set a condition here to show this div. Okay? When our sidebar is open.

then we need to show this div. Okay? This way and we give it class names, etc. But all this work we are doing is inside this div. Okay? So we do this here. This way flex items center gap is around 2.5 and now what do we need to do inside it.

We need to create a div that will contain our icon and a span where "Fresh AI" will be written. So we write it here this way. We write "Fresh AI". And now inside this, first, we give some CSS. And we will use an icon inside it. Okay? That same RT that was our.

AI icon, we added our Fresh AI icon. We will add that same icon art inside it. Okay? We add some class names inside it. Width seven height seven rounded large we set it. We give it a background color here of black. Flex items center.

Justify center and shrink it to zero. This way, it will not shrink. And we give it a shadow of zero for pixels and 14 pixels RGB in some gray color. Now we can add that icon. So what was the name of that icon? It was our G.I. G.I. artificial something like that. We write G.I.

Artificial High was the name of our icon. We will place this icon here and give it a size of 19, and its color will be set to white here. So let's write it like this, color, and set the color like this to white. Okay? And our icon has been imported above because we wrote it directly here.

So we clicked enter and our import is ready above. Okay? And we need to give this span a class name. Then we will check how it looks. We will give it some class names here. The font will be set to extra bold. The text will be slightly smaller here. Tracking some.

The text will be given a black color. We will set the whitespace to no-wrap here. Along with this, we will create a motion span to add some animation here. What type of animation will we add? It will come from the left side to the right side. Okay?

We will add some animation in this way. So we will add the initial animate transition property. Within it, we will define the initial animate and transition property such that its opacity will be zero initially. And it will be at about -6 in the x direction.

This means it will be to the right side. As it comes from the right, where will it go? It will come to this left side. It will come from the right to the left and animate with opacity increasing to one, meaning it will come from the right to the left, and in how much duration? Within 0.15.

It will be visible in seconds. If I go here, then you will see our side bar has a border set. And first of all, you will see that it says 'Fresher' here. If I refresh this, let's refresh for a second, it will come from the left side to the right.

We might have given it a minus value, right? So it will go from here -6 to 0, to the right side. Okay, and if we refresh it, then look, it's coming from this side here.

So this much work has been done here inside this div, so this div we added where we had given a bottom border. Look here, we provided a bottom border like this, so this bottom border you are seeing is from this div; it is showing here.

Okay? And the border that we have on the right side, where did we give that? We gave it here. Look, the border is given here, a black border on the right side like this, which we have given in the main area of our sidebar, and within which we are changing things.

Now first, we create a dip. Where do we need to do what? We need to place a sidebar icon inside a motion button. By clicking on it, we will open and close the sidebar. Okay? Like this. If I go here and add some class names inside it like this.

So we dive in and add some class names inside it. We will give it flex item center gap of about 1.5 here. Or we will do one thing. We don't need to give a gap here. So we will remove the gap from it because only one button will come inside it. Let’s give it like this.

And now we create a motion button here like this. We create a motion.button here. Like this. Okay? Now we will give this button some class names. So we will give it like this. First of all, this motion button will be hidden on small devices.

In the medium and large screens, it will be flex, so it won't be visible on small. Okay? And the text will be slightly black; when made transparent by 30%, the text will darken to black. Like this, it will become dark black. Okay? We are giving transition colors because.

It is being hovered over here. And we set shrink to zero. Now we need to set some while hover and while tap properties inside it. Along with that, on clicking, we need to manage our set sidebar such that if it is open, it will close. If it is closed, it will open.

It will go. Alright? It means true or false, our toggle will be on. We do it this way. First, we set the on-click here in this way. Upon clicking, we write here with the callback that we will toggle the value of the set sidebar here. Alright? So we write not sidebar here.

In this way. Alright? This is something. Now, we need to add a sidebar icon inside this. So here I am searching for the FI sidebar, which will come like this. Look, and if we click on this, it will also get imported up. Alright? First, I will give it a size here. We set the size to about 15 here. Alright.

Is it? And this sidebar has also been imported above. Look, this is done. Alright? So we provide it this way. And along with this, we add some while and while tap properties for the animation. So we apply the same properties for while hover. Its scale will be about 1.1. And while when you tap on it,

its scale will be slightly 1.0.95 here. Alright? In this way, and we copy a same button that we have. We copy like this and write it again here, but now this button will be for what? That will be our hidden in the mid.

Alright? It won't be flex in the mid. Our hidden will be in the mid. Meaning that the sidebar we are creating here, the icon we are providing here, where will that icon be visible? That icon will be shown in our mobile version.

It will be displayed. So here upon clicking, we write mobile open like this. So we set not mobile open here. Meaning that upon clicking this, we will open and close the mobile sidebar we create. Alright? Upon clicking this button because it is hidden in the mid.

Meaning that it will be visible in small devices like this. Alright? So if we go here. Just a second, here we go this way and you can see a sidebar icon has been shown to us. Alright? And if I make it smaller, then here you will see we currently aren't showing that sidebar. So here things are not visible.

When we create our mobile sidebar, then this icon will be visible. Alright? But we've already placed an icon inside it. Alright? If it is mobile, then it will be visible. Alright? So this is something of ours. Upon clicking it, you will see that it has gone inward.

Now it has come out. It went inside. It has come out. In this way. So we have created a sidebar here. Alright? You can see our sidebar in this way. Upon clicking it, our open-close action is also happening. Alright? Now let's move ahead. And this much work.

Is complete. Look, this dip of ours inside which we were justifying between the two elements, we were providing something here. Alright? And we were giving a border bottom here. This dip's work is completed. Now after this, let's move ahead.

Alright? So in this way, we've seen that we go outside these two dips and create a new dip ourselves. Alright? And we give this some class name here. We will add some class names, etc. inside it. And inside this, we will create our interview button. Alright? So we give this dip some class name here. In this way, we set padding as

about 2.5, padding top as about three, padding bottom as about 1.5 and shrink to zero. And we create a motion button here. I write here in this way a motion dot button. Alright? In this way, we create a motion dot button and we will implement things inside it. First of all,

we give this some class name here. Inside it, we give some class names like this. We set its width to fill and make it a flex item. Center gap to about two. Background color here to black, text to white, font to semi-bold, round.

End large. Alright? Padding transition all and shadow inside it to zero, four pixels, fourteen pixels in RGB to give a black color here. Gray color, and while applying, its background will be slightly here.

It will turn gray. Alright? Now here we have another condition that we impose, that if our sidebar is open here, then it will have some padding of 2.5 px; otherwise, what will happen? We will set the padding to zero in px and justify it to center. What will happen by justifying it to center?

Here, we are going to do two things inside it. Alright? Look, it is provided as a flex item and justify center this way. What does this mean? We are going to do two things inside it. First, we will place a plus icon here, and second, we will write inside the text 'Create Interview'. If the sidebar is open here.

Then we will have two things here. One will be the plus icon and the other will be 'Create Interview'. So those will be adjacent to each other, which will seem to have a gap of about two. But as soon as our sidebar closes here, first of all, we will not see the text 'Create Interview' here. So that's why we want our plus icon.

to be displayed in the center. For that, we are justifying it center here and setting it to zero in px. Alright? So now let me do some things inside it first. Then you will understand better. First, let's add an icon here, and also give it some animation properties.

So first of all, we will add some while hover and while tap inside it. On hovering, we increase its scale to 1.03, and on tapping, we reduce the scale to a little bit, 0.97, and on clicking this. So we set up on click like this. And on this,

what will we do when we click? We had brought on interview view in on new interview. This is what we were bringing up where we were navigating to the interview page. So here we can write on new interview. Alright? This way, on clicking this. Now after this, we move ahead.

Let me format this a bit. Alright? Now we move a bit further and add icons inside it. So now I will place an FI plus icon here. So we write FI plus. This will import up for us. Let's click on this. So this,

is how we can import icons from react icons. So it should be imported up. We set the size to about 14 here. Alright? This way, and we give it some class name. And in the class name, we handle its shrink, so we set its shrink here to zero.

Alright? We set the shrink to zero here. After that, we impose a condition here that if our sidebar is open here. Then what do we need to do? When the sidebar is open. Then here we will show our button. Alright? It means we will show a motion span. So here,

we write motion dot span this way. And alright? And we add an and here. What does this mean? If our sidebar is open, true, then a motion span will be added here. Alright? This way, and inside this motion span, first of all, we give some class names. And what do we write inside it? So,

inside this, we first write 'Create Interview'. This way, we write 'Create Interview'. And we give this span some class name. Here we assign text extra small white space no wrap, and we use some properties inside for animation. So in initial here,

its opacity will be zero, alright? And animated to change its opacity to one like this. We will set its opacity to one here. And along with this, we are going to add another property inside it, so let me wrap this portion, which is our area. So here we have a property for animation called animate presence, which will come from motion react. Look, I will push this up. So we will wrap it with animate presence from motion react. So we cut this and this motion span we created.

होता है एक प्रॉपर्टी होती है एनिमेशन की हमारे पास एनिमेट अ प्रेजेंस जो कि हमारा मोशन रिएक्ट से आएगी। देखो इसको जरा मैं ऊपर करता हूं। तो मोशन रिएक्ट से एक आ रही है हमारे पास एनिमेट प्रेजेंस। इस इससे रैप कर देते हैं। किसको? अपने इसको कट करते हैं और इस जो मोशन स्पैन हमने बनाया

Let's wrap this up. Okay? We'll wrap this with Animate Presence. Now what can we do inside it? There’s an exit property within it. Which means that when our sidebar closes again here, at the time of exit, what can we do here? We will... 

reset its opacity back to zero for a second. Okay? In this way, and how long will it last? So we also add a transition for that. And within the transition, there’s a duration, we add like this. Okay? So we give a duration... 

to this 0.13 here. Okay? Like this. Now we can only use this exit property when our component here, meaning whatever element or div is wrapped with Animate Presence if wrapped with Animate Presence, then here... 

we can use an exit property. Okay? And we used this exit property so that as soon as we open it, its opacity becomes one, so that first it disappears, then gradually it shows up. It will show up in 0.3 seconds. Just like that, as soon as we exit... 

it, slowly it will disappear. Okay? Okay? That's why we need to add it here like this. If I go here, you will see that our button is currently closed here. And if I click on it, we have navigated to Slash Interview. Let's go back. And look, as soon as we come here, this... 

has opened. Like this, and if I close it, it has disappeared, and this has come back. Look, it's coming like this. Okay? Here the plus icon is coming to us. Okay? So we’ve made some things here. Now let’s move on. We create a section for agents here... 

where we will add new items for agents. So let's do this work. So this much work is complete here. This was our motion button, and our dip has completed its work. Now let's come down. Look, which dip's work is complete? So the one where a button was coming, right? This one... 

Our create interview is finished. Now we need to create a motion paragraph here that will have something written about our agents. Okay? So let's add that. Okay? And we will also wrap this with Animate Presence. Okay... 

And when do we need to show it? When the value of our sidebar open is true, then we need to show it. Okay? And let’s wrap this whole thing with Animate Presence so that we can also use the exit property inside it. Okay? So let’s write this like this... 

Animate Presence and let's wrap it all like this. Let’s cut it like this and place it underneath. Okay? So this has been wrapped here. Now what animation properties do we need to give inside it? So we have to give the same animation properties that we gave to the span above. We need to give the same to it. Okay? Like this, and let me format the document here once. Okay? Is this alright? Now let’s add some class names here. Let's add them like this, class name and inside class name, what do we need to write? We need to write agents like this. Okay? That's something... Now let’s give it some class name here. Okay? So now let's give some class name to this, and here let's provide some padding of 3, padding top of 2.5, padding bottom of 1, some text of 10 pixels, and a semi-bold font, and here some wide tracking. Let's give text black score of 30 here. Okay? So here our agents are written in some gray color... 

Look, this is how the agent is written. If I close it, then our agent has disappeared. So we need to add some enabling links here. So we take an array of those enabling links and map them here below. From this, we will create three buttons here. So we go back up and... from the sidebar we place them above here.

ऐड करते हैं। और साथ में यहां पर हमें लिखना क्या है? यहां पर हमें लिखना है इस तरह से एजेंट्स। ठीक है? ये कुछ। अब इसको कुछ क्लास नेम यहां पर देते हैं। ठीक है? तो अब यहां पर इसकी क्लास नेम कुछ देते हैं इसको और यहां पर पीएस से कुछ थ्री की पैडिंग और पी पैडिंग टॉप कुछ हम इसको देते

हैं 2.5 पैडिंग बॉटम कुछ वन टेक्स्ट कुछ यहां पर 10 पिक्सल और फों्ट सेमी बोल्ट फोंट सेमी बोल्ट देते हैं और यहां पर ट्रैकिंग कुछ वाइड रेस्ट यहां पर देते हैं और टेक्स्ट ब्लैक स्कोर 30 यहां पर देते हैं। ठीक है? तो यह हमारा कुछ ग्रे कलर का यहां पर एजेंट्स यहां पर लिखा हुआ है।

देखो इस तरह का एजेंट लिखा हुआ है। अगर मैं इसको क्लज़ करता हूं, तो एजेंट हमारा हट चुका है। तो हमें कुछ नेबलिंक्स यहां पर ऐड करनी है। तो उन नेबलिंग्स की एक एरे यहां पर लेके आते हैं और उनको यहां पर मैप कराते हैं इसके नीचे। इससे कुछ तीन बटंस हम यहां पर बनाएंगे। तो यहां पर हम सबसे ऊपर जाते हैं और साइड बार से ऊपर यहां पर

We go to the side bar and what do we do here? We write a cast, a nav items, and here we create some three objects inside the array. The first object has an icon, and within the first object is an icon where the FI test file, or the fixed file icon is.

And here it is written Resume Builder, along with a path given here which is slash resume. Similarly, here is an icon for a slash roadmap. This means we have a roadmap builder. Here we have our object. There is a resume scorer. A resume scorer is present here.

Okay? So let's do one thing, let's write this one above and the other one below. Okay? This means first we write those resumes above. The rest, the roadmap, we write a little down so we have added some here. And along with that, what do we do here? I will import these above as well.

So if I write here in this way file test, then it will be imported above for us. Okay? And if I write the FI star here in this way, then it will also be imported above for us. Similarly, we write map in this way so that it gets imported above too. So all our icons and such have been imported.

Okay? So it won't be visible here yet because we first have to place them. Okay? And where do we place them? Below this animated presence, where we created a motion paragraph. Just below that, we can create a nav here. So I will write a nav here like this.

Let's take a second. We write a nav like this and give this nav some class name here. We will map our nav items inside it. Okay? So here we do something simple. We make it flex, flex column. Set the gap to about 0.5 and padding to 2.5 px and flex to 1. Okay? And now first.

We will map our nav items here. We will simply place them here. Dot map like this. One second, it needs to be written inside curly braces. One second, let’s remove it from here and write inside curly braces, nav items.

We write and here we will simply place map inside and take one nav and a comma here, take an index this way. Okay? And we take nav. Or we can also take item. Okay? So we will take nav. Alright? So in this way.

Now what do we do? We add a button. We create a motion.button here. Place motion.button here. Okay? Like this, and we give it some class name and some properties of animations inside it. So first of all, we will give it a key here. We give the index inside the key.

This means that as many items as we have in the nav items, that many buttons will be created here. Okay? After that, we will give it some class names. So inside this, we will give class name like this. Okay? I mean with sidebar open we give class name here.

And how will we give this? We will make it flex item center, set the gap to about 2 to 2.5, rounded large padding 2, and its transition all tracks as small font medium, and after that now if the sidebar is open here, then simple padding of 2.5 will come.

If the sidebar is not open here, then we will set the padding to zero, which we have also done before. Okay? And justify center so that what will happen here? The icons that are in the center will come to the center. If our sidebar is not open here. If the sidebar is open here, then they will take our gap. We will have a span and there will be a gap of 2.5 between the icons.

Alright? Now we also need to add on click inside this. Before this, we also give some animations inside it. Inside this, we will give some here like while hover, and we give a transition.

Okay? So while hover and transition, we give animation properties here. So if we need to hover in the x direction here. This means that if the sidebar is open, then what will happen? Our button in the x direction will get a hover effect.

It will be. Is that okay? It should be in the x direction, and if not, it will become zero here. Is that okay? In hover and transition, we give a little here 0.13. Something like this. Is that okay? And this way we apply the properties of hover inside it. Basically, when do we need to hover it? When the side

bar opens. Then on hovering here, we will give it something three in the x direction. Is that okay? And we've already told you the class name. How are we going to apply it? Now, we will add one for on. So what do we do on applying on click? We need to navigate it on clicking. And

where do we need to navigate? So first, let's define a navigate inside it for a second. Is that okay? So we go here. So we go up. And first, we put a navigate here. This way, I write cost navigate equal to. Here we write.

We write useNavigate. UseNavigate. It's not importing this way from the top, so let's import it. If it's not directly importing, we simply write it useNavigate useNavigate and this.

Where will it come from? It will come from our React Router DOM. So let’s write React Router DOM here. Is that okay? This will come to us. And we have already applied navigate. So now we also apply this navigate here. So we go here and now we put navigate after on click. And

where do we need to navigate? So the items inside our nav items mean that the object we have inside it has a path here, meaning we need to navigate this to nav.path. Is that okay? Because we have separated it here by nav.

So we simply write it this way. We can write it like this here. Simply, we give it nav.dot and path just like this. Is that okay? Just one second, we need to write dot here. So this will navigate us to nav.path. And how will things appear here?

First, what do we do here? Let’s also manage the rest of the things here. For example, we will put our icon here. Is that okay? And whatever our title is, we will also put it here. Is that okay? What is our title? Our level is. We will put the icon and level. Is that okay? We will put these two here.

Is that okay? So here we create a simple span. We take a span here like this. And what do we need to write inside this span? We need to write the icon in this way here. And along with this, we give it some class names and here.

we write shrink here, and we set the shrink to zero here. Is that okay? We do something here. After that, we put a different condition that if the sidebar is open, if our end is true, then we need to show this span here.

So here we write span like this. Is that okay? This span needs to be shown, and what will be inside the span? So inside this span, there will be whatever our nav.label is. For one second, we write level here. This way, our label will be here. Now we give this span some class names. Is that okay? So

we simply set its white space to no white space, no wrap here. Is that okay? This way, and if I go here, then for one second, let’s refresh this once. Yes, now it’s okay, and let’s remove this. So this way, you will see that there are these three things appearing here.

Is that okay? This way, and let's do something. It seems a little too dark. So let's lighten these a little bit here. And see, on hovering over them, they are going in the x direction like this. Is that okay? Going like this. So we add some properties like this on hover. So on hovering here, it should also have a background. So we go here, and we do some other things in its CSS.

प्रॉपर्टी वगैरह ऐड करते हैं। इस तरह से कि इस पे होबा करें। तो उस पे यहां पर बैकग्राउंड भी लग जाए। तो यहां पर जाते हैं और यह जो हमारे यहां पर तो यहां पर एक काम करते हैं। इसकी सीएसएस में हम यहां पर कुछ और चीजें करते हैं। जैसे कि हम यहां पर इसको टेक्स्ट कुछ यहां पर ब्लैक कर

They provide. 45% transparent and when hovered, the text here becomes some black type. And on hover, they place a background behind it. So if we go here, you will be able to see it coming like this. Okay? See it's coming like this.

Things are happening here when doing this. And we place the cursor pointer here. The same cursor pointer is also placed on this button here. So I write the cursor here like this and place P, then we copy this cursor pointer from here. And where do we want to place the same?

Do we have to place it inside this? So we also write it here like this cursor pointer. And the button that has a sidebar, we also place the same cursor pointer here. And we place a cursor pointer below this as well. Like this. Okay? We have done some of this here. And

If we go back here again, then see the cursor pointer has been placed on them. The same cursor pointer is here as well. And as soon as their color is light here, and when we hover over them, first of all, they are coming in the X direction, and along with that their color

White, their background color has turned gray here. And their color is turning dark here. See, and as soon as we click on them like we clicked on the resume one, we navigated to slash resume. Clicking on the scorer led us to navigate to slash scorer.

And when we clicked on this, we navigated to the page with the roadmap. Okay? So we will create all these pages later. First, we have already placed them. Okay? Now, our work here is complete. Now for the footer work, we will map one of our interview coins here and one user data and a

log out button we will place. That's all the work that remains. You can do more work here. Then afterwards we will create our mobile nav here. Okay? And let's do one more thing. Like if we click on them like this, then they are navigating to our second page. So here we have the mobile nav, we will also do that here.

When we click on them, our mobile open nav will also close simultaneously. Okay? So look, we have added this on click here. So in this way, we will write it inside the curly braces as well and write it here with curly braces. Along with that, we will

make our set mobile open false again. Okay? So we are creating this. So the inner part we are creating for both of us. We are also creating it for our sidebar in the dashboard. For the desktop sidebar as well, and along with that, we are creating it for our small devices, which means for our mobile.

So, if we click on any new item, we need to close our mobile sidebar again. Okay? Similarly, we had also created a button for the mobile sidebar, a sidebar icon. Okay? So we are making these two for both of us.

Okay? The inner one so that we can use them anywhere. We will put the inner so that whatever data is inside can be used in any sidebar. Okay? So this is easy because we often have to create sidebars, we have to create different sidebars for our home mobile and different sidebars for desktop.

So what did we do? We created the data inside in a separate component. Now wherever we need to use it, we will use it in the desktop sidebar and we will use it in the mobile sidebar. Okay? Different. So we have done some of this here. Now we go here and our

so much work is complete. Now what are we going to create? Now we will create our last footer area. Okay? So this much work is done for us. So our nav is already placed here. And see, we had given flex one to the nav here. So this entire area will cover our layout. Now after this.

Whatever we divide under this will show us below. Okay? This means that everything will be visible in the footer. Because what has it done? Our entire area has been covered here by our Snap. Okay? The upper part. Now whatever comes will come at the very bottom. Okay? So let's add a div here in this way and this div.

Let's give some class names. What will be inside this div? So we are creating this div for our interview coins. So here I will write coins like this and we comment it out. Okay? So we are creating this for our coins. We give it a border top.

Some black here, 8% transparent padding, shrink 2.5 to zero. Okay? In this way. Now we will do things inside it and if I go here, you will be able to see that a border has been set at the bottom side here. It may look less now. As we work inside it, you will see more.

So a type of border has been set below and it has taken our flex one, covering this area. So it has covered this entire area here and in the last, everything will be our last. Okay? Now we will put a condition inside this dip.

If our sidebar is open here, then we will show the motion div here. Okay? When our sidebar is open, we will show this. Okay? And basically, what will we write inside this motion div? We will write how many interview points we have. So we give it some class names.

First, we group it. We make it flex. We set cursor pointer, center items, and justify between, so that our data comes next to each other. Okay? This means that on one side, there will be an interview point written. On one side, there will be our plus icon.

Okay? We give some gap of 2.5. Some rounded larger border. Border some white 10% transparent. Background color is made black here 90% transparent. Backdrop filter will be blurred at two excel. This means that.

We will give a glass finish here. Okay? And we give some 2.5 padding from PX. From PY, we give a bottom margin of 1.5 and 2.5, and transition all will change the border to white at 20% transparent and shadow to zero pixels 8.

Pixels 24 pixels in RGB with some black color. Okay? Now we need to write everything inside it. Okay? And one more thing is that we will also wrap it in an animated presence so that we can use some exit properties inside it. So let's go down. Here we set it.

And now what do we do inside this? We apply some animation here. Okay? So we will apply this particular animation. Here, the initial animate exit and the transition that we just applied in agent format, we will apply the same here like this. Okay?

And we will format it too. Okay? So in this way, it will come and let's do it like this for a while. Thus, we have done this much work here. Now we will work on things inside it. Inside which? You have to add one on click and one on one second and here. So here, using on click, what do we need to do?

We need to navigate to a pricing page. So here we write navigate. And where to navigate? So we will navigate it to slash pricing page like this. Okay? We will navigate to the pricing page. So we haven't created the pricing page yet. When we create it, we will use that same route with slash pricing.

So this will navigate to the pricing page. Now let's start doing things here. Here we add some coin icon. Then we write interview coins and after that, we display the user’s interview coins here.

How many user interview coins there are. Okay? And we will add a plus icon such that when clicked, we will navigate to the pricing page, or by clicking any of these buttons, we can also navigate. Okay? Now let's work on things inside it. So we make a dip inside which we have some three.

Things will come to us. First, our icon will come. Secondly, the interview coins we have written will also be written here along with the interview coins for all the users. So we will do a flex items enter gap of about 1.5 here. Now, inside this, we need to first place an icon. Okay? So one

icon we have is called BS Stars. So we write stars here like this. So this is our icon. We need to import this. So let's do one thing. We go to React Icons. One second. Look, something is coming up. We will fix this now. First of all, I write

I write like this here in React icons and we bring in an icon. We search for React icons. So this is their official getting up website. So we go here, and I write BS Star here like this. So BS Star is not found. Star

Let's write. Or let's do one thing. Let's write something with a coins icon here. The best. So we bring in some coins icon. So this is our coins icon here. Let's copy it from here. Okay? Like this. So let's import it here. Somewhere on top

Let’s import it here on top. Like this, and this is our GI icon. So let's cut it from here and add a comma next to it, and import it right here. Okay? And we remove this from here. And along with this, we do it like this I copy and go here like this

and we will place it here. Okay? Okay? And we will give it some size here. Let's set the size to about 13 here. And we will give it some class name here. Okay? So we add some class name here. So inside this, we set it to test yellow about 500 and string zero. So

let's see, if a coin icon has been placed here. Look, a coin icon has been placed here like this. Okay? Now below this, we again create a div. And we don't make this entire div below this; we make it inside this same div. Let's create a div. And we give this div some class name

like this. We give it a flex flex column. And inside it, we will have two spans. One span will come which will have written in it like interview coin. Here we write like this that the interview coins will be written here. Okay? And again we will create one span here like this which will have what? We add curly braces here

And for our user, the dot that is here for interview coin, we write it here like this. Interview interview coin will be shown here. If there is a user, then we need to place the dots for the interview coin here. Okay? Like this and let’s give it a class name. So we give it a class name. Test

Some nine pixel uppercase tracking some white dash. We give this. And here we set it as test white 40% transparent and font we give it some medium. And now we will also give this scan some class name here. We give it test some extra small font, some bold and test some white. Now if

we go here, you will see it says interview coins and here it says 150 something. Okay? Like this and let's do one thing; we also make the icon a bit bigger. And the icon we are using here, we change it from 30 to 15 instead of 13. Okay? So now this is somewhat fine

Now here we have written some interview coins. Now we add a plus icon here. Okay? So we go here and look this is one div that became where we were providing flex items justify between so that our things come next to each other. So

inside this, one div has become ours. Now let’s make a second div that will allow these to go left and right. Okay? And I give it a class name here like this: flex item center justify center. And now inside this, we will use an icon like this BS and so here maybe our BS icon is.

React icons have been removed. Because of this, we are not finding the icon. So, let me go back here and if I search for the plus icon here... Let's search for the plus icon here, and we want a circle-shaped plus here. Something like this is what we need here for the plus.

We can copy this icon from here, or the FA circle plus is its name, so let's try writing it once. Alright? So here I write FA circle, and then we write FA plus circle here for just a second. So for just a second, I will import it now.

And we will place it here like this. And we will use it where? So we will copy it from here and use it here like this. And we can close it like this. Okay? And we will give it some size here. Let's set its size to 16.

And we will also add some class names here. Along with that, we will set the text to some byte 70%, transfer and transition transform duration to 200, and on group hover, its scale will be 1.0 and will go to 110. So if I go here and...

...go here. If I hover anywhere over the whole group, it will automatically hover over this. It’s happening here. By clicking on it, we are now navigating to the pricing page. So we have created our interview coins area here. Now, let's move down.

And now we will create an area for our user's data here. Where the user's name will be, their email will be. Along with that, there will be a log out icon here, and a type of avatar here in which the first letter of the user's name will show. So let’s do that.

Now let's go down under this animate presence and create a div. Alright? This div will basically contain everything inside it. Basically, this div of ours will have all these things. But this is a separate dip, this was a separate motion dip of ours. Now we will create a separate dip.

Here below it. Okay? And we will add some class names inside it. Something like flex item center justify center. And we will not write it this way. Let's write it with curly braces and backticks. Because we will add a small property inside it.

Okay? Here we do one more thing with the dollar sign, which is that if our sidebar is open and if that is true, it means that our sidebar is open, so we don’t need to do anything then. But if our sidebar is not open, then we will justify center here. Alright?

So that the icon, which is our avatar, will come in the middle here. Alright? So now let's do one thing. Let's place our avatar icon here. Now, alright? So, we create a div here. We will place the avatar icon inside it. Let’s give it a class name.

So we will make its width 7, height 7, and rounded full, meaning our circle will have a width and height of 7. The background color will be black. Flex item center justify center will be set to zero. Now inside it, we will take a span, for which we will give some class name and inside the span, we will take the user's name.

Alright? Now let's see how we will take that. Before that, let's give a class name to it. So, let's set the text to white. The font will be bold and the text will be here 10 pixels. Now we have to write the first letter of the user's name inside it.

And if there is something after space here, like Ankur Sahu, then here after Ankur’s A, we will take the first letter after this space, which will be S, and we will put its S here. Meaning, AS will come here. So for that, I will do one thing.

Okay? And I will go up here and below it I write const avatar equal to setting a condition here like this. And we will set a condition that if user.name is available to us. Okay? We write it like this that if user.name is available to us, then we put a question mark here.

We place a mark. What do we need to do? And if it's not here, like if it isn't here, we can simply write it here like this. Right? But if it is, then we have some things to do here. So we will do some things like this here. So if we understand this a bit, first we have user data dot name dot.

If split is somewhere here like this, there is a space in between. So what will we do here? We will map it with different n. n means that you can understand this like there are Ankur and Sahu. Right? So there are two names here, two things. There is a space between them. This means.

What does it mean? We have split it into two parts. Right? Through the space. One is done with Ankur and one has been separated into Sahu. Now their n's zero index means Ankur's A and S is for Sahu, so we have split it and joined them together.

Meaning we have joined A and S together. We have removed the space between them here, converted them into uppercase and sliced it here at 0 and 2. Meaning if there were three names like one middle name, one last name, and one first name, then it would take the first and second names and not the third because we only need to show two letters.

So that's what we did. First, we split the username into two parts and then joined their first letters together, changed them to uppercase, and sliced them.

Here, if there are more than two letters, it will only take two letters, and if the user's data name is not here, then it will simply take just U alone. Right? Now where do we have to place this avatar? So we need to place this avatar here with curly braces.

We write avatar like this. Right? If I go here, then it shows A because here Ankur's name has A. There is only Ankur. After that, there are some virtual courses. So here his name is only Ankur. So it shows A like this. Now we write his name and email after this and place a logout icon here. So our work is done here.

Right? Now what do we need to do next? After this, this div's work completes. We come out of it and first of all, we place an animated presence because now here.

We will also apply the exit property here. And in which will we apply the exit property? Before that, let me do one thing. I will set a condition here that if our sidebar open here is true. Right? Then we need to do some things here. First, let’s write this way. We need to do two things here.

First, we have to take a motion div, so let's write here like this motion dot div and along with this, we will take a motion dot button as well. Right? So we take these two things here. Let’s take the motion div first. We give it a class name here and same for this.

Let’s write it as a div here like this. Right? Let's also take this as a div here. And we give it a class name. So we make it flex. We justify the simple item to center between. And we do something like this. Now we give this div some class names here.

So we provide the class name and both properties for animation together. So we give these some here. Let me format this a bit. So here in initial, opacity zero, animate, opacity one, and upon exit, opacity zero. And here.

We make the class name flash one. The main width we set to zero. Right? Now inside this, what do we need to write? Let’s write that. So inside this, we need to show two paragraphs here. We format this again. And the first paragraph is having its text here.

in black. The text size is 11 pixels font weight and we are giving it truncate. And what do we put inside? We write the user’s name. Right? What does truncate mean here? It means that three properties are added. One overflow hidden text.

Overflow effects are applied here and the white space is set to no wrap, which means that if the name is too long and our width is limited here, what happens is that the name, like Ankush, is partially hidden within that width, so it shows a dot dot at the end.

Similarly, we applied it with the email. We set the test to somewhat black with 30% to 35% transparency, applied a 9-pixel truncation, and added the user’s email with a default value if the user didn’t provide one, it will take user@mail.com. This was added just for safety. If we don’t have the user data, we wouldn’t even be able to access the dashboard.

If we go here, Ankush’s and his virtual course's email are being shown at the bottom. Okay? You will be able to see it. If I enlarge it a bit, let’s make it this big. Then you will see that it is shown like this. Look, Ankush and here the virtual courses are listed as 25.

We've done this much work here. Now let’s add a logout icon here. Below that, we will create a motion button. Let’s write motion.b-button this way. We need to write button; we do not write nutton. So we will write button here.

And with that, the first thing we do is give it a class name and we will place a logout icon here. Okay? Inside the class name, we will set the text to be somewhat black with 30% transparency. Upon applying, the text will turn dark black. Set the transition color margin left to auto. And inside it, we give some animation properties.

Before that, we will set an onclick feature. So we will set onclick this way. What do we need to do on click? We will specify on logout here. Okay? We will apply what we were sending from our dashboard on logout.

Then we will assign some animation properties. These are some animations, so we will give some animation properties here. We will format it. So in the initial state, the opacity will be zero, while animating the opacity will be one, and on exit, the opacity will be zero. And while it's being done, we will increase its scale.

Okay? Now what do we need to write inside? Let’s write that down. So essentially, we need to put an icon. If I search for fi logout, let’s place an FI logout icon here. Let’s give it a size of about 13.

Okay? Now if I go to this, this is how the icon appears. But it’s appearing here now. So let’s do this. Let’s separate this from the others. Let’s cut it from here. And we will write it outside this animate presence. Like this. Okay?

And we will remove the div we created here. Okay? We will also remove this div of ours. And similarly, what do we do here? First of all, we will wrap it in an animated presence. We separate it. With this, we write together. Okay? So that we have three elements. One is the avatar section, one is our name section, and one is the button section. So all three will come here separately.

Okay? We've done something here. And along with that, we will also put a condition that if our sidebar is true, then this will be shown here.

Okay? We will cut the button from here and place it above here like this. Okay? And along with that, we will format it so that they come in a line. Now, if we go back here again, look, now it has come here. At the end, we have placed it.

Look, and when we hover here, it’s turning black, and it’s darkening. If I click on this, it's still not logging out. Let’s see what the issue is for a second. Let’s open the console log. We have an excess error: server error. Let’s see what the error is. So here...

ब्लैक कलर हो रहा है और यह डार्क हो रहा है। अगर मैं इस पे क्लिक करता हूं तो अभी यह हमारा लॉगउ नहीं हो रहा है। एक सेकंड देखते हैं क्या दिक्कत आ रही है। अनंसोल लॉग ओपन करते हैं। तो एक एक्सस एरर हमारे पास आया है। सर्वर एरर हमारे पास आया है। जरा देखते हैं क्या एरर है। तो यहां पर

We go to the gateway. So, it is writing something like this at the gateway. We go to the auth. So, it is writing something here. What is coming up? Let's see. The response is not defined. It is writing here. So, there is a server error here. So, let's do one thing here. First, we go to our

controller. There is some issue in the controller here and we are going to the controller. Yes. So, we need to write request, comma, response here. This is what we forgot to write mistakenly. Just like here we wrote request, response. We have to write request, comma here.

response. Because we are using request and response here. But we had not written it. Okay? Now, let's correct it. Let's run this again. Something like this, our service has run. Let's go back and now I will remove this from here. First of all, let's reduce this.

Let's do it this way from here and okay? And now if I click on this again, we have logged out and arrived at our homepage here. Okay? So, the logout is also working correctly. Let's log in again.

So, we have logged in again. We are back here. So, our sidebar has been completely created here. Just a few more things we need to do inside this sidebar, like what needs to be done here? If this is closed, then the main area of our dashboard should take up the entire area and if it is open, then our sidebar should take this much area.

So, we need to do this here as well. Okay? Along with that, we need to ensure that if it is small devices, then if I make this smaller, look, our sidebar has disappeared. So, we also need a sidebar here for small devices. So, we need to do this work too.

So, let's do this work carefully. Okay? So, our work has been done here. Again, we go back to where our sidebar is for whom? We have built this sidebar for our large devices. Now, here again we will create a motion sidebar. Before that, we will apply an animate presence here because we are about to create.

one for our mobile. So, this will be our open-close inside-outside. Okay? This means it will go inside and outside. So, we will also add an exit property so that there is an animation while coming out, and there is also an animation while going in. So, we are going to do something like this.

Look, just like we created the sidebar for the desktop that it is going inside and outside. But here our things are still visible to us. Like the plus icon, it is showing us some things. But in the mobile view, we won’t see anything. This will be completely inside. Okay? We will only see something like this as a sidebar icon.

Only. Okay? By clicking on which, we will pull our sidebar out from the left side to the right side and upon exiting, we will bring it back inside. So, we will do all these things. Okay? So, let's create this properly. First of all, let's reduce this so that now we will see things here.

So, what do we do inside this? First, we insert a condition here to determine when to show this. So, if the mobile open here is true, then we will show this. Okay? So, again here we are creating a motion sidebar, writing motion aside like this, and now we give it some class name.

So, in the class name, we set it fixed. We set the top from 0, left from 0. We give the height and screen the same. We set the width to 280 pixels and the max width we are giving around 85 BBW.

Okay? And we set the background color to some white, border some right here, and we set the border to some black here at flex. We set flex to column. That and set 50 there. And look, the main property we need to focus on is hiding it in the middle.

It will not be visible here at mid. All devices below mid will show overflow hidden. And now, what do we need to put inside it? So, we just insert the inner that we've created above inside it. This is how we also used the inner for mobile. Okay? And also, what do we have here?

What do we do? We provide some animation properties inside it which will allow this to go in and out. Okay? So here we add properties in this way. How? First, I will format it. So initially it will stay at a minus x direction of minus 280, meaning that it...

will go inside in the x direction initially and animate to come out in the x direction from the left. And as soon as we exit it, meaning that if we cut off our mobile open, if we set it to false, then it will go back to this direction -1 280. Alright? And we set the transition duration to some 0.25.

We provide it here and we add in and out so that it smoothly goes in and out. Alright? So we add some things here. We go back up. So we return here again. This way we manage things here. If I go back here and refresh, currently its value here...

is false. Whose value? The value of our mobile open is false so it is not visible, so let's change its value to true or false. And how will we do this? We will need to do this in the dashboard, so we go inside the dashboard and see that indeed,

we have one sidebar area. After this, we will create a motion dot main area here. First, let's define motion up here, alright? We will copy this from here like this and attach it here with the dashboard. Alright? And now we create an area called motion main.

This will now be our main area. Okay? We write motion dot main here. This will be our main area. There will be a sidebar area for desktops and a main area. So you see this will be our sidebar area. Alright? Now after this,

we give it some class names. Otherwise, this sidebar area will not be visible in small devices anyway. Alright? This way, we provide it with some class names, based on conditions here. Alright? That according to our sidebar open, we will provide it here. If our sidebar is open here...

, it means that our sidebar will take that width, so after that we will give the remaining area here to the main area. Alright? And if we close the sidebar like this, then after this, that area will only take the sidebar width. The rest of the whole area will be given to the main.

This way, we give CSS to it according to conditions here. So how do we do it? Let's make some adjustments based on conditions here. First, we set it to flex one, and what will happen by setting it to flex one? This whole area will cover the remaining area after that. Alright? It will cover the entire area after the sidebar.

And we set the main height to screen. Padding x some three. Small will have padding x some four and mid here will have padding x some six. Padding y some four. Mid will have padding y some six here. We set transition all.

The duration will be some 300. Now if our sidebar is open here, then we will add a margin left in mid, meaning we are doing this in mid not in small. Why in mid? Because the sidebar area for our desktop is visible in mid. Okay? So here in mid,

we will give a margin left of some 260 pixels, meaning when the sidebar is open, it will take some 260 pixels of margin left for the main area. Alright? So that the main area is visible after the sidebar. And if that is not the case, meaning the sidebar is closed, then after 72 pixels...

We will take some main area. Is that okay? Is that okay? This is how we are doing things here. So now let's move ahead here. Let's get things into it. So now let's do one thing. Let's create a div that will be our top area. So let's write here like this top area.

And what things were there in the top area? If I show you here, I’ll show you in the image. So we are going to create a top area like this. In which there will be written ‘Overview’. Hello Ankush will be written here. There will be a symbol of ‘Hi’ here and a border below.

And in small devices, there will also be an icon with a side bar like this, and when clicking on it, we will set the value of our open mobile here to true or false, so that our mobile displays the sidebar correctly here. Is that okay? So we will do this job now. First of all, I will give it a class name.

I will give a class name here, and in the class name, we will set it to flex items, enter, justify between, margin bottom of about 5. In the middle, we will give it a margin bottom of about 6. And now we will get things into it. So again, we will create a div inside it. Is that okay? Where we will make our sidebar.

We will place the sidebar icon. So we will give it some class name, and we will set it to flex items, center, gap of about 2.5. Now what do we do inside it? Let's move ahead and get things into it. Is that okay? So we go below it and create a motion button here. We will write something like motion dot button here and inside it, we will first give it some class name.

And in the class name, we will make it hidden in the middle. Is that okay? Because this sidebar button of ours will be required in small devices so that we can click on it and set the mobile open here to true or false.

So that our mobile's sidebar will be visible, so we make it hidden in the middle; it will be visible in small devices, and the text will be somewhat black at 40%, and upon hovering, the text will become somewhat dark black. We give a transition color and add an icon inside; we write our FI sidebar; we add an icon like this.

And we give it some size here, and we set its size to about 17 here, and we also add hover and tap properties inside its button, which we always do. So upon hover, its scale here will be 1.1, and on tap, it will be about 0.95. Is that okay?

And we also need to add an on click event inside it. And upon clicking, we will manage this, no sorry, what we will manage here? We will set the value of our set mobile open here to false. So we will set its value to true here. Is that okay? This way we will set it to true.

And after that, again this work has been done. Again, we will do one more thing. We will create a motion div here, below the motion button. So I will write here like this; I need to write motion dot div, not sorry, it should be div like this. And we will first give it some animation properties inside it. Then we will do things ahead.

So we add an initial property inside it. Like animate and transition. Now let’s understand this. Initially, the opacity will be zero. In the y direction, it will be about -12. -12 means that it will stay up; it will come down from above. Is that okay? Animated, its y direction will become zero. It means it will come down from above within about 0.4 seconds.

Now after this, we will add a paragraph inside it and an H2 inside it. So, in the paragraph, we need to write overview. So I will write here like this; Overview. Is that okay?

And we give it some class name here. So we write here like this; text somewhat flag 40% transparent and text of about 11 pixels. In the middle, the text will have an extra small font, somewhat medium, margin bottom of about 5. Is that okay? Now after this, we will give some class name to H2, and for this...

Inside, we need to write something. Like, I need to write here, I need to write here like this, I need to write hello and put a comma here, we write the first letter of our name here. Okay? So how will we write that, let's see. First, we give some CSS here.

In large mid, we give the text some extra small font, somewhat bold, and we make the text black color here. Okay? And what do we do here? We give the user's first name inside this. So we write it like this inside curly braces.

So first, user.name is such that if the user's name has a space between it, it will split into two different parts. Okay? And from that, we will write the first one, the zero-th one here. So Ankur Sahu will come here. Ankur will come here writing alone. Okay? And after that,

we need to add a hi symbol here, let's do that. Okay? So here, we do one thing. We add any emoji. Okay? We add an emoji like this that shows hi. Okay? And now let's go here and see if this is coming up like this.

Overview hello Ankur, and it's coming up like this. We give a little gap in between here. We give a gap like this afterwards. And now let's go back and see it, so it’s coming up like hello Ankur overview. If we click on this, our sidebar is coming out, and clicking on this.

It goes inside. Look, okay? This way, the sidebar is coming out and going in on small devices. Okay? So this way it is coming out and going in. And if we add one more thing that if we click outside of this somewhere, like if I click somewhere outside here, then also it should go inside.

Let's do that. Okay? And this sidebar was for whom? This sidebar was for our small devices. Okay? Because we went inside the sidebar here, look here we were writing here that when mobile opens, this sidebar will come out.

It will come out from some direction x. Okay? Like this, and inside we had added one thing. Look, if we are clicking on this sidebar inside here. Look, then inside it this button is not visible to us. We are not able to see this button that we put inside because it was hidden. Our flex is in mid. It is hidden in small. But here this sidebar which we created here, this side bar icon, we can now.

see it. Okay? Look here, if I open it now, which sidebar is this? This one. This sidebar icon, this one. Look, the button that we put here is this one, this button is our that. And if we look at the last devices,

we are seeing this button. Okay? Because in this button our sidebar open is true or false. And in this one our mobile open is true or false. So as soon as we click on it, it goes back inside. Okay? Clicking on this goes outside. Clicking on this,

it goes back inside. Okay? So we've done some things here like this. And if I make it bigger like this, then our last device's sidebar shows like this. We can toggle it inside and outside. Okay? For our desktop,

for mid devices, for desktop. Okay? So we have completely built our sidebar here. Just a small task remains that this sidebar is open. Just a second. This became the second sidebar. Look if we open it like this here and if we click here somewhere.

लिए मिड डिवाइसेस के लिए डेस्कटॉप के लिए। ठीक है? तो ये कुछ हमने साइड बार यहां पर कंप्लीटली अपना बना लिया है। बस छोटा सा काम और रह गया है हमारा कि इस तरह से साइड बार ओपन है। एक सेकंड। ये दूसरा साइड बार हो गया। देखो यह अगर इस तरह से हम ओपन करते हैं यहां पर और अगर हम यहां पर कहीं

When you click outward, let it go inward. We also add a black color screen to this glass screen, and we go again inside the sidebar here. This one that we have goes to the last here. So, see, we can put a sidebar for mobile here. On top of it, we put one thing.

We do it again. We add an animated presence here, something like this. And if our mobile is open here, then we want to show this. So we add an end again like this. Now we create a div, something like this. Okay, we add a div here, sorry, we add a motion div here.

Here we write motion.div like this, and we first give some class names inside it. And we fix it in the class name. We set insert zero so that it comes to the entire page, and we set the background to slightly black, 30% transparent, and we make it 40 here, hiding it in the middle.

So it will not be visible in the middle. And we blur the backdrop filter a little, make it small. Okay? And what do we do then? When we click on this, look, if we click anywhere on it, we put onClick here. So what do we need to do on the onClick? If the set sidebar is open, we will make it false again here.

Okay? Like this, and inside this we give some properties and some animation properties. So initially, its opacity will be zero. In animation, it will change to opacity one. Upon exit, it will again become opacity zero. Okay? And then we format it. So if I go here now, you will see a black-colored screen appearing at the back. Look, it is coming like this. That screen has gone. Going back again, so a black screen has been placed here.

If I click on the side here, it goes inside too. Okay? So, when we click on the side, it also goes inside, and if we click on this button, it also goes inside. So, we have done this much work. Our sidebar is completely ready here. Now what do we need to do? First, we can create our resume builder, or we can create a resume scorer first.

So, here we will do one thing. We have created a lot of stuff on the front end for a long time. We are just focusing on the front end. To refresh our mind a bit, we will start with the backend. So here, we'll design the backend for the resume scorer.

Okay? First, we will ask the user to upload a PDF here. Then the user will upload some PDF here. We will store it in ultra. Okay? And we will analyze that PDF through our LLM using our resume agent's resume service.

We will create a large language model (LLM). Okay? And we will use groph there. With that, what we will do here? We will analyze our resume, provide a score here, and also save it in the database what our weaknesses are, what our score is, what are the points where we lack experience.

Okay? We need all this, and we need to save it in the database. And the resume that we have, which will be saved in the database, we will use the data from that resume. We will use it in our interview. We will use it in our roadmap builder. Okay? In this way.

So we will also use that resume in them. So first, what we do is we create a controller for our resume scorer. We start creating our resume service here. Then, as soon as our resume scorer is ready, we will work on our resume builder.

Okay? We will do the resume builder work after that. Then lastly, we will create our interview here. Okay? This is what we will do here. Then we will start making the roadmap builder. So first, what we do? We start working on the resume scorer.

So we need to

What will we have to do here? So for that, we will work inside our resume service. So let's create a server inside the resume service. Okay? We will do things inside that. So let's get to work on this. First, we go inside the resume and what do we do here? One.

Let's create another service. So as we have another service here. Now let's take a resume in this way. So we have come inside the resume service here. And now I will run this like this npm init. Okay? Let's run npm init here. So here.

The package name is resume. All these things will remain the same. So we have to do the exact same thing we did before. Type common js and let's say yes here. Okay? What will happen with this? This will create a package lock.json in our resume. Okay? Some packages.

have come here. So let's close the frontend for a while and let's also close the gateway for a while. Now look here, we have another resume here which contains our package.json inside the resume. Now let's start building this resume. And.

inside the service, we did many things. Now we will do things inside the resume as well. Okay? So we need to install some things inside this. First, I will clear this here. Let's move it up. Now here we install npm. First, we need to install express here because we need to create an express.

server. Then we need to use nodemon. Okay? We need to use nodemon. We need mongoose here so that we can connect to the database here. We need to use the database. Okay? Express, nodemon, mongoose. We need that here. Okay? We need ENB. After that, we need.

our multer package here because we are going to store PDFs here somewhere. So we need a multer package. The rest of the things we will install gradually. For now, we will install these things. For example, we will get a node_modules and a package-lock.json as well.

Okay? So let's install this here. So our installation is done. The node_modules and package-lock.json have arrived. And first, we create an index.js here. I write index.js like this. And now we need to do things inside this. And before that.

we set its type to module here. Okay? And we add a devscript here. Like this, and to run the devscript here we will need to do what? Through a non-kit we need to do what in the index.js where we.

are creating the server. We need to run it there. Okay? This is something we need to do. Okay? And whatever was in auth in our index, let's copy it from here. Okay? Let’s copy it like this. And we will close auth again. And paste it here.

like this. Okay? Now we will keep only what we will use. We will keep only what we will use. For example, cookie-parser and auth we don’t need. We need to import ENB. And here we won't use cookie-parser because we won’t have any cookies.

coming in here. Okay? We won’t access cookies here in the resume. Because here our session's date's session ID, will we find the user we will send? We will send from our gateway. Okay? That’s why we won’t use this here. After that, we also remove this from here and write 'Hello from the resume service. Resume service started.' So okay, the rest is all the same. We don’t have to do much because all these things are that we need to initialize an app through express. We need a port that will come from ENB. After that.

inside app.get we make a slash. Like this we make a request. And let’s also remove connect.db. When we connect the db here, we will use that. Okay? After that, we create a resume inside ENB and inside ENB we do what?

ऐप डॉट गेट के अंदर हम एक स्लैश करते हैं। इस तरह से रिक्वेस्ट करते हैं। और एक कनेक्ट डॉट डीबी भी जरा हटा देते हैं। जब हम डीबी कनेक्ट कराएंगे यहां पर तब उसका यूज़ कर लेंगे। ठीक है? उसके बाद एक हम बनाते हैं यहां पर रिज्यूे के अंदर Eenb और ENB के अंदर हम यहां पर क्या करते हैं?

Let's copy the ENB inside your auth here like this. Okay? And let’s paste it here. And the port we will take is 8000, we will take 8000. Okay? Or we can take three, whatever we need to take. So we will give 82 here and keep the Redis URL here.

And we will leave it written here. And look, within MongoDB, we will use the same database here. There’s nothing like we are creating another project for the database separately. So we will use the same database. But there was a user cluster here. Okay? So we will create different collections here. For example, one.

A collection for users will be created. A separate collection for our resume will be created. A separate collection for interviews will be created. Okay? Let’s write 'resume' here with a slash. And here what will we do? We will connect our database as well. So what do we do in 'resume' here? We create a folder.

We create a folder called config. Let's write config here for a second. Then we create another folder again, named controllers, we write controllers here. And along with that, we also create one named routes. So we create routes.

Okay? So let's create some controllers here. In config, first of all, we write this way dbjs. Okay? Let’s write dbjs like this. And just as we connected the database in this config, we do the same here by copying this way. Okay? In your auth,

it was connected through mongoose.connect where we provided a MongoDB URL. We have to do the same here. So again we go where? We will go inside this dbjs. We will just paste it here. Okay? So our database will be connected inside our connect db.

And here inside resume, there is also the MongoDB URL where we have written 'resume' with a slash so that a separate collection will be created here. Okay? And what we do here? We also import it. We make sure to listen to connect db. So that it comes from the config of this file. Okay? Not to take it from the auth file. So we will take it from here like this and we also add .js here. Okay? We have done this much work. So if we go back here.

Now what to do here? First, let’s clear it. And now here I will do npm run dev. This way. First, let me move this a bit here. Okay? Look, we do npm run dev. We start here. So,

our resume server is running on port 802 and connected db has come here with the message. Okay? So if I go here and if I write this way localhost and if I write 82 here, if I write 802 and press enter, then 'Hello from the resume service' comes up.

Okay? But we don’t want to access it this way. We need to access it through localhost 8000 API slash resume. So let’s do that here as well. Okay? So now we will access it through the gateway. We go inside the gateway. Inside the

index.js of the gateway. First, we pause the service for a while. So we go inside the gateway index.js. Like this and now what do we do here? We add one more proxy. We copy this and paste it here. And now here,

we write this way instead of the service URL, we write here resume service URL. Okay? And we provide one resume service URL here. We provide it within our ENB just like we provided another service URL. Similarly, one resume.

is given as a service URL, and within that, this will remain the same as our local http call on localhost, but here we write 82. Okay? We write 82 here like this, and here in the API resume we write this way, slash resume, and like if we request here to the 8000 API resume.

है सर्विस यूआरएल इसको देते हैं और इसके अंदर ये तो सेम रहेगा हमारा लोकल http कॉलन लोकल होस्ट बट यहां पर 82 यहां पर लिख देते हैं। ठीक है? 82 यहां पर लिख देते हैं इस तरह से और यहां पर सल एपीआई रिज्यूम में यहां पर लिखते हैं इस तरह से स्लैश रिज्यूम में और जैसे अगर हम यहां पर 8000 एपीआई रिज्यूम में रिक्वेस्ट करेंगे

So where will the request be? It will be on our resume service. Okay? So if I go here and if I write it like this, 8000 API resume and then I hit enter. Now "Hello from Resume Service" is appearing. See, it is writing hello.

From Resume Service. So we've accessed it through the gateway like this. Now we will handle the remaining parts inside this. Now our resume, the section with the resume, is connected here. So we have done this much work here with our resume service URL.

We can also access it through the gateway. Now what do we do here? Inside the resume service, we have a folder named "models" and we will start creating a model for the resume inside this. So I will write here like this, "resume.model".

JS, okay? So we write here like this and start creating a model for the resume. Okay? First, we need to import Mongoose here because we will create the schema and the model through Mongoose. So we write "const".

Resume schema. We write a resume schema here. And I also want to tell you one thing that our particular user will only upload one resume. Okay? He can upload only one resume. If he uploads another resume here, what will happen?

He will rewrite it here. Inside the resume model, it will update the user's previous resume here. Okay? It means all the fields will be updated again according to his new resume. Okay? Whatever he uploads. So we need to keep only one resume per user here. Okay?

Now for this, we will do one thing because here the user can only keep one resume at a time. His score will be visible there. Okay? And the data of that same resume can access our interview. Okay? And our roadmap can access it. If we need to upload another resume here, we will.

upload the second resume here as well. But there will be one more thing that the data of the first resume in MongoDB will be updated again. Okay? Just this much work because we need to keep only one resume for each user in the database. That's the thing. Now here we write "new mongoose.schema" and.

we write "mongoose.schema" like this. And when we do this, you will understand it better. Right now, I will just tell you that one user will have only one resume. So we put curly braces here. We set the timestamps to true, first, so that two things will get updated here. Like.

"created" will be added, "mongoDB created at" and "updated at" when this occurs for us. And after this, here we do what? We add some fields inside a schema. So I will write all the fields here first, then I will show you one by one what fields we have.

Okay? This way we will save some time. Now let's go here. So I have written all the fields here. Now one by one, what do we do? We understand these fields. First, we have a user ID. Now what is the user ID here? So this user ID will be of our current user.

Let’s write the type here. What type will it be? Okay? So this is our "mongoose.schema.type.ObjectID" which means this will be an Object ID of MongoDB representing our user ID. We set it to required.

We also keep it unique true and set its index to true. Okay? So we will store the user ID in this way and through this user ID, we will be able to access our user and access our user's resume. So this is the user.

We need the user ID. So how will we get this user's ID now? Right? Because here we don't have the user model in our resume service from which we can access our user's ID. This is within our auth service. Right? Now how will we get the user ID? So the user ID will

be received through the gateway. Right? Here at the gateway, look here, we had created a middle layer in which we are getting the complete user data inside a request.user. We are getting the complete user's session. So we will get the user ID from here through the gateway.

Where will we deliver it? We will deliver it into our resume service. This means we will send it to the resume service. Right? Because here we are accessing the resume service. This way, we are accessing it by writing app.user. So here what will we do? We will provide the user ID inside a headers.

Right? And whenever we need to use the user ID in our resume service or anywhere in the interview service, we will retrieve that ID through the headers. Right? We will do this work a little later. When

we will need the user ID here, then we will do it. For now, let's understand our resume schema. Now here in the extracted test, what is this? We are giving this type as a string and making it required true. So when we analyze our PDF here, then after that, the complete

text will be created in which all the tests will be divided here. Right? This means a complete summary type will be ready. We will store that here. Alright? So there is one PDF parser, which is our package. We will use that and extract the text from our PDF and save it inside

the extract text. Okay? And after that, there is a score field, which is given the type number with a default of zero, and here when we will analyze our resume through LLM, then after that, a score will be generated here that will provide us with a score.

We will store that here. We will keep a summary in which we are giving the type string. By default, it's an empty string. The same user name will be provided to us here. This means all the data such as our score, summary, name, email, phone,

education, skills, projects, experience, strengths, weaknesses, and missing skills that we have taken here will be what we will obtain from our LLM. It will provide us with all this data in full JSON in the response, and we will directly update it. Alright? Alright? Thus, we have obtained the score.

We need to have a summary and a name, which is of type string and is empty by default. We need to update an email whose type is here as a string, defaulting to empty, and a phone number. What is the user's education? It's here. What are the user's skills? They are here. What are the projects

of the user? After this, look where the education is, it is in our array. It is an array of strings. Because the user may have obtained education from multiple places. Right? They will have their schooling, some graduation, etc. So the user may have many skills. We will need to write them in an array.

Alright? By default, it will be an empty array. Similarly, in experience, we will take a string array type and set it to default here as well. There is a strength of our user: what is the user’s strength? Who will provide that? All these things will be provided to us by the AI that we will use here. It will give us the strengths, weaknesses, and missing skills.

Right? And in what form will it give it to us? It will provide us with an array of strings here. Here, the type for weaknesses is also an array of strings. The missing skills of the user, which we will find after analyzing our resume

, will have this type here as an array of strings. By default, it will be empty here, and there is a suggested role that will also tell us what the user’s role is and for which role they are in this resume. So we will get that role too, with its type here being a string, and by default, it will have nothing here.

The recommendations are empty which AI will provide us after analyzing our resume, and there can be many recommendations. So, there is a default empty array here. How many fields do we have? Let's take a look again. And

If you are constructing it with me, then keep writing alongside. One user ID, one extracted text, here two scores, three summaries, four names, five emails, six phones, here seven, and education eight, skills nine, projects ten, and here experience eleven, strengths here, we have some twelfth field.

And here weaknesses are thirteen, this is the thirteenth, and here missing skills, here some fourteen, and suggested roles here fifteen, and some recommendations here sixteen. So, we have a total of sixteen fields here. Is that okay? You have to write all these fields down. You need to specify their type here. Required true, what is

it? What is the default value? You have to specify all these things. So, we have created the schema here this way. Alright? Now let’s create a direct model for the resume. Alright? So, let's write cost here and in this way I will write here resume equal to here

let's apply mongoose.model here. And first of all, what do we need to give it? First of all, we need to give it a name. So, let's write resume like this, and putting in a comma, we need to add the schema here. So we write the same resume schema. So, our model will be created here and we make it export default

here. So, we will export it here. So here we make it export default and alongside we write like this resume. Now where will we be able to use this resume model? Inside our controller. Inside our resume controller. Is that okay? So we have done this much work here. So our resume model is made

now. Now what do I need to do here? First of all, what do we need from the front end? We will have to upload one resume in PDF format, which we will create through multer, and we will make a folder for uploads. We will store it there. Alright? And we will access it from there. What will we do first?

We will extract all the text through a PDF package. Alright? And we will provide the extracted text to the LLM. Alright? So what will the LLM do from there? It will prepare our summary for us. It will provide us with the scores. Our

weaknesses. All these things. It means all the fields we have, name, email, it will provide us with all. We will update all those fields inside the user model and update them inside our resume model and we will create a resume basically. Is that okay? We will do some work here

So, let’s start this work. We will start doing things inside our controller. Is that okay? So that we can send our resume from the front end and that resume gives us scores etc. completely, and saves it inside the database. So we do that work here and for that we will also need the user ID. So

what will we do through our gateway here? We will provide a user ID in the headers here. Is that okay? Let’s also do this work. First of all, here we will do one work; through our gateway, we will send a header containing a user ID.

And let’s understand how we will send it. Is that okay? So here inside the gateway, I will create a folder. We will name it utilities. So we create a folder named utilities and inside it, we create a file. Ah, look at this proxy, inside this proxy

we are giving a service URL. So we will do one thing. We will update this proxy. Is that okay? So how will we provide the user ID in a header along with this proxy? Let’s see how. Is that okay? So, here we give this a name.

Let’s write like this proxy with headers here. Alright? We will write proxy with headers dot js here. So it has been named proxy with headers. So how will we do this work? Inside the package, we have http, we have this express, we are using http proxy named

We had used a package through which we were getting a proxy here, using which we were accessing its service URL. Along with that, we will also provide a header. Okay, so let's see how we will do this. First, we will create a function here.

Let's write it like this under the name export cost a proxy with header. So we write it like this – proxy C proxy with headers. Let's write something else in this way, create another function, and take a service URL as a parameter. Like so, service URL. Okay, we are taking it this way and creating a function.

Here we create a function, and what do we need to return in it? So we need to return something like this. If we call this function, what do we need to return? Let's take a look at that. Okay? So now what will we use in its place? For this proxy, we will use proxy with headers here. Which we have created.

We will use the function we created. But first, let's return something. So we need to return through a proxy. Here we write proxy, which will come from our HTTP Express hapn HTTP HIP proxy. Okay? Now what do we need to return? Let's see that. First of all, we need to return our service URL along with this proxy.

Okay? And then what will we do here? We define headers here. How will we do that? And along with that, we need to define headers so that we can send headers along too. Okay? So what will this do? This will ensure that the proxy only currently accepts the service URL. Okay? But now, it will also take a header along with the service URL. Alright? So let's set the headers here.

So here there is a proxy request operation decoder. So this is what we will use here. And along with that, we first have to provide proxy request options inside a callback. Okay? And then we can provide things within the headers. Look, it is being written here like this. So let's do something like this. So we will have two things inside it. Look.

One of the things we will have will be the proxy. So here we will have two things inside it. For instance, we take proxy request options and another src request. Okay? And now we set a condition here using if that if src request.user is here, it means we are making a request for a user.

Okay? If it is here, then what do we have to do? Inside proxy request.options, we will set a headers. So now what do we do here? Inside this, we have proxy request options. Let's set a headers here using a dot.

So here we write headers and name the header something. So here we will write it like this: x-hpn-user-id and what will be inside it? What will the data inside it be? So the src request.user – its user ID will be what we provide here. Okay?

Here we write src request.user.user.user-id this way, so this request will match with the user ID. Okay? And then finally, we will return whom? We will return our proxy request options here.

We will return these here. Okay? So let's first understand it again how things are working here. Okay? The first thing you might not understand is how src request.user got here. Okay? Let's understand this a bit. First, understand that here we are doing one thing, that we are setting a header along with the service URL in the proxy.

Okay? If we write x-ipon-user-ip-id like this, we will get the user's ID. Okay? Wherever we write this, in any service where we use this proxy.

एक चीज यहां पर करने वाले हैं कि यहां पर हम प्रॉक्सी के साथ में सर्विस यूआरएल के साथ में एक हम हेडर और सेट करा रहे हैं। ठीक है? जिसके जिसके अंदर अगर हम इस तरह से एक्स आइपॉन यूजर आइप आईडी अगर लिखते हैं तो हमें यूजर की आईडी मिल जाएगी। ठीक है? कहीं पर भी अगर लिखते हैं किसी भी सर्विस के अंदर जहां पर हम इस प्रॉक्सी

We will use it with the header function there. Alright? So first of all, there is one proxy request option decoder inside it, and there are two options in it. The proxy request option and an SRC request. Alright? Now what is the SRC request here? So here it means that whenever a request goes to the gateway.

Whenever a request goes above, there will be some middleware working there. In between, we will add a middleware here. Look, inside index.js, before this proxy, we will use this middleware here. Where we get the user data inside request.user.

And here we will not use the proxy. Now, here we will use the proxy with headers in this way. Alright? So now this is a middleware. As soon as we request to slash API slash resume, this middleware will be called, and a user will be saved in its SRC request.

In the SRC request, a user will be saved here. Alright? In the proxy with headers, a user will be saved in its SRC request. As soon as that middleware works, the user will be retrieved. So now if we have this thing in the SRC request.

If we have the user in the SRC request, then inside the proxy request options, alright? Inside the proxy request options, in the headers, what can we do? We will store its user ID and finally return it. Alright? So that we can use it later. So inside the proxy request options.

What can we do? We can put any data inside the headers here, and we can access this data somewhere else whenever we need to use it. Alright? Wherever we will use the proxy with headers, if we have saved the headers inside the proxy request options, then we will be able to access those headers.

There in the service URL. Alright? So this is what we are doing here. Alright? I hope you have understood everything else. Now here let’s understand one thing. We have made a small update here that instead of proxy, first we added an Izat middleware here. Alright? And along with that we have.

Wrote proxy with headers here. So what will happen with the Izat middleware? Here, as soon as the Izat middleware is called, what will we get inside request.user? We will get the complete user session inside request.user. Alright? And which user session will access.

Later? Inside the proxy with headers, and the complete session will come inside the SRC request for the user. Alright? The complete session will come inside its .user, and now we will update a header in our proxy request options where we will input that user's user ID. Alright? We have done this much.

And the service URL we are taking here inside the parameters, how are we providing it? We have called this function and given it a resume URL from Pro Processby. Alright? So that a proxy return will be there with the service URL and inside.

The proxy request options, there will also be a request user's user ID. The user ID will also be there. So this is how we are doing things here, which means that whenever we call the slash API slash resume, we will get data in the headers. Alright? Alright? So this is how we will implement it. So whenever we.

Fetch this API from localhost 8000 API to resume, every time we call this API, what will happen is that we will get the user ID from the middleware within the user, and it will.

Be updated in the headers. Alright? And we can access those headers within our resume service. Alright? Because we are using proxy with headers here. Alright? So here we are adding headers along with the proxy. Just understand that we have.

We are sending a header with the proxy as well, understand? Is that clear? Just understand this much within the resume service. If we need it in the interview, we will write slash interview slash, meaning slash API slash interview here, and within that, we will use the proxy with headers, so that we can access the user's ID in our interview.

We will also be able to save it within our model. Is that clear? We will use this same process in everything else. So, you should have understood enough that this is what we were about to do. What did we do here? We just updated a user ID within the headers which we will use here in our resume.

We will be able to save it within our model because we need to save the user's ID within the resume model, so we will access it via the header and save it here. That's all the work we have done here. Do you understand? This is all the work we have done. Now what do we do here? We start creating our controller.

We will take a PDF here. We will take our file. From where? We will take it from our front end. We will have it saved in multer and parse the PDF here. This will allow us to extract our text. After extracting the text, what will we do here? We will give that text to the LLM. The LLM will score it for us. It will tell us our.

weaknesses. So, this flow that I just explained, we need to follow this flow. So we have created the model here. Now we are about to create the controller. So, what do we need to do in the controller? First, what do we need to do here? We need to create our resume inside the controller.

Is that clear? It means we will upload a file for our resume. Here we will upload the user's resume from our front end. So what will our LLM do here? It will score it for us, give a summary. It will tell us about our missing skills. It will inform us of any shortcomings and all our requirements. And here, we need to.

update these fields. Score, summary, name, email, all this stuff: phone, education, skills, etc. It means that what our LLM will do is give us all these fields at once. So we need to execute this work inside the controller. Is that clear? We will upload a PDF from our front end.

With that PDF, we have a lot of work to do. First, we need to store it so that we can keep it on our server, so whenever we need to use it, we upload it from the front end; we need to store that file in one place and then operate on it. So we have to.

store it here. For that, there is a multer package. We will use that so we can provide a destination within our resume service where we need to keep it until we use it. Is that clear? And we need to be able to delete it afterward from there. So we have to provide a destination.

What will the file name be? How will we store it? Is that clear? We will check the uploaded file to see if it is a PDF or not. Is that clear? Because we need to upload only a PDF. We will check if it is our PDF. Along with that, we will specify the size, which should not be more than 20 MB.

So all this work will be done in one multer middleware. Is that clear? We will create middleware named multer, and along with that, we will create a folder named uploads inside which we will upload that file. So we have to do this work. Is that clear? After that, we will extract the text from the PDF.

For that, we have a package called pdf-parser, which we will use. Is that clear? Then, what will we do with the text that we extract from the PDF? We will give it to the LLM. Then, what does the LLM provide us here? The LLM will then give us a score, a summary, a name, email, phone, education, skills, projects, experience, strength, and missing skills. Is that clear? Suggested role and recommendation, which will provide us a complete JSON with all the required data.

करके देगा? तो एलएलएम उसके बाद हमें यहां पर स्कोर देगा, समरी देगा, नेम देगा, ईमेल, फोन, एजुकेशन, स्किल्स, प्रोजेक्ट, एक्सपीरियंस, स्ट्रेंथ, मिसिंग स्किल्स। ठीक है? सजेस्टेड रोल और रिकमेंडेशन कि एक पूरी जेएसएन के अंदर एक हमें देगा। JSN के अंदर पूरा डाटा यहां पर निकाल के देगा। इस

What will we do with the entire data? We will create a model inside MongoDB and store it. Okay? Means, we will create a collection inside MongoDB and store it. Okay? And if a user uploads another file here again, we will update our existing collection.

So this is what we need to do here. We need to do this in our upload controller that we will create here. So first, we set up our multi middleware through which we will send our file to the destination.

We will give it a name and check if it is in our PDF or not. Okay? We will do all these things there. So we make an upload middleware here. Then we carry out the tasks inside it. Okay? So we go into the resume and create a folder named middleware. Here, I will write it like this.

Middleware. Let's create the middleware like this, and inside middleware, I will create an upload. I will make a file here named mts, I will write here mts and create a file named multgs here, where we will perform our tasks. So first, we will need to install a package for multer.

So here we go inside the resume service, copy it, and clear it here first to bring it up. Now here we run npm install and write it like this multer. As soon as we install it, the multer package will be installed.

We will be able to use it. Okay? And we also run npm run dep for this. So let's allow this to process. Done. Now we will run npm run dep again to make sure our service runs again. Now we will perform tasks inside this multer middleware, and here we will create a file.

We create a folder named uploads. I will write it here as uploads. We create a folder named uploads inside the resume. So look, a folder named uploads has been created. This will be our upload path where we will store a file which will be our PDF.

The file will come and we will store it inside. Okay? So this has become our upload path here. So first, what we need to do here? We need to give it an upload path that tells where we need to upload. So I will write uploads path like this. One second, we write uploads path here.

We write uploads path like this. We set it equal to, and I will put a dot dot slash here. Look, by putting a dot dot slash, where will we come? We will come inside this middleware. We will be able to access all the folders. But if we put another dot here in the middle, then what will we do?

We will come outside here. Okay? Means, now we can access the config here. We can access the controllers, models, node modules, routes, and uploads here. So what will happen by writing dot dot slash? We will be able to access our uploads folder here.

So we have given an upload path here. Okay? Now we will set a condition here, that suppose if we do not have the upload path, how will we check? It means how can we check if our folder exists or not? For this, we have a package here called fs. So here.

We write fs from fs. So now here the fs package is already there with node, and through this fs package, we can check if our file exists or not. So inside fs, we have an exist sync function. So we check.

If our upload path exists or not. Okay? If here our upload path does not exist, we will do not. If here, if our upload path does not exist, then what do we need to do? So then what do we need to do here? fs dot make directory sync means we need to create a directory here.

If the upload path does not exist, we need to create a directory named upload at this upload path.

Okay, let's give this an upload path by the name of Upload. What will happen here is that if this upload path doesn't exist, like there's a path called ../uploads that it can't find sometimes, then what will happen? It won't find that path.

If we push this to GetUp, what GetUp does is that it doesn't push any empty folders. So what will happen here? Our uploads folder will be deleted. It won't find it. So what will it do? If it doesn't find that upload path in the existing sync,

it will create that path. Okay? We've done something here. So we've understood this much. Now let's create storage for our upload path where we need to store our files. So let me write it out like this.

I will call it cost storage. So I'll write storage here like this. Now we'll create the storage. How will we create it? Through multer. So for that, what do I need to do? I have to import our multer package. So I'll just write here.

I'll write multer from this way. Okay? So we'll write multer like this here. Now what do we need to do for the storage? We need to create a multer.diskStorage here. We'll write it like this and do some things inside it. First, we need to provide a destination.

So we have a destination in it, and how will we provide the destination? It includes some options for us. That means it has some parameters. For instance, we have one request, one file, and one callback. Okay? And if we need to make a request,

And if we need to access the file, we need to know what the name of the file is. All these things and a callback tells us what we need to do next. First, we need to give something to our storage. Okay? It means we need to provide the file path, etc. So this callback will either return true,

or it will return false. Alright? So how will it return true or false? I will tell you shortly. Once we create our upload function, I will explain it to you. Okay? Let’s proceed like this. So first, let's do one thing. Let’s write this as follows.

For 1 second, let's make a callback function like this. Yes. We'll write it like this here. We provide a callback function inside the destination. And now what do I do? What all things are there inside the callback? If an error occurs,

we can return one error here. Otherwise, we can return null like this. So we return null here if there's an error, and now we will provide it with a destination. And what will our destination be? We will need to give this as a string.

So the upload path itself will be our destination. We’ll set the upload path here. Okay? Like this. Then, now I have a filename. I need to provide the filename here, which will be what our file is going to be named. So same thing applies; it includes a request and a file.

So we will access the file and tell the callback if we received the file name or not. Okay? Let's provide a callback as the first step. If an error occurs, we will set it to null. Otherwise, we will provide it with file.originalname here. So that will be the name of our file here. Alright?

So inside the storage, we've given it the destination, which specifies where we need to keep the storage, and along with that, what name we are uploading the file. So our file.originalname will be uploaded here with that name. Okay? Thus, the file we send from the front end will be stored with that same name. Now, we've created the storage. Now we also apply a file filter here that will check if our

है वहां पर। तो जो हमारी फाइल डॉट ओरिजिनल नेम होगी उसी नाम से अपलोड हो जाएगा यहां पर। ठीक है? ये कुछ तो जो फाइल हम फ्रंट एंड से भेजेंगे उसका जो भी नाम होगा उसी नाम से स्टोर हो जाएगी। अब उसके बाद हमने स्टोरेज क्रिएट कर लिया। अब एक और यहां पर एक एक फाइल फिल्टर यहां पर लगाते हैं और फाइल फिल्टर जो कि चेक करेगा कि हमारी

Is it a PDF or not? Okay? It means that whatever file we are uploading here, is it in PDF format or not. So we write here like this. First, we create a callback function like this. Inside it, there will be a vest and a file, and along with that, there will be a callback like this. Okay? And now what do we need to do with this?

What do we need to do? We need to apply a filter to the file. First, what do we need to do? We need to check whether our file, meaning whether our file is a PDF or not. Okay? So we set the condition like this. If our file here is written like this, file dot ...

In a file, there is a file dot original name, similarly, there is a mime type inside the file as well. Okay, like this. Now what is this mime type? So the mime type, if there is a PDF here, then the mime type will be application slash pdf. Okay, so in this way...

If file dot mime type equals equals to application slash pdf, then what does it mean? It means that our file is indeed a PDF here. Okay? So if it is a PDF, then we will return a callback like this. So...

Inside the callback, first of all, if any error occurs, we will set it to null and if not, what will we do? We will return true here. Now what will this true do here? So this true will decide whether we need to use the upload middleware in the upload function or not. Okay? Similarly...

If here the upload path is there, then it will return true in the callback. In the same way, if file dot original name is there, then it will return true. So first, it will check a storage. If storage returns false anywhere, then our upload middleware won't work.

In the same way, if we need to make the upload middleware work. We need to return true here, then first of all, its application slash pdf mime type should be there. Okay? If the file type is not PDF, then what will it do here?

We will return false, and our upload middleware will not work, and neither will our file be uploaded here. Okay? So we set up an else here, and inside the else, what do we do? Inside the callback, first of all, we set null like this and give a false return here.

So let's do something like this. So instead of null, we can also do one more thing here. We can write a new error here like this. Look, if I write new error like this, then we can also give it an error here that only PDF files are allowed.

Okay? We have given it like this, and along with that, we have given a false return here. So one file filter that we will create now will be a function called upload, which will be our middleware. Okay? So we have done something like this. Now along with this, we do one more thing here.

Now we create our upload function here. So here I write const upload. Okay? We are creating the upload function here. Equal to, we put require's thru here, write multer here. Okay? And after that, whatever options we have, the first one is our storage; we provide this. Okay? Along with that, we...

provide our file filter. Okay? And along with this, what do we do? We fix the file size here that our file should not exceed this size. Okay? We also fix that. So we add limits like this. And inside limits...

What do we provide? A file, so inside limits one curly braces, we write a file size here. Look, is the file size visible? And we need to provide this file size in bytes. Okay? So how will we give it in bytes? So in this way...

Understand that if we need to keep 20 MB, then we write 20 here first. To keep it in 20 MB, we write 20 here. Now in 20 MB, how many KB are there? Meaning, we change 20 MB into KB. There are 1024 in it. Okay? After that, again...

We multiply. So, we will convert our KB here into bytes. Again, we will multiply by 1024 here. So, it means that within 1 MB, we have approximately 1024 KB here. Right? And what is there within 1 KB?

1024 bytes are there. So if we multiply 20 like this, it will change within 20 MB. Because we need to provide the value in bytes. So this is how we are writing it. Okay? So we have added some limits here.

First, there will be one thing. How will the upload middleware work? First of all, it will check if the storage destination is available. If it does not have the file path, what will it do? It will return false. If there is no file path, it won't proceed with storage.

Our upload middleware won't work. Okay? Let's assume it found the file path. Okay? Then it will go to the file name. It will check if we have the original name of the file. If yes, it will proceed. Then what will it check?

Then it will check the file filter to see if our file type is application/pdf. If it is application/pdf, it will return true and go to the limits. If it returns false and gives an error, it will not proceed to the limits.

This is where our upload function will break. Okay? And if this also gets completed, then after that it will check the limits to see if the file size is 20 MB or not. If it is more than 20 MB, what will it do? It will break right there.

The upload middleware won't work. Okay? This is what will happen, and if it is less than or equal to 20 MB, then it will work. So we have created our upload middleware. Let's export this. So I will write export cost here, and write upload here.

So we will use this middleware. When we create a route for this in a controller, we will use it. Okay? Now, we need to write some things in its config. Like what we need to do? The PDF that comes here, what do we need to do with it? We need to extract the text.

Okay? So for this, I create a folder inside the config called pdf.gs and I need to provide the extracted text to the LLM. Okay? So let's also create an llm.gs here. Okay? Where we will set up our LLM, a large language model.

Okay? So first, let's work on our pdf.js. Okay? Then we will move forward. Likewise, we will need to create a controller, which will be our resumeController.js. Okay? We will do the rest of the things in this.

We will do it this way. Okay? First, we will process things in our pdf.js and separate the text from the PDF file we are uploading. Okay? From the PDF. So we do this work in pdf.js and now the text that we extract, we will use it in our controller.

Okay? So now what do I do first? I create a cost and a function here. We write extract here as extractText. Okay? I create a function named extractText here. We create an async arrow function, within which we take a file path like this.

Okay? Within which we will provide a file path parameter from which we need to extract the text. Okay? That file.

We will provide the path inside this. And where will we give that file path? We will give it inside this controller. Alright? First, let me note this down. Then, alright? Then we will show you how to do this here in the resume controller. Alright? First, let's create this file using the extract text function. So now, what do I need to do?

Alright? We are going to use a package here. PDF parts. So we will use the PDF parts package here. In order to parse the PDF, we will have to provide some data inside a buffer here. Okay? So let's get that buffer. Let me write cost here.

Buffer equals to here. And there is a package which is our FS package that we have used before. So let's import the FS package here. Alright? The same FS package that we have used here in multer. And here, FS dot first.

We will read this. So there is the read file sync option here. We go here and which file to read? The file path that we are taking in the parameter. So as soon as we read this file, what do we get here? We get a buffer here. Okay? Now we need to.

Who do we need to give it to? So first, we install a package here. Look, we go here and first we install a package here. Let me clear it first. Press enter. Now here I write npm install and one package we have is PDF parse. Alright? There is a package named PDF parse.

We use it here. So that we have a PDF here, and using PDF dot get text, we will be able to extract the entire text from that PDF. So we need to do that here. Let's install it like this. So our package will be installed here.

And after this installation, we will run npm run dev here. So let’s let it install. Our package has been installed here. We will run it again. So our run has been executed. Now, see what we did here? We read the file through FS dot read.

We read the file. And which file did we read? The file path that we were given, we have read the file located at that file path. And we got a buffer here. Okay? We have saved it in a buffer. Now, what do I need to do?

We need to set this PDF here. So I take a variable named PDF, and through PDF parse, we will do what with this PDF? We change this PDF's buffer slightly. The PDF's buffer.

We convert it into meaningful data and extract its text using get text. Alright? So we need to do some work for that. So we will write new PDF, a PDF parse here. This way, I write PDF. So one.

More, we have PDF parse. So we will write PDF parse like this. Alright? And from where does this PDF parse come? So we will import it. We import it like this, PDF parts, from where will it come? So from is where we write.

And this will come from our PDF slash parts. Alright? That way it will come here. So now what happens inside it? We need to give it data. Look, we have an option for data. And what do we put in this data? We will put the same buffer we read from this file path here.

So we will put that buffer through this data. So look if I see here, look, we have one buffer. Now this is our node buffer. Look, this buffer is our node buffer. And what is PDF parts doing here? It is converting.

The node JS buffer into what? Data to unit8 array. Now the unit8 array data is ours. Now this is our data that if we do .get text, then the complete text of our PDF is basically the entire text inside that PDF.

It will separate that. Okay? Now the PDF, it's just one page of ours. Okay? It's a complete page that contains tests and all things. Now, what does the PDF parser do here? First, we need to give it a buffer inside a data buffer that contains our

entire PDF. Now, what does it do? It creates a meaningful format here for us. Okay? It changes it to our unit array, which is our unit array, and inside that unit array, in the dot text, we get the entire text of the PDF that we need here. Okay? So this is something

we did here. So now what do I do after this? Now here we get that data. Okay? Let's get the result. So here I keep it like this, cost result. We get a result here which will basically be our text. And how will we obtain that result?

We will get it through pdf.dot get text. So first we need to put an await because we really need that. Okay? So we await for the result to come before proceeding further. So we wait and when I write pdf.dot get to get text like this,

we will get the entire text here inside this result. Okay? Whatever text is written in our PDF will come fully inside our result. And if I write result.dot text, then it will contain all the data of our text. Okay? So now, at last,

we need to return something here. So here we will return our result. One second, we write result.dot, which is our text we will return here. Whenever we call this function extract text, it will give us a result.dot text in return which contains the entire extracted text of our PDF here. Okay? We have done this much work here.

Now at the last we will do export default. Here I write export default. And who do we need to export? So we will export our extracted text here.

Okay? So we have done this work here. Now we will do one more thing. Okay? Now we also need to create our agent which we need to set up. Okay? We will book the LLM inside that agent. We will give it a prompt here. So we create a resume agent here. Okay? So now the

resume agent starts its work here. What will our resume agent provide us? In the model, all the things were our recommendations suggested roles missing skills weaknesses strengths experience project skills education after that phone number email name and our summary,

and our score. All this data inside JS will be provided to us by our resume agent. Okay? So now we start the job of the resume agent. So how will we make that agent here? Before that, we need to set up an LLM here. Okay? That means we have to bring a large language model here.

We set it up here. Then we will invoke that LLM. Okay? And we will provide it with a prompt through which we need to know what we need to give in that prompt. Basically, we will have to provide the text we got in result.dot text. This entire text

of the PDF whatever text is inside that will be provided to it. So according to that text, what will it do here? It will give us a score. It will prepare its summary. It will tell us our weaknesses. Okay? Everything that is saved in our model will be extracted and provided to us. So we do this work here.

Then after that, we are doing different things like we created pdf.dot.js separately. We created ultra separately. We are creating LLM separately and similar to that we will create an agent for the resume. And by assembling all of them together, we will create a resume controller here.

Inside, we will create a proper controller. So, before that, we need to separate our test. We need to collect any data that needs to be saved here through our LLM. So, we are currently working on all these tasks. Okay? And through the malter, we are providing our destination. So we will do all this work first.

After which we will assemble all of them inside the resume controller. Okay? So now, understand one thing that first of all, we have saved it inside an uploads area through the malter. And once we got a file path, what did we do with this file path? We extracted the text from our PDF.

So, this much work we have done here so far. Okay? If we move step by step, that's how we need to accomplish things. So, let me explain something to you more clearly. The first thing we need is a PDF that we will get from the front end.

Okay? This way we will get the PDF from the front end. Alright? After that, we will need to store that PDF. So, we will have to store the PDF here. Where? The PDF will need to be given storage here. Okay? So as soon as we provide our storage for the PDF here...

...what else will we need to do? From that PDF, we will need to extract some text. So, we will extract text from the PDF here. Okay? Now, whom do we need to send our test to? So, we will send our test directly to our LLM here. Okay? And what will the LLM do here? What will the LLM do here? It will create an agent for us. Where we will do what? Inside the agent we will have a prompt. Okay? In the agent, we will have a prompt here.

What will this prompt do? The prompt will give us complete data, and what do we need to do with that data? We need to save it inside our mongoDB. Okay? The data we need to save in our mongoDB. So, this is the entire work we have, and in this data, we will have the complete data of the resume. Okay? What will be in this data?

We will have all the data of our resume. All our weaknesses, our score. Okay? Here our score will be. After this, our missing skills. Okay? Our missing skills will be recorded here. Okay? Our recommendations will be noted. Missing skills. After this, whatever recommendations we have.

Okay? That means there will be a lot of things in our data that we will need to start our interview. Okay? After this, to give a score to our resume. Okay? And to start the interview, to create a roadmap, and by creating our own resume scorer where we upload the resume and it scores us and tells our weaknesses. So, to provide data for all of this, this resume data will be useful here. Okay? Now you should start to understand the flow. How much work have we done so far? We have completed this task.

We have uploaded a PDF, right? We have given that PDF a storage through the malter. Okay? We have not uploaded this PDF yet. We are only assuming that we will get a PDF from the front end. Okay? We will provide storage for that PDF through a multi-tasking procedure.

Then, through PDF parts, what will we do here? We will separate the text from that PDF, and whom do we need to give that text? We need to give it to the LLM. What does that mean? It means that now I need to create my own LLM here. Okay? And I will cut this here and move it here.

हम रिज्यूे अपलोड करते हैं और वह हमें स्कोर करेगा हमारे वीकनेसेस बताएगा। तो उन सभी के अंदर डाटा देने के लिए हमें यहां पर यह रिज्यूे डेटा यूज़ में आ जाएगा। ठीक है? ये कुछ तो अब आपको फ्लो समझ में आ रहा होगा। हमने अभी तक कितना काम कर लिया? हमने ये ये जो है हमारा है इसको हमने कर लिया। हमने पीडीएफ एक अपलोड करा ली। ठीक

है? उस पीडीएफ को हमने एक स्टोरीज दे दिया मल्टी के थ्रू। ठीक है? अभी यह पीडीएफ हमने अपलोड नहीं कराई है। अभी केवल हम मान रहे हैं कि हमारे पास एक पीडीएफ आएगी फ्रंट एंड से। ठीक है? उस पीडीएफ को एक स्टोर मल्टीटर के थ्रू एक स्टोरेज हम प्रोवाइड कर देंगे। ठीक है? उसके बाद

पीडीएफ पार्ट्स के थ्रू एक पीडीएफ पार्ट्स के थ्रू हम यहां पर क्या करा देंगे? उसके टेक्स्ट को अलग कर लेंगे। और वो टेक्स्ट हमें किसको देना है? एलएलएम को देना है। इसका मतलब क्या है? कि अब मुझे यहां पर एक एलएलएम बनाना है अपना। ठीक है? और इसको जरा मैं यहां से हटा के इसको यहां से कट

I do. I write inside this controller this way. Okay? So we will know what things we need to do. First, we have done this much work. We have taken our PDF and provided storage here for the PDF. Then we separated the test from it. Now here we will first create our LLM.

Then we will create an agent. We will give the agent a prompt. Okay? And what will we get from it? We will get some data here. We will save it in MongoDB. Okay? So let's do this work. First, we need to do this much work. First, we need to create an LLM and an agent.

Okay? And we need to give it a prompt. Now afterward, the work about saving the data into the DB will be done inside our resume controller. Okay? You must have understood this much. So first, let's create our LLM here. Okay? And we will use LangChain for the LLM.

Through this, we will create our LLM here and invoke it where? Inside our agent. Okay? We need to do something here. So first, I will do one thing here. We go to Google and search here. We will handle things through our Grok. Okay? So in this way,

I search for Grok LangChain here. This means that we are going to use our Grok, which is a learning language model here. Okay? So I search for Grok LangChain here. Okay? This will give us documentation on the integration of our ChatGrok on the LangChain website.

So let’s click on this simple link here. Okay? And look here, this is somewhat like our LangChain documentation. But this is for Python. So we will do it for TypeScript. Okay? In this way, we are using JavaScript.

JavaScript and TypeScript are brothers now, so if we work with TypeScript, we can also use it in JavaScript. Okay? So first of all, it is telling us to set up here that you need to do the following things.

First, you need to export the Grok API inside the credentials. Okay? So what do we do first? We bring a Grok API. Okay? In this way, let’s copy the Grok API. We will move step by step with the things it tells us.

It is telling us that first, we will need a credential for the Grok API. So we take this here. Then where do we need to put this? We will place it inside the .env like this. Okay? Here we write Grok API inside the ENB, and insert a Grok API.

Where will we get it from? So we go back here and see that you will see an option for the Grok Console. Okay? There is an option for the Grok Console. So we click on it like this. As soon as we click on this, we have arrived at our Grok website. Okay? And here we continue with Google.

Let's continue with Google here. Okay? Let’s continue with Google here. In this way, we log into our account here on GK, and as soon as we log in here, you will see that we have generated the API through our Grok.

So what do we need to do now? We need to create an API. So let’s click on create API like this, and we are creating it for our resume. So we write resume agent like this here. Okay? We are doing it for the agent in our resume. So we write agent in the resume here.

And we submit it. Okay? So you can create your API like this. As soon as our API is created, look, we have received an API. We can simply copy it from here and we are done. Okay? So this much work is now complete.

We have obtained the API here. And now we are setting it up like this. Okay? So the Graq API has come to us now. You need to generate your own API, and by the way, I will delete this after a while, meaning after the video is uploaded, I will delete this.

Okay? So you have to use your own API. If you use this one, then your LLM will not work. Okay? So we have done quite a bit of work. Now what do I need to do here? Let's move forward. We need to do its installation here. Alright? So now what do we do here? We start our installation part.

So there is an NPM command here. NPM install lgqraq. So the lgqraq is to install our Graq, and the lgqraq core is used to utilize the properties of lgqraq. Okay? So we simply copy this here.

So we copy this, and we go to the terminal. First of all, I will clear it here, and bring it up and here we will run NPM install @ lgqraq @ lgqraq core here. Okay? So that we can use Graq in our resume. So this has been installed.

Let's again run APM run dev here. Okay? We have done some work here. Alright? So this work is done. Let's go back here. So we have installed this. Now what do we need to do here? We need to set it up like this. Like this.

It should be written that we need to import Graq chat Graq like this. Okay? From lgqraq and we need to create an LLM here. Alright? We need to do this, and the rest we can invoke like this using LLM update and LLM.invoke.

Through it, okay? In which we can give a role to a system here, and also add a prompt inside the content, okay? And we can also give a role to a user, like if the role is user. So we can use LLM here like this. Okay? Now, how do we set up the rest?

So let's copy that here like this, and we will import this directly. We copy this from here and go directly to our LLM.gs and paste it here. Okay? So we had to do this much work here. We directly paste it here.

And we will not give the API here. Meaning we also need to provide an API for LLM chat Graq here. Where have we kept the API? We have kept it inside here. So now what will this do? Our LLM will automatically access this. We don’t need to provide it here.

It will automatically access the API here, and if it finds anything with the name GCK_under_score API, it will understand that we need to use our API. Okay? So we do not have to write this anywhere. I just need to create a model here.

We need to give it temperature, max tokens, and max retries here. Okay? Like this. So now you can see there is a different model for chat Graq here. Let’s change the model a bit.

We use a free model here that is our model here. We need to use it. Okay? For the model and temperature, we give it some value, and we set its temperature to 0.2 here. So first of all, we change its temperature from zero to 0.2 here. This means how seriously it will analyze our questions, whatever resume we give it.

It will check how detailed it needs to be. It will give a score for us. That’s why we set the temperature to 0.2 here. Okay? If we set it to zero, it will do things according to its own way, and setting it to 0.2 it will analyze it a little more seriously.

Okay? It will do everything, and we do not give this an undefined max token. We give it some max token here. This means how many words our result will give us. Okay?

We need a lot of things here. So we will have to give it a higher max token. We set the max token here to about 2500. By giving it 2500, at least by providing more, it won't stop midway. It will keep running until it completes the task.

It won't give us all the updates on our resume until it keeps running. Okay? That’s why we give it more max tokens. And there is a max retries here. So what does it mean? If we click the button to make it work, alright? It means that we have to analyze.

If there are any issues the first time, it will run again one more time. Okay? We will give it a max try here. This means that if there is an error in the first attempt, it won't run again the second time. Okay? And if there were any issues before, it will rerun the function the second time.

This is what it means. Okay? And finally, what do we do? We export it here. We write export default here. In this way, in LLM. Okay? So we will also export it. Alright, so this is.

In this way, we have set up our chat group here. It was just that easy, right? If we were to fetch it through X like we used to do in our previous projects, we would use a setup for Gemini. What did we have to do to set up Gemini? We had to fetch its URL. We had to do a lot of things.

In LangChain, what do we have to do here? We have to do nothing. We just need to simply write a new chat group like this. Okay? And if we just write chat like this, the rest it will do all by itself.

We will provide a model. We will give the temperature, max tokens, and max tries. It will complete the task according to its own calculation. We don’t need to fetch its URL or do anything else. It will manage all that by itself within LangChain. Okay? That was our work.

The LLM that we have completed here. Now after this, we create our agent. We create a resume agent. Alright? Alright? This is what we talked about in the beginning that we will have some four agents. Among them, our first agent is the resume agent, and we will be using it here. Okay?

Now, let’s do one thing. We create a folder called agents inside the resume. And inside it, we create our agent named resume.agent. So we will write resume.agent here. So let’s start creating our resume agent where we will.

invoke LLM. Okay? And we will give it the prompts, etc., in this way. Look, as it has been explained here, we need to create an AI message in which we will invoke LLM. We will give it a role for the system, a role for the user, and in the system's role, we will tell it the content about how.

it will work. So basically, we will provide it a prompt-type instruction. Okay? And we will tell the user’s role that the user will provide a resume file here. Alright? In this way. So there is some work to do here. Now what do we do? We create a simple resume agent. So I’ll write it like this.

export const resumeAgent. Here we write our resume agent. We set it equal to and will create an async arrow function like this. In this way, we create an async arrow function. And inside it, what parameter do we need to first provide a value for? We need to give a resume text.

And which resume text will we provide? We will give it the same resume text that we extracted from our PDF in pdf.js. Okay? We will provide it inside. In this way. So now what do I need here? I need to take a response or we can say result. So here we can write a response.

Yes. Is that okay? In this way, we can write anything about the variable's value in the response result. So let's write the response here. And now we will apply the update. And now what do I need to do here? The LLM will come from our conf.dot.config LLM. We will add dot JS here.

What do we need to do? We need to invoke dot here. Okay? Look, invoke is appearing. So we will invoke it here now. And now inside this, we need to provide certain things. Let's do that. Okay? First of all, we need to give it some system message about how our system will operate. A human

message needs to be given about how the human will work. So like we can either specify the roles this way. One role is system, and the other is user. Or we can directly write this here. Or we can directly write it in this way, we have a new system message. So here we write the system message which will

come from where, it will come from lches/slash core/slash messages. So if I write new system message here, it will understand that we are asking the system for what we need for a system role. Okay? So we write new system role here. And now what do I need to do inside this? Now inside this, I need to provide it with a

prompt that informs it about how our system, which is our LLM, will function for us here. Okay? So for that, we need to provide it with a prompt. So what is our prompt? So this is the prompt I have just written here. I have basically pasted it.

So you will find this prompt in the description. You will find the prompt for the resume in the description. You will find the prompt we will use in the interview in the description. The prompts we will use in the road map will also be available for free in the description. Okay? So you can

go there, copy it from there, and use it here. What am I doing here? I will gradually explain to you what things we are using here. Okay? So now we tell the system how it will work here. So we say YOU ARE AN EXPERT ATS RESUME ANALYZER. This means that here we

have a standard for analyzing resumes, the ATS standard, through which we are conveying that you are an expert ATS resume analyzer who will what? Provide us with an ATS score accordingly through this standard, okay? And now it will analyze the given resume that we will provide.

So similarly, we will give it a resume test inside a human message that we will provide. It will analyze the given resume and what else will it do? It will extract the following.

Information. It will extract the following information, meaning various pieces of information here. First, it will separate our full name. It will separate the email. It will separate the phone number, professional summary, technical skills, projects, education, experience, strengths.

It will provide us with their weaknesses, missing skills, and suggested job roles. It will give an ATS score anywhere from 0 to 100 and provide recommendations. Okay? And we will also add some important rules here. Return only valid JSON, meaning that whatever data is

in the response must be valid JSON. Okay? And do not use markdown. This means do not use anything in that manner here. Do not explain anything. This means we do not need to explain; we only want the response we are asking from you and nothing else.

Okay? Do not add extra text. This means do not add any unnecessary text. Every field must exist. Now whatever fields we are providing here, we need all of them. Okay? And all fields must be included in our response.

Along with this, we need to specify a response format in JSON that must include a name, name data, email data, phone, our summary, skills must be an array. It should be an array of strings. After that, projects must be an array.

Strength, weaknesses, missing skills, suggested roles should be here. There should be some score here and the recommendations should be detailed. Okay? And these are the same fields that we wrote in our resume model. And what will it do in the JSON? It will return those fields completely. Okay? From that only we need.

What do we need to add? We will only need to add the user ID. And the test that we extracted here in our PDF.js, we will just provide that test and what will it do here, it will create a resume model for us, okay? So what it will do as soon as we book this agent.

When we use this resume agent here, it will return all this data in JSON which we will save in our MongoDB. Okay, we need to do these things in this way, so we have completed this much work here, so as a comma, I add in this way, what I do? I give it a.

human test here. Okay? So here, just like we have given it a system message, we will provide it with a human message. In which we will give it a resume meaning that it is a resume test we will provide. So now.

Here we have a human message. Here we write a human message which will be coming from our lunch and coming from the lunch core messages. Now what do we need to give in this? The resume test that we are taking in parameters when we call this resume agent, it will be inside it.

We will provide it. Okay? We will provide it in this way. And lastly, as soon as this work is completed meaning that we get a response here, now in this response.response, we will get the data inside a content response that we want here in this way in JSON.

Where will it be found? It will be found inside response.content, so we will return it from here. So we return who? We will return the response we will get here as we are invoking it, so we will get a response and inside the response, there is a content that we see is getting in suggestion, we will return that content from here and who will access it?

So as soon as we call this function, what will it do? It will return response.content which will have all this content with name, email, phone, all this, okay in JSON. So we have done this much work here, so till now how much work have we done? If we go inside the controller, then we took a PDF.

file, put it in a storage, extracted the text from it, created the LLM agent, provided it with a prompt, and we will also get some data. Okay? Now to get this data we have to call the agent. So to get this data, we mean, we call the agent.

It is saved in MongoDB. Okay? And we will access resume data. Okay? Later first we will save it in MongoDB. Then we will write an API to get the resume, so that we can use this resume data. Okay? So now first here what do I do.

I create a function called cost export cost upload named upload resume. Okay? So here I write export cost upload resume as an async arrow function and here there will be a request, response, and I will put this whole into a try-catch. Okay? Now let’s start doing things here. Okay? So whatever things we did separately, now we have to assemble them together. Okay? Let's do that work.

And one more thing here as we will save it in MongoDB. And along with that we will do one more thing. We will also save it in Redis. Okay? We will also save it in Redis together which will provide a key here. Any resume ID or user ID will provide it a key so that we can access the data of that resume afterward.

अंदर सेव कराएंगे। और साथ में हम एक काम करेंगे। इसको रेडिश के अंदर भी सेव कराएंगे। ठीक है? इसको हम रेडिश के अंदर भी सेव कराएंगे साथ में जिससे और इसको एक की यहां पर प्रोवाइड कर देंगे। कुछ भी एक रिस्यूे की आईडी होगी या यूजर की आईडी होगी वो इसको एक की दे देंगे जिससे हम उस रिज्यूे के डेटा को एक्सेस कर पाएं बाद

Okay? I mean when we want to get it, we can directly get it from Redis. This way, we will get our response very quickly. Okay? So if the resume data is saved in Redis, we will find it here very quickly. Okay? So what will we do here? We will get some data and call it.

We will save it in the DB. Along with that, we will also set it in Redis so that when we get the resume data, its response will come to us very quickly. We will get it in a few milliseconds, one or two milliseconds. Okay? Or in some 0 point something milliseconds, we will get it. Okay? So we will also save it in Redis.

So we created a folder in Redis under the shared section. It was a file created named red.dot.js in which we were creating the Redis instance, and just as we set our session in the auth section here, we will set the resume data in Redis. Okay? This is something.

Now, first, let us do one thing. We have to do all these things later. First, what do we do here? We get our file. Okay? We provide that PDF file. We extract text from the PDF. Then we give that extracted text to our LLM. Then okay? I mean the LLM.

We will not give it to the LLM. We give it to the agent. The LLM that we have is invoked inside our agent. So from there, it will take our text. Okay? Let’s do something. So now what do we do here? We need a file. So here we write cost, and I write file equal to here.

So how will we get the file? So we will find that file inside request.file. Okay? This is something that we will send from our front end, so we will find the file inside request.file. Okay? This way we will get the file. And if let’s assume we do not get the file. Okay? This way we write that if.

If we do not get the file here, then what do we have to do? Then what do we have to do here? We have to return a response. So we write return response.status. We give it something. Status we have to give as a second status. So inside status, we give it something like 400 because this is related to the front end.

The front end did not send us the file, and inside the JSON, we return some message. So inside the message, we do two things first. So here we add success to it. Okay? So we make the success false. This way.

Okay? And along with that, we also give a message. I write here like this: message, and inside the message, we provide something like this that resume PDF is required. Okay? This way we give it inside the message. Resume PDF is required.

So, we provide this here. If we do not have the file here. Okay? Which we are getting from request.file. And then what do I need here? I need a user ID. Because we also need to save the user ID inside our MongoDB under the resume model. So how will we access this user ID?

So just a little while ago, we created a header in the proxy with headers inside the gateway, this way we have given a header called x-xapp-user-id in which we are saving user.user-id. Okay, and we have also written this proxy with headers here. Along with this, we are providing this to our resume service URL. Meaning, we will access this through the gateway via this proxy.

And with that proxy, we are also providing a header. Okay? User ID so if I need to access this here, how will I access it? So here I am using request. We are doing request.headers, so first we give value to the headers. What are the headers we have? So here inside request.headers, some of these header values.

आईडी का तो यह कुछ तो अगर मुझे यहां पर इसको एक्सेस करना है तो किस तरह से एक्सेस करूंगा? तो मैं यहां पर रिक्वेस्ट डॉट एक हमारा तो यहां पर रिक्वेस्ट डॉट हेडर्स के अंदर तो सबसे पहले हेडर्स को यहां पर वैल्यू देते हैं। क्या हेडर्स हैं हमारे? तो यहां पर रिक्वेस्ट डॉट हेडर्स के अंदर में से कुछ यह कुछ हेडर्स की वैल्यू हम

Here we provide an ex-hap user hap ID, so that whatever data is saved under this name here in the headers will be stored within that user ID. Is that clear? In this way, let me write it in double quotes. So I will write it here in double quotes.

Yes, like this. Now is this alright? So what will it do here? Because we are sending a user ID alongside the headers via the gateway. Through the request.headers, we can access it. Is that clear? And we place it into the user ID.

In this way. So you see we are accessing the user ID within our services that we are receiving from the gateway. Is that clear? It was simple. There wasn't much to it. We just needed to create a function here with a proxy that included the headers. Is that clear? Additionally, we were saving the user ID within this.

That was all we needed to do, and accessing it is very simple; we can directly specify the name of the header within request.headers that contains the user ID we are saving, allowing us to access the user ID. So we have accomplished this part here. Is that clear? And afterwards, let’s set a condition like this, and how do we set a condition?

Let’s copy this condition and paste it here. Now, what do we do if we don’t have the user ID? We simply set the success to false here and write user ID required. Is that clear? User ID is required. We’ll just write that here. So that's done.

Now, moving ahead. Is that clear? So what have we accomplished here? Basically, we have received a PDF file here. Is that clear? Now, what do I need from that file? I need to extract text from it by providing a path. This means I need to call this function. Let’s call the extract text function now. Is that clear?

What do I need here? Now I need a resume test. Is that clear? A resume test.

I need it here, which I will send to my resume agent so that we can achieve an LLM inbox. Is that clear? This is to ensure that our LLM can function properly. Let’s take a resume test here.

Now we start with a wait. So how do we write that? There is a function named extract text that we created within the PDF. We can now call it here. Is that clear? In this way, we will call it here. Additionally, we need to give it a file path within the parameters. So what will the file path be?

Our request.file will have the path, so request.file.path will be the path here. And we are writing the request.file within a file variable. So if I directly write file.path here, we can access it. Is that clear? This is how we will get the path of our file.

This will ensure it retrieves a file path here that will be part of our upload. Is that clear? So it will retrieve a file path from here. What will it do? It will create a buffer through that file path. The buffer will change within our node.js buffer. Is that clear?

And what will it contain? Get test will allow us to retrieve that test within the result, and we will return result.test here. Is that clear? So we will get a resume test in this form.

So that's done for us. Is that clear? Now I will write this as cost. And now we need an AI response. Is that clear? We need an AI response. So how will we get the AI response? All this work has been done. We have extracted our test here.

Now we need to provide this test to our agent. So what do we do inside the AI response? We provide it to that agent. To whom? To our resume agent. What do we do with this resume agent? We provide it with a resume test. Okay? Like this. So here I will first await.

Here I will write the resume agent, where is our agent coming from? Let's put dot dot slash agent resume agent dot js here so that there is no error and now what do we do inside this? Look inside it we need to provide a resume test, so we provide it a resume test.

Like this, okay, look now it will get a resume test here which we need in parameters so what we will get here is that we will get response dot content returned. Now inside this response dot content there will be some data like this inside JS, right? Like this there will be some data.

In JSON, this is fine, so we will get this after the AI response, right? Now one thing I do here is I take some resume data here, I write resume data and here what we do is we await and write json dot parse here.

We parse it, which one? Our AI response like this, okay? So we parse it inside JS, if it is not in JSON, it will be parsed here in JSON. Okay? AI response, we don't need to await here for a second because we will definitely get the AI response.

We just need to parse it in JSON. So in one resume data we will get the complete AI response. Okay? Now what do I need to do here? I need to create my resume model here, meaning I need to create a resume. So let's do this work. First, we check one condition.

One thing we look at here is if suppose there already exists a resume with the same user ID. Okay? So the resume data we are getting through the AI response. If suppose the user has already uploaded a resume here before. Now they are uploading a second.

resume here. Okay? So what do we need to do? We need to update the already saved data in our model. Okay? It means we need to overwrite that. Basicly, we will have to re-write it. So how will we do that? Here I will write let resume because we will change the resume.

So I will write let here. So here I write resume. equals await, and here we will use the resume model. And we will use a find one method here in the resume model like this.

So now here in resume, I use dot find one like this, and how will we find it? Inside it, we will find with a user ID. So here I write this way, the user ID which we are finding from where? We will find it here from the header.

Okay? What do we do with this user ID? We find our resume. If there is no existing resume for this user ID, okay? If here if this resume exists, meaning the value of the resume here is true.

Then what do I have to do here? I need to update the data of the resume that I have here. Okay? This task needs to be done. So how will we do it? Here there is an object dot assign. Here we have an object dot assign method.

Here we need to assign it where? So we need to assign it inside this resume. Okay? Things mean that I need to do things inside resume. So what do I need to do inside resume? I need to update the data that we already have as source data.

What do we put inside when we fill it up? We put this resume data in this way. Right? It means that if there's any data of this type in this resume, let's say we have this object available here that contains name, email, phone, summary, skills, project, etc., education.

Experience, strengths, weaknesses, missing skills, register, roll, score, and recommendations. So all the total fields we have, it will update all these fields according to our new response, meaning according to the new resume data and our old data.

The complete resume data will be rewritten here. It means that all the data will be updated again. According to what? According to the new resume data. Right? There is one more thing we need to do here; we had extracted the test. Right? So.

What will we include in the extracted test? We will update the resume test. Right? Like this. So we are updating two things here. So we will need to use a curly basis like this here. Let's cut it out from here and write inside this curly braces.

Right? Like this. So basically, what do we need to do here? First of all, we have to assign the object dot. What do we have in the resume? We need to update the existing data of our resume here. What will we include in its extracted test? We will update the test resume that we have extracted.

Right? Like this, we will save the resume in the end, and at the last stage, what will we do? We will save it by putting an await for our user. This way we write await. Let’s go down to it. Right? I mean the object assign. After that.

We go down here and with await put our resume, one second. Here I write resume. So here we write resume dot, and we assign it to save it here. Right? This way we handle things. Right? But if I don’t write object dot assign like this.

And I don't write the resume dot resume data this way, then how do we write it? We have to write in this way. Here look, how we have to write, if I write here resume dot name.

I need to write it like this, putting an equal to what we have here, we have to write the name that is part of our resume data this way, resume data dot name, I have to write it like this. And this is not just one field, I have to write all the total fields here.

This is 1, 2, 3, 4, 5, 6, 7, 8, 9. All the total fields we have here, I need to update them here in the resume of each field, resume data dot email, like this. But by writing one line, my work here gets done that I've written object dot assign and what.

Our object is here in the resume and update the entire existing resume data here, and along with it, put the resume test in the extracted test, and finally, what we did was update the resume and save it, thus the 1520 lines of our work is completed in one line. One line.

Well, actually in two lines, our work has been completed here. Right? So we did something here so that all the resume data has been updated here, and our resume test has also come in the extracted test here. Right? In extracted test. And now here we also add an else condition that if.

Let’s say we are adding an else condition here because if here I do not have data in a resume. Else means that if the if condition here fails, then we go to else. So if here we do not have resume data, then what we have to do here?

What do I have to do here? I need to create the resume we have taken here. So here we set resume equal to await and with the resume model, what do we do? We create it. So we write resume.create here and how to create it? First of all, I need to

update a user ID. Okay? Along with that, I need to update our extracted test in which what do I have to put? Here the new resume.test needs to be updated and also the complete resume data after that needs to be updated here. Okay?

This is how it is. So writing so many resume data here will what happen is that any fields with the same name, meaning if there is a field named 'name' then whatever name will be present there will be updated inside it. The email field will update the email. The phone will update.

I will update the phone. Okay? Meaning if there is a field with the same name, whatever data is ahead of it will be updated. Inside what? It will update in our resume model. Okay? This way and others will not be found. For example, the user ID will not be found. Extracted test will not be found for him. So we provide that directly here.

Okay? So what have we done here? We have created our resume here. Okay? So we have done so much work here. So we have done things condition-wise here that if let's say there is already a resume uploaded for our user, then what will it do? It will rewrite the data of that resume here.

If there is no resume data here then it will create the data of that resume here. Okay? This way and now this much work has been done by us. So let's see how much work has been done. Okay? So the work we do has been saved here in MongoDB.

Okay? So now what do I have to do here? I have to set the data in Redis. Okay? So our work has been done. Data has been saved in MongoDB. Now what do I have to do? I have to do things in Redis. So now we will first put await here. Okay?

And now we use our Redis. Okay? And where is it coming from? It will come from the shared folder slash Redis slash redis.js.

Look, we got Redis this way. So now what do we do inside this Redis? We set it. So to set it, first of all we have to give it a key. It means we have to give a key here through which we will lock the data inside our Redis. Okay? And with the same key, we will again get the data from that Redis.

Okay? So understand this thing that what we need to give it? We will have to give it a key. Okay? And how do we give that key? So I will write here like this in the back.

So we give a key named redis here. A key named resume is given here, and in that key we write a second key here and inside that key we give it a key value that if we provide the user ID. So whenever I have to get the data from Redis, I will give it that same value of the user ID.

Okay? So what will it do? It will return to us whatever data we are saving inside it. It will give us this something. Okay? So we give a user ID here with a dollar sign like this. Okay? So through this user ID, we set our resume data here. Inside what? Inside Redis. And now what I have to do here? I have to put the rest of the values which we need to save in Redis. Okay? So how will we do that? So I write here like this.

यूजर आईडी दे देते हैं। ठीक है? तो, इस यूजर आईडी के थ्रू हम अपने रिज्यूे के डेटा को यहां पर सेट करा देते हैं। किसके अंदर? रेडिश के अंदर। और अब मुझे यहां पर क्या करना है? मुझे इसके अंदर बाकी की वैल्यूज़ अब डालनी है जो कि हमें सेव करानी है रेडिश के अंदर। ठीक है? तो कैसे कराएंगे? तो यहां पर लिखता हूं मैं इस तरह

In jsn dot stringify and jsn dot stingify, what I put here, whatever our resume is here, whatever we have created here, see the resume, what all things are here in our resume, there is a complete date in the jsn, all the data is inside the jsn.

There is a user ID inside, our test is later, the resume data is there which contains name, email, our recommendation summary, etc. It is all the data that we have set in the red disk here. Okay? In this way, the data in our red disk has been set here. Okay? And this much work has been done.

So now here in the red disk, the data has been set. The data inside MongoDB has been updated. Okay? So much work has been done here. The data has been updated. Everything has been completed here. So now we need to delete our PDF here. Okay? Now what do we have to do with the PDF here?

We have to delete the PDF here like this. Okay? We have to delete it this way and then how will we access the resume data? We will access it through our red or we will take it inside MongoDB. Okay? Resume data. So now,

all this data has been processed. So we took the PDF here from the front end. Where did we get the PDF from? We got it from the front end. We had stored it and we saved the date inside MongoDB. Set it in red. So now the work with the PDF is finished here. Now we need to delete the PDF.

This means we need to unsync it here. And how will we do that? So again we have a package through which we do things. Here I will import the fs package. Where will our fs come from? From fs. So we can read the data here from fs.

We can delete the file here from fs as well. And we can also create a new directory here from fs. This means that the file-related work is handled by our fs package. Okay? So now here I will simply put a wait, and fs dot unlink is here.

What do we put inside it? We provide the file path here. So we had taken one file. One file dot request dot file is a file we were getting from a request dot file, and if I provide its path here, just as we were providing file path in extract, we will need to give it a file dot path here, which will have this file path available, which is the upload file, then whatever data will be there in the upload, it will unlink here, meaning it will delete it.

Okay, let's do something else here. This time instead of unlink synchronous, we will use unlink. In this way, we will directly unlink it here. We are not using unlink sync. We will handle it like this. Okay? So much work will be completed here. So all the work here is complete. And one second, we were writing this in try catch, right? Yes, we were writing it. Okay? So this has gone a bit lower. Let's take the catch a little higher. Okay? So we have done this much work here. Now what is left for us? We need to return this.

So here we give some response dot status. We return this. So whatever we return here, we will get it in the front end. Okay? So we give it a 200 in the status, and in dot json, we provide the data. First of all, we give true for the success. We will provide success as true.

Next, we give a message here. So in the message, I write like this, "Received and analyzed successfully." After that, inside the data, what do we provide? We provide the complete resume here.

This is.

ट्रू यहां पर पहुंचाते हैं। उसके बाद एक मैसेज यहां पर देते हैं। तो मैसेज के अंदर तो मैसेज के अंदर मैं लिखता हूं इस तरह से रिसीव में एनालाइज्ड सक्सेसफुली। उसके बाद एक डाटा के अंदर एक डाटा के अंदर हम क्या कर प्रोवाइड कर देते हैं? इसको पूरा रिज्यूे यहां पर प्रोवाइड कर देते हैं। यह

The resume that we are getting here or creating here, we provide that resume inside this data. Okay? So if I fetch this at any time here, then the response means that if we fetch inside the result, then the result will have the data inside data.

Here we will get the data of the resume. Okay? And inside data.success, we will get true. Inside data.message, we will find that the resume has been analyzed successfully. Okay? This is what we have done here. And after this, let's implement things inside catch.

Inside catch, we have a condition that if we still have a file here, meaning if we have file.path here. Okay? What I mean is that whenever we call this upload file function, okay? Okay? We called the upload resume function and there was some error.

Suppose we got an error and this error appeared at least 50 times. So one of the 50 files of 2020 MB will be stored inside our upload folder, which can create a problem for us. Okay? A lot of files will accumulate. To avoid that, we do something here.

If an error comes to us and we add a condition that if file.path exists, we need to do something here, we need to add await again and write this here in such a way that we add await and fs.unlink with file.path.

We place it here so that it gets deleted. Okay? Whatever file we are uploading, if there is an error, okay? It will be unlinked here. And if file.path is not available... sorry, if we do not have the file here. Okay? So we need to do.

If we have a file here, which we are getting from request.file, if we have that, then we need to do things here. Okay? And after this, if any error arises, we return something. We will return server error here.

So we will give status 500 here. We will make success false here, and we will not put anything inside data. But inside message, we will put whatever our error is. So inside error.error, there is a message for us. If I write here, then there is a message in error.

So we will return error.message here this way. So we have done this much work here. Okay? We have done this much work here. And along with this, if we also log to the console. If any error occurs, we log to the console as well so that we can see it in the console.

Okay? We write whatever the error is here in this way. So we have done this much work here. So what all have we done so far? So far, we have done this much work. We have taken a request.file of the PDF here. It has been given in a PDF storage through multer.

But until now, we have not used this multer anywhere. Where will we use it? I will tell you shortly. Okay? When we create its route, we will use it then. Okay? After that, what did we do? Through the file path, we extracted a test.

Okay? We provided that test to the agent. Where the LLM is invoked, we have a prompt and we are getting some data from it. Okay? We are saving the data inside response.content, and we are saving that data inside mgo TB.

We are setting it in Redis and after setting it, we are deleting it. Now what I need to do here is that the resume data we sent to our front end must also be retrieved here in the front end. Okay? So the data will only update as soon as we upload a file.

But we will also have to retrieve that data. So let's create a GET API to retrieve that data. We will only get the data in the response. But we will also have to retrieve that data inside the front end. So we need to create a GET API for that.

Let's create a function here called export cost, and here we will write get resume and set it equal to an async arrow function that we will create here. I will write the async arrow function like this. And inside this async arrow function, we take a request, comma, response. Okay? And most

importantly, what do I do here? We get our user ID. And how will we get it? As we did earlier from our headers. So we will copy this from here. We will get the user ID from request.header. So simply, we will get the user ID here. Okay? And how will we use this user ID?

Because we need to find our resume data from MongoDB here and get it from Redis. So we will need the user ID for that. So let's write the user ID here. Okay? Like this. After that, what does Redis do? It creates a cache for our cached data.

It puts data inside the cache. So let's write like this that cache is equal to here we will take some data inside a variable for a cache. First, we will add await. And now we will use Redis here. We will use Redis.get. So that means

we will get data from Redis. And for that, we will need to provide a key here. We will need to give it a key. And what is our key? It is our resume. So let's write like this resume. And what do we need to give inside the resume? We need to give a user ID inside a dollar,

which will be its value. Okay? This key is our user ID. We need to provide this so that we can get that data. Okay? So what will come inside the cache is the data from the resume that we have set, which data is it? The resume data we can access here like this.

Okay? So if we now set a condition that if there is data arrived inside the cache, we have received data inside the cache. Then we will return a response.status here. We give 200 for status

and inside .json we will do things like this. First of all, we will write the success here as a second here like this. We will set success to true. Okay? And after that, we provide a source here from which source our data arrived. Okay? From which source did our

data come? So we write inside source Redis. So we have got this data from Redis, so we can see from the front end where we are getting the data. We are getting it from Redis or from MongoDB. Okay? We provide a source here, and then we provide data here. And how will we

take this data? So here we parse it through JSON. I write here js.parse which data do we need to give? The cached one like this and since here we were providing with js.stringify we now need to parse the date inside JSON. Okay? Which data? The data from the cache and we will provide it inside the data.

Okay? So whenever we call this get API, we fetch a result here. So inside result.data.data we will get the cached data. Date result.data.source will give us the source Redis and date result.data.success will give us true.

Like this, these things are ready. Okay? Now let's move on and first, I write this whole thing inside a try catch. So we write try catch like this. And the work we are doing here, we cut it from here and write it inside the try.

Okay? Like this so that we can also access the error. We have done a bit here. Okay? So now if I assume there is no cached data here. When is this condition working? When are we returning from here when we have cached data?

There is no cash data. So let's assume it's okay? When we get to this line at 93, what it means is that there is no data in the cash. That's why we are able to come here. Otherwise, we would have returned from here. Okay? From the 87 line itself. Now here we are at 93. That's

the meaning, that there is no data in the cash. So now what will I need to do here? We will get the data from the MongoDB here. Okay? How will we do that? Now we will wait here. Now I will write the Resume model like this, using Resume.findOne.

And how will we find it? Just like we had done before, how will we find it? We had found it above with our user ID. So we will find it using the user ID. We found it through the user ID, and

we have our resume. Okay? And if we apply an if condition, let's say we do not find the resume here, what will we do then? And one second, here in small is 'r', so if we do not find the resume here, we will now return an error.

Okay? And when will we reach this line? When there is no data in the cash. We will come to this line then. From here, we will find the resume data from MongoDB. But if we find our cash data, we will not even proceed further. Okay? First of all, if we do not find any resume,

we will provide a response.status here with a status of something like 400 because this is front-end data and if we are not finding it, and now we write something in json. So if it is not found here, we write 404. And we write something in json in a way that we first write success.

So we mark success as false here. Okay? We mark success as false this way. One second, we write false. And here in the message, we provide a message. And what do we give inside the message? So we give 'Resume Not Found' in there.

Resume Not Found, we write like this. Okay? We write found. We write a few things here. Okay? So we’ve checked a condition here. So if I have found the resume data here, then why are we finding data from MongoDB?

We are finding data from MongoDB here because there is no data found in cash. That means the data set we provided inside Redis was not set. It could have been deleted. Okay? That's why we are not finding it here. So what will I do here? Again, what will I do?

I will again set the data inside my Redis disk. Okay? So this thing we did here, look, we saved the data inside Redis. Let’s simply copy this from here. We had set it similarly. So after updating, we will give the user ID inside Redis.set for the resume.

And in jn.sting file, we will save the resume here. When? When he found the data from MongoDB, then this way, okay? Because he didn't find the data from cash. So what does that mean? It means that when searching through a resume, there was no data.

When he searched, then he had to set data inside this resume. For which? For the resume. So we can set it here this way. Okay? And similarly, what do we do next? We copy this way. And now we will return a response. One

second. We will copy this entire return. This way. Okay? And now what do we do at the end? We return a response. We return success true. And here, we provide a source as some MongoDB to let us know that we found data from MongoDB.

And now, I don’t want to do json dot parse here because we are not taking cache three data. We are directly getting the data inside the resume, and we provide that same resume directly like this. Is that okay? Because where did we get this resume from? We got it from our MongoDB.

Okay? Like this. So we have done this here. So this much work has been done, and in the end, if an error occurs, we return the error that we did above like this, and if there is some error, we write that error inside the cache. So first of all, we log to the console whatever.

If an error occurs here, then after that, we return the response in this way, giving a status of 500 and setting success to false and providing the error message inside the message. Okay? So this is our get resume here. So let’s write this.

So this 'S' keeps coming back repeatedly. So we write get resume like this. Okay? So we have done this much work here. We have created two controllers of our own. One is upload resume and one is get resume. Now we will create a route for them, and after that what will we do here? Inside the front end, we will have one.

resume screen page here. We will create a resume screen page. We will do step by step things there. For example, first, we will get the upload done. That is, we will create an area for upload where we will click to upload our PDF. Okay? Then after that, if our PDF uploads.

and we get the result, then we will have our step two data here. There will be a step two area where we will show all the analytics related to our resume after analyzing it. We will show the score. After that, we will show all the data, etc. here. Okay?

So let's do this job here. First, let's create a routes file. So we go here. We create a file which we name resume. One second, the server is running here. So we write resume dot routes dot js here. Okay? So this is how.

we do things. Now how do we create a route first? First, we have to import express here. Where will it come from? From express. Okay? Now here, just like we initialized the app. Here we create a resume router. I write.

I am saying resume router equal to here we use express dot router, express dot router. So here we have created a router for resume. Okay? And now we start making requests here. So resume router.

makes a post request here. Where will we do this? So here we do slash upload. We give it a route called slash upload. Okay? So we make a request there. So if I make a request like this here. First of all, the local URL gateway is 8000.

API slash resume slash upload if I make a request here, then what we need to do at that time? We need to call our upload resume function which is the handle function. Okay? So first of all, we need to insert an upload middleware between these all. Look, so the upload middleware is coming from.

Where? From the middleware. Okay? It is coming from multer.js. Now I need to give it a file inside this. So we have upload dot single. We write here upload dot single, and what do we provide inside this? We provide it with a file name.

And we have to give the same file name here which we will send from our front end. So we will send a file named resume from the front end which we will provide through upload here which will cause the upload to.

It will be entered inside, and along with it, he will save it here under the same name. He will also check that. If this works for us then, our upload gets completed, and after that, we need to call the handler function that we created for uploading resumes here. And we will add JS here in this way.

One second, we write the name of our file, meaning the name under which the file will come, in double quotes as a resume. So we will do something here. Okay? First, we will make a request to this slash upload. After that, we will add an upload middleware in between. This will allow it to access a file named resume.

It will place it in a folder named uploads. Okay? And what will we do with the uploads folder? We will access it inside the controller. We will extract its text and give that to the agent. That agent will provide us the response and.

MongoDB will save the data within. Okay? So this is our upload resume controller that has been created here. Again, let's make a GET request to the resume router here. Okay? Because now what I need to do here is? I need to get the resume. So I will write here.

I will write /get/get resume. We will write here like this. So now we need to get the resume, and we should not add any middleware in between, and we write a direct handler function here called get resume which will come from our resume.controller. Okay,

So in this way, we have created our two routes here, and I will also export this here so we can use it somewhere in our index.js. I will write export default here like this and write.

I am the resume router. Okay? So this much work has been done. Again, we will go inside index.js here. And now what I do here? I apply an app.use here with the slash route. And we will use the resume router that we created.

The resume router, which is coming from here. This will get imported above. Okay? In this way. So now how will the request be made here? So first the request will go to our gateway. Okay? The request will go to the gateway URL at local.

It will go to host 8000. Okay? After that, slash API slash resume API slash resume will work here. Okay? Now it will check what we have in front of this. Then it will come here to our index. It will come to this point. Then it will check here.

Slash. So after the slash, it will check and go to the resume router. If there is upload written after the slash, it will call the upload resume function. If there is get resume written after the slash, then it will call the get resume function.

Okay? This way our things will be here. And this much work has been done here. And okay? This much work has been done. And here, one more thing to do, we are taking the port from process, and 60001 is probably our auth too. If there is by default something here that.

doesn't find a port within our auth. Okay? Then it will request to 60001 or 601 here. Okay? In this way, regarding auth, we will need to update this. Where do we need to do it? We need to do it here. If we look at resume index.js here.

Okay? If it does not find port 82 here, then it will run on port 600. This is how things will be. So this much work we have completed here. Now what do we do? We start working on the frontend. What we need to do is temporarily turn off our backend.

Now inside the frontend, what I need to do? I need to create a score page inside a page. Okay? So if I go here. Okay? So if I go here, we need to create a resume scorer page here. Where we will upload.

We will analyze the resume and this will save our data inside a MongoDB. Okay? Then we will retrieve the data and display whatever our data is here in the resume scorer, where it will tell us what our scores are, what our strengths are, and what our weaknesses are.

What are our recommendations? Okay? We need to create something here. So you will see an area here. Okay? Where you can see a section to upload first. Okay? So what is this upload section here? Through this, we will upload.

the PDF here. Now I will show you the second section here. Okay? This means that inside this resume scorer, we need to create two sections. So the second section is where we have received a score. Here are our missing skills. Recommendations are shown here. Okay? It means that this.

is an area we have shown. Okay? So we need to do things step by step. If we do not have the uploaded data, meaning if we do not have the resume data, what will we do here? Then we will show an upload area here. If we have the resume data, then what will we show here? It will be.

our analytics score, etc., meaning we will show the second area. So these things we need to create in our resume scorer. So let’s start creating our resume scorer. First, we create a route for the resume scorer here. Okay? So now what do we.

do? First, we have temporarily closed our backend. Now what do I do in pages? I make a file here which I will name scorer. Okay? We'll name it scorer.jsx like this, and I will write RFC here so that this returns.

the export here as scorer. Like this, so now we need to create things inside this scorer. First, let’s make a route for it that we will create in this way. So we will copy the route that we created for the dashboard and paste it here. And we write.

 scorer/scorer here, and what do we have to do here? We need to lead it to the data of the scorer. Okay? So we need to show the scorer page here. So we write it this way that the scorer will come from that page. Okay?

We only need to get one user's data inside this scorer. We need both the user and set user data here. Okay? One user and set user within parameters like this. Okay? So we go here and write inside the parameters, user and set user like this. Hence, we get the user.

data, and at the same time, we also get the set user inside the parameters. From where? From F.js. Okay? So if I write here in the scorer, user.name. Then the name will be visible inside the scorer. Let's go there. If I refresh this.

now, wait a second, we will see an error here. One second, let’s go into app.js. So if now I click on the resume scorer button, we have arrived at slash scorer. But why is the user data not showing?

one second. So let’s do this; wait one second. Let me go into the scorer and give it a class name. Okay? Here, if I set the background color to black like this, and the text to white. Set the text to.

some white. One second if we go here then see now the text is visible because the text was white before and that is why we couldn't see it, but now it is visible. And why was our text white? Because we had what we did was in our index.css.

Inside here, we changed the text color to white, so it took on a white color there. Right? That's why it wasn't visible to us. But as soon as we made the test white here and set the background to black, it became visible to us.

Writing became visible. Right? This means that our score area has also been properly created here. Look, I'll remove this for a second. So the area for our scorer is also visible here properly. Now we need to manage things inside this scorer area. Right? Its CSS here.

We remove it like this, and we also remove some usernames here. Right? First of all, what do I do here? We start creating our scorer area. First, we need to show an upload section here. Right? We need to create an upload area where we can click.

What will we do? We will upload our PDF here. Where? We will upload it to our server on our resume service. From where we will get some data that we can check via console log. And as soon as we receive the data here, we will store that data.

We will have to set it somewhere for resume data; we will use state management there, and we will use Redux, React-Redux for our state management, and there we will create a slice for the resume and set that resume data here.

So that we can use that resume data wherever we want, we will be able to use it in our interview area and our roadmap area to access the resume data. Right? So we need to do this here. First, what do we do? We create an upload section here.

Which allows us to upload the file and see if we get a response or not. Once we receive our response, we will set up our React-Redux here. We will set the resume data, and if we have the resume data available.

Now, which area are we returning? We are returning our upload area. But we will place a conditional statement that if we have resume data, we will return something different here. This means we will return the other area where our resume score was visible.

Our missing skills, weaknesses, strengths, recommendations, that area will be shown here. Right? We need to do this. So, first of all, what do we do here? We create the upload section inside this.

So first, we need to show our nav bar. Before that, we create the main div for this section and give it some CSS. Then we create a separate nav bar component here. Because we can use the nav bar component in two places. We can use the nav bar component in the upload section and also in the analytics area.

So we can also use it there. Therefore, let’s create a separate component for the nav bar above. Right? Before that, we create the main div for our upload section. So here, I will write that this return is for what we are creating for the upload section.

So we write upload section. So when our user data means that if the resume data is not available, we are returning the upload section here for the upload section. Right? Like this. Now let's give it some class names. So here we first set it to min-height. The background.

color gives some white, and we set this to black type. And now here we create a nav bar. So here I write that we create a nav bar like this and create a function for it here.

What do we need to return? So we will proceed with the return. Okay? This is how we will set the curly braces. And now I need to make some return here, so we will return it this way. First of all, we will write the level here. We will take the level inside a parameter because this is our nav bar.

We will use this in many places. So we will use this nav bar, which is a nav bar. So inside it, we will take a level label that we will also provide with the label. Here, like it will be written fresh. After that, a box will be written containing our resume scorer. Okay? We will provide it with some labels.

Now we will proceed with returning here. We will take a nav here like this. Okay? So we will start making a nav bar here. We will assign some class names to it. So first, I fix it. I set it to x0 here. I set the top to zero here. Z.

I set its index to 20. We set a border at the bottom here. Some border black 8% transparent and background color we set to white 80% transparent, and for backdrop, we blur it. This means that it will appear as a glass type here.

And where do we need to place this nav bar? We need to place this nav bar here. So we import the nav bar here. Okay? And along with this, we also provide it with a label here. And we write in the label like this: resume scorer. And here we write like this.

We write the resume scorer. One second here, let’s write it in double quotes. Let's write it like this in double quotes. And we remove this. We remove this. And we write the resume scorer here inside the level. Okay? Now inside this nav bar, we create a div.

And in this div, we will have two things. So we will give it a class name. What items will we have inside it? First, we will have an icon written as resume scorer etc. Okay? We give it some class names. So here.

We give it the class name. We set margin x auto. Flex height, we set it to 12 here. Meaning a maximum width of 48 pixels we set to around 7 excel. And we start justifying items center. So whatever we write inside this div will come forward.

Okay? And for justify start, we give padding x something like 3. For small, padding x something like 5. Now we create a div inside it. Now inside this div, we will have our first fresh area written. Secondly, we will have our label attached to it. Okay? So we give this div.

Some class names here. So we give it some class names here. Flex cursor pointer and here we write text center gap something like 1.5 and inside it, we need to create two spans. So we write span here, and we need to create another span here. So we will write it too. I will write like this span. First of all.

In the first span, we need to write something like this. We will write fresh AI here. So here we write it like this fresh AI. Okay? And inside it, we write whatever label we have given here. For example, we give the label resume scorer, so we write that here. Okay? And now first.

Look, when we click on this div, we should go back to the dashboard. So we need to add an on click handler here. Okay? And to add on click, we will need a navigate function as well. So we write it here. Inside this, we write navigate equal to.

Here we write use navigate. Which will come from react router dom. Okay? One second, I remove this navigate and write this navigate here. And now where will we navigate? So here.

We write slash navigate and we need to navigate to slash dashboard. Okay? We should go back to the dashboard again. So here we write like this: dashboard. We have done this much. Now let’s give some class names to this span as well.

We give a class name to the span below. So here we give it some class names. This is for text small font, some extra bold, and in small text base and some black type. Okay? Now, let's give this span some class names. The label ones. So we give it a class here.

We first make it hidden in our small devices. Okay? And we round it. So here we round it. And look here, we are blocking it in small. This means that if the width is more than 640 pixels, then it is blocked here. In fact, if it is less than that.

If the width is less than small, then it will be hidden in the same way. So here we round it. The background color is something like black 5% transparent, padding of about 1.5 and padding by about 0.5, and text of about 10 pixels and text.

Here it will be black 50% transparent, and in small, we will block it. This means that if the width is less than 640 pixels, it will remain hidden there. But in a larger width, it will be blocked here. Okay? And if I look here, we have created a nav bar. See where it says.

'Fresh AI' and here inside a box, it says 'Resume Scorer.' Okay? In this way, we have created a nav bar. And if I click here, we have come back to the dashboard. We click here. So we have reached our scorer page. Okay? In this way and.

There is also a border at the bottom here. Now what do I do here? I create an upload section. So first, we go again and now create another section inside this nav bar. Okay? We create a section here and give it some class names here. In this way here.

We flex it. We make it a min-width screen. We center the items and justify center padding of about three. Padding top about 18. And padding bottom about six. Okay? Now after that, we create a div. We create a box inside it. So we create a motion box. So here I.

Go and import my motion here. Just like this and we can place this motion above. Here let's import the motion here. Okay? And here I write it like this, 'motion.js.' Okay? In this way, we write 'motion.js.' And if we want.

We can also make this nav a motion. So I write here 'motion.nav'. We write it here in the same way like 'motion.nav'. Okay? And inside it, we apply the properties of motion that we had applied here in our home. Okay? See what we applied; some.

Initial properties we had applied. We copy this. This means that it will remain bi-directional upwards. It will come down from above. And here for duration, we set 0.5 and ease in out. So we apply the same properties to this scorer's nav bar too. Okay? So we go here and in this way.

We apply properties. We will also apply some properties like this inside it. Before that, we give it some class names. So here what do we do? We give it a class name. We make it relative. We make its width full. Where our max width.

We set it small. This means that we give it 384 pixels here. And if our width is smaller, meaning if it is less than this, then it will start taking the full width. And okay? This means that if our screen width is less than 384 pixels.

Then automatically it will start taking the full width. Okay? And rounded, three excel overflow hidden, background it will be black 90% transparent, which means we make it transparent, and backdrop filters have to be some two excel.

We give it. This means we give it a black type here and it means a glass black type screen and completely transparent, and we give borders, the border will be white 10% transparent, padding will be four here. Shadow about eight pixels 32 pixels RGBA.

There are some black color small paddings and a few six. Okay? Now, from this, we understand that we have a transparent type of glass screen. So what do we need to do? Again, we will create a closing div where we will give it a gradient color that will fit inside. Okay? Inside what? Our.

It will fit inside the motion dip. So we give it a class name here. So we provide something like this. We set it to absolute, insert zero, and give it a gradient color here. Background gradient color to bottom right from white, around 0.08%.

Transparent and then here we make it transparent again to transparent and set pointer events to none here. Okay? In this way. So we have done some things here. And if I go here, we can see a black box of this type. And if I refresh this, then.

Our neb is coming from top to bottom. Just like this, we need to bring it from bottom to top. So we will also add some properties inside it. So the nap we have used here is nearly the same as what we use. First, we copy this.

We paste it here after copying it. And here we will bring it up with plus 60. Okay? This means we will bring it from bottom to top. We provide some duration and instead of ease in and out, we provide a delay here. Okay? We add some delay to it. What delay should we give it? 0.0.

We give it a delay of 5 seconds here. And if I go here and refresh it. So first it came down and then it came up. Okay? Like this. Look, it is coming up from bottom to top like this. So we have animated this here. So now what do I do after this? I take a paragraph in which we will show.

That we will display the progress type here, which will say step one to one two written here like this, and we capitalize the step. Okay? After that, I give some class names to this paragraph and make it relative.

Text some 10 pixels text some width here as 40% transparent and tracking some wide upper case and here margin bottom some 1.5. So if we go here, then it is being written like this as step one two two. Okay? So next, we are creating a div and giving a line.

Type here. So we give it a class name here and make its width relative, full. Height, we give it one here and background, we set it white with 10% transparent, rounded full, and margin bottom some four. Again, we are creating a dip inside it.

And we also give this dip a class name. And one second, we do not create a dip like this. We close it here. And we give it a class name too. Some height one and background some white and rounded full and width here some 1/2. If we see here, it will be displayed like this.

Our whole div means the entire line is here, where there is some gray color in it. But a line that is half here, whose width is half, is here in white color. Like we realize that we are currently on step one, and when we complete step one, we will then go to step.

two. Okay? So this is a way to indicate the steps that we are currently on step one. We are currently uploading. As soon as our upload is completed, we will come to step two. Here, we will see the entire area where our score will be and all the other things. Okay? And now after this, what do we do?

We add an H2. And we give this H2 a class name. We set it relative. Text large, font bold, margin bottom one, and text white. And with this, what do we need to write? Inside it, we will write upload your resume. Upload your.

resume written like this. Okay? That's it. And after this, we add a paragraph. We give the paragraph a class name here. And we provide it like this. We make it relative. Text some white 45% transparent and text extra small.

The margin bottom is a bit four. And then after this, we write what we have to write inside it. So here we write, "We shall score it and give you actionable feedback." We write something here. We write something here. Now let's take a look at how this is appearing. So, this is how it is appearing here.

After this, we create a label here and inside that label, we will make inputs so that if I click on the label, it clicks automatically on our input as well. So, we do something here. So, first of all, we do one thing that we make a use state here. Okay? I write here, in this way, cost file.

And that means we are making a use state. So we make it this way. I write file comma set file here. Okay? It means that when we click on it, we will set the file here, and through this file, we will be able to access that file. How will we set it? Here we write use state and set.

We will set it after clicking on these inputs. Okay? Whatever our first file will be, we will select it. Now we write use state here. And this time we null it here at the start. Okay? We null the use state here at the beginning like this, we have done this much work here, and now here.

We go back again, and now here we are making a label for our own, okay? We create a label here, remove HTML for it for now, and now we give it some class names, and we will give the class name in such a way that if there is a file here, then its background color will change, meaning that if we have already selected some file.

That means that if we have not selected any file yet, then its background color is different and as soon as we select any file here, what does that mean? Some data has arrived in the input of the file. So at that time we will change its background a little so that we can see whether it is selected or not. Okay? So we have some.

Class names here. So we will give it like this here. We set it to relative. We make it flex, flex column. We center the items, justify center, full width. The height here is set to 40. If the width is more than 640 pixels, then the height will be about 48.

We give it here. Rounded to excel, border to two and border we give it a dashed here and cursor point and transition color we give. Okay? Now we put the same condition here that if we have a file here, meaning that we have selected some file here.

Okay? Meaning that we have put some value in the set file. Then here the border will be something like white 40% transparent and its background color will be here something like white 0.06% transparent. Okay? But if there is no file here, then its default here.

Its border will be more of a black type, and the same its background will also be more black here, and when hovered on it, its border will become something like white 30% transparent. Okay? In this way, if I go, then there is no file selected here right now. So we can see the area like this here.

Okay? And if we hover over it, look, its border is changing like this. And as soon as we upload any file here, its background will change a bit here. Okay? And now after this, we do one more thing that inside this label first I need to place an icon.

The name is F.I Upload Cloud, there is an icon called F.I Upload Cloud. We place this and give it some CSS here. We will give it condition-wise CSS inside it too. Okay? And how will we give it? If the text is more than 640 pixels, then the text will be five Excel here.

Margin bottom is about 2.5 and if there is a file here, then its text will turn white. If there is no file here, meaning that we have not set any file in the text file, then the text will be here about 30% transparent.

If we go now, there should be an upload icon visible here. We need to click here to initiate the upload, and for that, we also need to provide an input here. Okay? So now, after this, we need to add two paragraphs here. Alright? We need to add two paragraphs like this. Let's write inside them and add them.

Let's add some CSS here. Alright? So look, we will provide two paragraphs like this. We will give this a class name test, some extra small font, some medium text, some white transparent, and now according to the file, if we have the file here, it means what? It means there's a value in the set file, and whatever that file's

dot name will be, it will be written here; otherwise, it will say click and drag PDF here. Okay? And there is another paragraph where the text is something like 10 pixels, text is white, here it is 35% transparent, margin-top is something one, margin-top is something one, and

it says 'PDF only' here, and there is a dot here, and it says 'max 20 MB'. Okay? It means it’s written here as 20 MB. So if we go here, this type is visible here. Now we create an input below this. Alright? And we will keep this input hidden. Okay? Meaning that

if we click anywhere here on this label, it will automatically click that input. So now, under this paragraph, we will place an input. I write like this for the input. We write an input like this here. And first of all, we give this input a type here.

It’s file. We set the type to file because we need a file, and after that, we write in accept like this, pdf, meaning we accept only PDF here, meaning we write PDF here. Application.pdf, right, so we write pdf here. After that, what do we do? First of all, we give it some class.

We will name the class, and what will we do with it? We will hide it. Okay? Meaning this input will not be visible. We will hide it. After that, now we need to set the value through this input in our set file. So here we add on change.

like this. Okay? Here we write on change, and after on change, we get an event here. E is an event that gets called here. In which what will happen? Inside which we write what will we put in set file? E.e.target will have our

files, and from there, E.e.target.files, the zeroth file will be whatever file we select first will be set here in set files. Okay? So as soon as we add any change event, it gives us an event E, and in its E.

inside target, we will get a zeroth file in the files that we have previously selected. Okay? So we set it in set files. So we have done this much work here. So now if I go here and if I click on this, like this, if I click down here.

or if we click anywhere here, wherever we click, it will automatically open a PDF section here. So let’s go to download; all the PDFs will come here. And in this way, if I upload any PDF, like I have one here, one here,

I have Ankush Sahu's resume, a demo resume. We will upload this. As soon as I upload it, here the value of set resume means the value in set file comes, so it wrote the file name here, and automatically its background color has changed.

And the upload icon, which was gray here, has now started appearing in white. Okay? So this way we can also set file values, etc. Alright? We have completed this much work. So our file is being set. Now, what I do here is that the upload.

This is a function where we created an API for controlling uploads within our resume service, and we fetch it here. Okay? So what do we need to do here before that? We need to create a motion button below the label here. This way we will click to perform actions. So let's create a motion button.

Here we give a class name and the class name will be something like this. We make it relative. Margins top some four and width full. Height we set to about 10. Rounded excel font to extra small and background we set to some.

White here. Text we set to black color here. Shadow some zero four pixels 14 pixels RG here we set to gray color. And on hover, its background color here will be white 90% transparent. And if it is disabled, its opacity will be.

Some 40 here. And on being disabled, we will not allow the cursor. And we set transition to all. And when do we need to disable this? So we add a disable property here. So here we write disable like this. And when do we need to disable it? When we do not have.

A file here. Then we will disable it. And we also do one more thing. We go up here and create a use state. For what? For our file and similarly we place a loading here. Okay? Here I write loading, set loading that when.

This API equals our state, we will run a loading until then. So we write here like this use state and for now we set its value to false. Initially, this will be false for us. Okay? Like this. So if we add another condition here.

Like this and if it is loading here then we will disable it. Okay? Like this and now what do I need to write inside this? So we will write things like this that if our loading is true here then I will write like this analyzing. And if here if loading is not.

Going on then what do we need to write here? So then we will write like this analyz resume. Okay? And along with that we provide some motion properties as well. So those are the same properties. We give here while hover. So on hover, its scale is.

Set to 1.07 here. And we also apply a while tab property. Here we write while tab. One second while drag no while tab. We write here. Okay? Tab and while tabbing we set its scale here to some 0.97 like this. Okay? And.

We need to put on click here as well. So on clicking, we will make an API call. And for that API, we first create a function here. Okay? So here I write cost upload resume. We create a function named upload resume like this. Equal to an async.

Arrow function here. Okay? Now we are going to make that same API call. So we write it inside try-catch like this. And now what do I need to do here? As soon as I click on this button, we set on click here so we write here like this on click so on clicking we need to call the function.

Here we will upload resume like this. Okay? So we will do this work here. And first we go to this function and fetch our API. Okay? So first we go here. We go up here. If our if we do not have a file here. First, that button will not even click. If.

By chance, it gets clicked by mistake, then we write like this in the alert, please select a PDF. Okay? And now here inside try I set loading, I set loading to true first as soon as we click on this button if we have a file then we set loading.

Now we will set the response like this. We will handle the response here, so first, what do we need to do? We need to ensure that if there are any files, images, etc., inside the form data, we need to set them in the form data before giving the response.

Okay? It means sending it from the front end. Let's do this work. So here we write it like this: cost form data equals new form data. We write new form data like this. Okay? Like this, and now we will append inside the form data. We write form data dot

append. And what do we need to append? We need to append a file named resume here. Which file are we saving here? Okay? It means we are setting it. Our file has now been appended inside the form data. Now, where will we send this form data? We will send it to our resume service.

Okay? Inside which we will have a file called resume that will have access to our upload. Through upload dot single, we were giving a resume. So with this name, it will access whatever file it gets and where will it place it? In the upload folder.

Okay? Now what do we do here? We will bring back the same simple response. First, we put await here and how do we make the request? We need to make an axios dot post request. But here, I told you before that we created an axios in the utils where we were providing the base URL. So if now I

make an API dot post request here, there will still be an axios request here. We have already given it the base URL. We set with credentials to true before. Okay? So now we go here and write it simply like this: API that comes from our utils dot

axios and we make a simple post request here. So now we don’t need to write the server URL because we have already provided the base URL to this API. Now what do I need to do here? We write the slash API and we write the like this resume API slash resume slash upload where we need to make

a request, and along with that, we will provide it with the form data in this way. Okay? And whatever data comes back in our response, we will log this to the console. Whatever response dot data, we will log this to the console like this. Okay? If there is any error,

we will log our error to the console. And also here in the alert, we will write something. For example, if there is an error, we will write upload field here in the alert. We write upload field here like this. One second, we write field here like this. Okay? We write this here in the alert and

also here we should set the loading we are setting to true back to false again. So we set loading here like this to false. Okay? Similarly, if there is any error, then we will also set loading to false here. We do this here.

Now what do I do here? I simply go here and open the console. Okay? And refresh it for a second. Now it is like this. One second, it is written like this. Now what do I do here? Look, the hover is happening on this button.

But we cannot click on it because the cursor is not allowed. When we click on this, we will upload a PDF here, I have a PDF named demo resume. Let’s upload this and click on analyze resume, so a request will go to localhost 8000.

The request will go to the API resume upload, which will enable our AI to work. Okay? Our AI will work and it will save the data in our MongoDB and set the data in Redis. Okay? And whatever response will come, it will also return to us and will be displayed here. So let’s click on this.

The upload field has arrived here. We are getting some 500 error. Let's check what error is coming. Is that okay? So, the error has come. What has come is the export cost upload. Upload has already been declared. One second. So the upload has already been declared.

This is coming under our multi-tier like this. So where are we going here? We go to our backend. Here, inside services, we will go into resume services, within middle back, inside upload. Here it tells us that the upload is already here. So do one thing, don't do it this way. Okay? Don't do it like this.

We will directly export it right here. We will write the export cost like this. And now we go back to routes and cut this from here. Let this come here automatically. Is that okay? So here we write upload. Now see.

We click enter on this upload. Now it has come under curly braces. Is that okay? Now if we go back here and run this again. Run npm run dev. Now let's see if an error comes or not. So here the error has come again that response.

Inside config pdf, we are setting result equal to await here. Is that okay? While we might not have created it as an async function, it is coming because of that. So here we go inside config, inside pdf.js. So yes, look here we are using await. But we haven't made it an async function.

So let's write async for this like this. Is that okay? Now we go back here. Again some error is coming here that says grok variable and provided the key in the info API, it is saying that it cannot find the API here. Is that okay? One.

It is throwing an error that API key not found while we have provided it inside the KB with the name grok, but it is not finding the API key inside which? Inside LLM, it is not finding the API key here. So it cannot access from enb here. So let's do one thing.

Here we import it. I will write import here. Where is import coming from? It will come from this. So let's write it here, and here we write .config like this, and now if we go back and run this.

Look, now our complete run is done. Now no error is coming. Is that okay? So we fixed two or three errors here. The first error was that inside multi-tier it was not exporting correctly. We exported it right here. Is that okay?

Thus we wrote export cost upload here. Secondly, we are using await inside pdfs here. But async was not applied here. So we applied async, and inside LLM, it was not getting data from enb. So we imported it above ENB here. Is that okay? Like this, and what will LLM do?

It will access ENB directly. Wherever it mentions grok API key, it will be able to access that. Is that okay? Again we will go back here, and now we request again. So now I click on analyze receipt again. Now look here, it is coming up saying analyzing.

Again upload field. So what error has come now? The 500 error is still coming here. Let's check again. So yes, we can solve the errors etc. No problem. And what is the problem here? The CV argument must be of type.

Function. It is showing something here. So there is a problem arising here. One second. When here we see file is not defined it is showing and the CV argument must be of type function, it is saying something and where is this coming from unlink when we are unlinking it. One second, so here.

We are using unlink, so here let’s apply async unlink. Is that okay? Let's do that. When we are unlinking the file here. Same here we apply async unlink like this. Is that okay? Let's do something here. Now if we go back again our run will be repeated.

There is a mistake. We request again, so we will request again here. Okay? We are requesting again. Let's go back here. Analyzing is coming through. And as soon as analyzing is complete here, we have received the response here. Okay? Success is true for this.

Each message is coming in, resume analyzed successfully. True is coming inside success. And we have received complete data inside data. If I expand it a little here. Let's make it a bit bigger here. Okay? This way. So now if we look at it, you will see

inside the data, created has come up and inside education, what education has been taken is being written. The email ID has been received. There is nothing here regarding experience. Okay? Inside the extractive test, our complete PDF test will be here now. Our missing skills are. Name, phone

we have received. We have received projects. We have received recommendations. Skills, strengths, and suggested roles, summary, and user ID, weaknesses have been received. Meaning we have received all the fields inside our response. And if I go here to my database and

if I go to my MongoDB database, and check whether our resume model has been updated or not, we have opened our fresher AI project in MongoDB, and there is an option to browse collection, let's click on this.

As soon as we click on it, you will see that a resume has come along with a user because we wrote a slash resume there, creating a separate collection for our resume, and here inside requests, we have a resume that we just uploaded.

Okay? Now look at one thing, we have uploaded a resume here. If we upload another resume from the same user, what will happen here? So our user's resume has been uploaded like this. Okay? If I upload a resume from another account here. If I do it from localhost

5173, it's an account of Ankush. The account that was there was our Ankush Sahu account. So now here, we upload a resume from this account. Okay? So we will upload the same resume that we just did. Open it. We upload the resume from this account as well.

So our resume has been uploaded here. Data has arrived inside the object. Okay? So this data has come this way. Look, if I refresh it again. So we have received another resume's data. Look here, so now we have

two resumes here. One from another user ID, this is some 6A5B, and one user ID here as you see 6a5b 43 6a534, so it means that the IDs are different here. Meaning it belongs to two different users. So now I do one thing, I bring a demo resume from ChatGPT here.

I mean, I bring a PDF of a demo resume here, and we rewrite it slightly against the one that we already have uploaded. Okay? So I just took a resume of a backend developer from ChatGPT here. Okay? So now

what do I do here? I upload it from a different account. Since this was from our Ankush Sahu account. So what do we do here? We upload a new resume. Okay? And inside the new resume, we have a backend developer demo resume, let’s upload this. Copy

it's writing backend developer demo resume here, and we click on analyze resume this way. So analyzing is happening here, and after analyzing, you will see an object arriving in the console. Here it has now analyzed the data. So here comes Rahul.

Sharma, who is possibly a user, was in our dummy resume. So here Rahul Sharma must have taken it. He wrote something like this about X University. Alright? He provided some number here. All the demo items mean that everything is now in the demo. So if I go here, if we go here on MongoDB.

Then right now there is Ankush Sahu here. Alright? Look at this account with Ankush Sahu written on it. There is also Ankush Sahu written here. So there are two that are the same here. But if I refresh this, there will be two resumes here. Just one will be updated.

Let's refresh this. So one of the two resumes here will get uploaded. It will be updated because it will rewrite it here. So you will see that there is one Ankush Sahu and one that we just updated for Rahul Sharma, which he rewrote here. So his fields have been updated here.

Look, it has been updated. What does it mean? What we wanted was to update the existing resume of the user. So that task is also happening here successfully. Alright? Properly, in the sense that everything is being done here. Now here we will do one thing. As soon as we receive resume data.

We will set it in our Redux. We are using React Redux here. Alright? And we're using state management. So we will set the resume data in our set resume. The get resume API will be called.

Basically. So we will set our data there. After that, we will create a page where we will map all the data we have received. Meaning, we will map the user's score? Name, email, and everything else properly.

Alright? And we will not show this step one section. We will show that section. Alright? Let's do this task. So we close the backend for a while and go here and search for React Redux.

Alright? We search for Redux React here. Alright? We search like this, and one of our websites for React Redux will come up. Let's go there and click on Get Started. Alright? And here for TypeScript, we will click on a start.

This way you will see that we will have everything available. How to start. Before that, let's go to our tutorial. Let's go to the tutorial. So yes, look here, we have some commands available. Among which we need to npm install for Redux Toolkit.

And we need to import React Redux here. Alright? Then after that, what do we need to do? It is telling us to create a folder for Redux inside the app. Inside it, we need to configure a store in restore.js. Then our main main.jsx will be here. It says index.js. But we are wrapping the app in our main.js.

Alright? There we have to wrap it with a provider that will come from React Redux. After that, we need to create our slice here. This way.

We will create slices and we have to write that slice inside the reducer of the store. So we have to do all this. We have to set up our Redux, and if you have been following our channel for a long time, we have done Redux work many times.

Alright? Many times. But here we will go step by step on how we will set up Redux. And now we are back again. What do we do in the front end? In the front end, we can create a folder here in src. So let’s create a folder named Redux inside src.

So here we will create a folder named Redux. And within Redux, we will create a file that we will call store.js. So let’s create a file named store.js like this. And before that, what do we need to do here? If I go here, we need to run a command first.

Let's copy the command from here and run it in the terminal. Okay? And we have created an install.js file. We'll paste it inside there. So let's go inside our frontend and control C this and run the command here. Okay? NPM

Let's install react.js toolkit and react redux here and run npm run dev like this. Okay? Now this much work has been done. Now what do we need to write inside store.js? So inside store.js, we need to create a config store here.

So like this, I'll copy this and paste it here. And here we don't do export default. I write export const a store like this. We write store equals to here and create a config store here. Okay? This.

This way, we write an export cost here. We create a store here. What do we need to do inside the reducer of the config store? If we are creating any slice. We will place that slice here. Okay? So now let's understand how this store works.

If you go to a grocery store, there are many different sections there. There is a section for flour and pulses somewhere. Somewhere there's a section for frozen items. So understand one thing, there is only one store. But inside it, there are many sections for us. Just like we will create a slice inside reducers. This means we will create a section for resumes.

So if we go to the resume section, we will get the data of resumes from there. If we create an interview section as a slice, then if we go to the interview section, we can retrieve interview data. Okay? So for this, we will create different slices here.

And we will set this in the reducer, which will enable us to have many sections inside this store, each containing different data. Okay? So this is how our store will work. If we go back here, we have configured the store. But what do I need to do now? Now I need to wrap our app.

In which we need to provide this store. Now to access any data inside the store, I need to wrap the app with a provider. Okay? How will we wrap it? So here in our main.jsx, you will see an app here.

It is visible as an app. We need to wrap this. So we go down like this and write provider here and type provider because we are not finding it this way. First of all, let's wrap it with a provider like this.

How will our provider come? So we import the provider. I write import and type provider. And where will this provider come from? We'll use prom here. We will get it from react-redux. Okay? If we go here.

You see we are getting a provider like this from react-redux. Okay? So you can import it like this here. And now what do I need to do? Inside it, you will see we are getting a store. So what do we need to provide here? We need to provide a store here.

Okay? So I write it down that the store is coming from redux store.js. We provided it here. Okay, now the app can access any slices inside the store as all the slices will be available throughout the app.

Okay? This is the advantage of state management. If we create any user state, we can only use it in that file. But if we set it through redux, we can use it all over the app. This data.

Which we set. Okay? So, okay? That's why we have used Redux here. Now, what do we do first here? We create another file inside Redux, which we will name Resume Slice. And here we will set the data for the resume. Okay? Meaning we will set the data for a resume.

To set, we write a set resume and a resume here. Okay? Like this. Now how do we go about this? If we go here, this much work has been done. Now I need to create a slice here. Through create slice, we need to give it a name here. We have to provide an initial state here and a reducer.

Inside that, we have to set the value in the state. Okay? So I will write this a bit according to my understanding here. Okay? We will not copy this completely. We will write this according to our understanding here. And later what will we do? We will also write it inside our store, inside the reducer. Okay? We will manage this much work. And then you know,

if we need to set data, we use dispatch to set our data. And if we need to access the data that we have set in another file, we use selector there. Look here, you can see use selector, use state, and use dispatch.

So first here, what do I do? I write something here. We create a resume slice. Here I write resume slice. We write resume slice here. We set it equal to. Here I write create create slice. We write create slice here,

which will come from our React JS toolkit. Okay? Like this. Now what things do we need to provide inside it? First, we have to give it a name. So we write name here. And we give this name like this: resume. So we assign the resume name here. Inside what? In double quotes.

Like this. Okay? After that, we put a comma. An initial state is here. What do we do in the initial state? We take one, like we take an initial state by the name of receivable. Okay? We write receivable here. We take an initial state by the name of receivable.

We set this to null by default here. First, it means that it will remain null by default here. And now we will set its value. So, here we have reducers. And inside reducers, we set our data. So we create a reducer named set resume.

So here we write a reducer named set resume. And what will we do inside set resume? We will update the data of this resume through set resume. Okay? And inside this, we have two things. One is our state and then whatever action we need to perform,

that is an action. Okay? Inside this. We write it this way. And now what do we do here? First, we indicate the state. Which state do we need to update? So the state dot which is the resume state that we provided in the initial state here.

We need to update that. What do we need to update inside it? Whatever action we are performing, we need to update the payload data inside it. So we write action dot payload here. We'll write payload here. So we write action dot payload like this.

And we do not write it as a callback. We write it simply here. No callback function or anything is created for this. Okay? So inside set resume, we took an action, a state, and an action from which we will change inside state dot resume. Meaning we will change the resume state.

And what changes will we make? We will change whatever data is inside action dot payload. Okay? Meaning we will change its initial state here through set resume. So we will handle some things here. And now finally, we export. So I'll write export const. We need to export which set here.

The resume needs to be exported. We write 'set resume' here, so we equate it. I write 'resume slice dot' here, and we will update the extensions, etc. in this. So we write 'resume slice dot extensions' here. This is how we export it.

And at the end, we set the export default here. For whom? We set the export default here. We set the resume slice we created as the export default and use it as a reducer here. So we write 'dot reducer' here.

Okay? This is how we have done some work here. Now the resume slice we are using as a reducer, where do we need to write it? Within our app, so I will write it inside the reducer like this: resume. Okay? We set a resume here in this way, and what do we put inside it? The same resume.

What do we write alongside? We write the resume slice, which we are getting from somewhere. So we can import it. I will write 'import resume slice from' where will it come from? So it will come from 'dot dot slash one second dot slash'.

We write 'dot slash from resume slice'. Okay? So we have done this much work here too. Now what do we do here? As soon as our data is updated here. It means that we have a response dot data coming in. So now what do I need to do? Here I need to set the resume to update.

Okay? Where? Inside the score. As soon as the response comes in, we update the set resume. So for that, we have a dispatch. Through that dispatch, we can update here. So here we use the dispatch like this which will come from our react redux. So we need to use this hook. Here we use dispatch through which we can update.

So I simply write like this dispatch and inside the dispatch I can write like this. Set resume, we write set resume here.

Which is coming from our redux slice. It is coming from the resume slice. Now what do we put inside? Whatever response we received, the response dot data. Now the response dot data had three items. Okay? If I show you here, the response dot data has currently been removed. So the response.

The response dot data had three items. One was success, one was message, and one was data. So if I need to access that data, then what do I need to write here? I need to write response dot data dot data. Okay? If there is response here and it contains data, then we need to set one data in our set resume.

Okay? What things are in the response dot data? Let's take a look again. So we go into services in the response dot data. We go into resume. We go into the controller. So inside it, we have a success which is true, a message which says 'Resume analyzed successfully' and the data contains the resume. So if I need to access this data, what do I need to write here? I need to write response dot data dot data to access that resume data. And we put it inside the set resume.

And now there is no need to console log the data. Okay? This is how we handle some things here. And we have done this. So our data will be set inside our set resume. Okay? And we are updating a state here, which one? The resume one. So through this resume, we can access that data which we have set here. Okay? So now let's do this. Let's check how we can access it. For that, we write like this that const.

सेट रिज्यूुमे के अंदर डाल देते हैं। और अब यहां पर कंसोल लॉक कराने की कोई जरूरत नहीं है डेटा को। ठीक है? इस तरह से तो ये कुछ हम यहां पर कर देते हैं। और ये कुछ हमने कर दिया। तो हमारा यहां पर डेटा यहां एक हमारा एक सेट रिज्यूुमे के अंदर डेटा यहां पर सेट हो जाएगा। ठीक है? और हम इस रिज्यूे को जो हमने डेटा सेट करा रहे हैं

एक स्टेट अपडेट करा रहे हैं यहां पर कौन सी वाली? रिज्यूुे वाली। तो इस रिज्यूे के थ्रू हम उसको एक्सेस भी इस रिज्यूे के थ्रू उस डेटा को हम एक्सेस कर सकते हैं जो हमने यहां पर सेट कराया है। ठीक है? तो अब यह जरा करते हैं। इसको जरा देखते हैं किस तरह से हम एक्सेस कर सकते हैं। तो उसके लिए इस तरह से हम लिखते हैं कि कॉस्ट

We write. And if I need to access this here, what do I do? We take the data from our resume here. So I write it down like this. How do we get this resume? We put equal to. We have a use selector hook. The use selector will come from our React Redux. Then it contains a state.

Here we write like this, a state. The state dot resume will have our data inside it. So here we write state dot resume, and inside it, we will have this resume data. Okay? So if I go here and if I write like this under its section.

I write it down here with curly braces, the resume we took, resume dot name, if I write it here, then we should see the name. Okay? And the resume dot name here we do not write it here. We write this here like this. Okay? Here we write resume dot.

If we go with name step, you will be able to see here Ankush Sahu is coming with step. Okay? Step one two two, Ankush Sahu is coming here written. What this means is that the data we wanted to set here in our Redux is set here. I set step one two.

After two, here I had written resume dot an name, so whatever data is in the resume dot name will appear here, and along with it, we will also see a date here in the extension. See here, I had downloaded a Redux extension where our one resume.

Data came here with a user ID, extract test, afterwards name, email, phone, etc. So the name here is Ankush Sahu, and if you also need this extension here, you can search for Redux DevTools. It's a Redux DevTools. You can add it here.

It's a Chrome extension. You can add it here to Chrome. I already have it added here in Chrome, so it says 'Room from Chrome' here. Okay? You can add it from here. So if you set any data in Redux here, you will get all that data here. Okay?

It will be visible here. As I had set a resume. So whatever data is coming here in the resume is all visible to us here. Look, it is appearing like this, all of it. So we have done so much work here, meaning that our data in Redux is getting set. But as soon as I refresh this.

The data has disappeared. See here, too, our resume is coming as null because we don't have any data anywhere. Okay? That’s why it has become null here. So now what do I have to do? We created a GET API earlier to get our resume; we refresh that API.

And what do we do there? We set data into set resume. So, let's handle this task. How do we do this? First, we either remove what we have in resume dot name, or we do one thing and let it stay written. We will remove it later. First, we go into the API.

Just like we made a current user API call here. Similarly, we will make an API call for what? Our resume. So let’s write down resume.Api.gs. We will call this API here just as we had written for get current user in the app. If I go.

Here, just like we called the current user in the app. Here in the use effect, we need to fetch our resume data here in a similar use effect. Okay? So that as soon as we enter the app or refresh it, automatically our use effect works.

And we get the data of the resume and current user. So this is what we need to do. Okay? So we go here. Just like we did things here, we will do it in this way here. Okay? Here we will return response dot data like this. Okay? First, I will write it down here.

We write the export cost here and we write the get resume get resume data here. So we can write it like this or leave it as get resume written. And we will create an async arrow function for this. Here we write an async arrow function. And now, we don't have anything to take inside it.

We take this inside a try-catch. We write try and catch here. We write this inside a try-catch statement completely. So now we place a cost here and bring in a response here. I write response equals await here. And now I need to use XGOs here.

I need to fetch it. So the same API we created for XGOs. So we write the API here. We make an API dot get request. Okay? And where do we need to do it? So we have already provided the base URL. We need to request slash API slash resume here at get resume.

So we had created a route. We named it get resume there. If we look at it, we go into a service. We go inside resume in the routes. So we had given a route for get resume. Where the get resume function is being called. Okay? It was given here.

Here we are fetching. Okay? We are fetching get resume like this. Okay? Now here we don't have to provide any data alongside this. So this is what we have. Our API will be fetched here. And now the first thing we will do with our result is to log to the console. Let's log to the console. Whatever our.

we get in response dot data. We will log response dot data to the console. And alongside we will also return it. Here I write return. We will return response dot data here. Okay? We return it. And if there is an error, we log that error.

And we will return it here. I write return and inside the return we write it like this as null. We will return a simple null. We do it like this. Okay? Now let's fetch this app. Where we do this in our app, so we do some.

So we go to inside app dot jsx here. And we copy this use effect from here like this. And we paste the same use effect here. So now what do I need to do here? We remove the cost function that we had created here. I write.

I write cost get resume get resume data like this here and put equals to here. Just like we placed await and called a function here. First, we create an async function. Here we create an async arrow function like this. Okay? Now what do we do here? I need a const data.

So here I write data equals to here. And we place await here. By placing await, what do we do here? What our get function was which is coming from slash dot API slash resume API that we just created, we call that function here.

And now what I need to do here? I need to set data. So first we write kx here. We write dispatch like this. Because inside Redux, we will set it through dispatch. So here we write dispatch. We write use dispatch here like this.

Okay? Now we set the data through dispatch. Okay? So the data we got, I write like this dispatch and in dispatch, what will we put is what our set resume is. We will put whatever our data dot data is here, okay? So what is inside data first of all, I.

will just write result like this as result so inside this result what is coming is what is coming in response dot data. So inside result, response dot data is coming, so response dot data contains the data of our resume.

I write here in such a way that result.dot data can then access our resume data here and can set it here. Okay? This way we will set it here. And then we have a function we created here, which function did we create? Get resume data, which is this function. We will call it here.

So we have done some work here like this. So we have done this much work here. And now we will go back here and now you will see that we are receiving data through the API here in the receive. It means, how are we receiving data now? Look, we are receiving data from the source Redis.

And why is it writing Redis here? Because the data we have here is being retrieved from Redis because what have we done here? We were setting the data inside our Redis. So here we are receiving this source Redis data. And if we go here, you will see some requests happening at the gateway.

Look, there is a request in get resume which is giving us data in just 6.673 milliseconds. We are receiving data so quickly because we have set it inside Redis, that's why we have done so much work here. So if we go here, you can see that it has been updated here. We will refresh this once.

Again, as soon as we refresh, our data will automatically keep coming to us. Okay? So some of our data has been updated. Here it is Rahul Sharma's, and if we go to another browser, you will see that it is Ankur Sahu here. Okay? Two different resumes uploaded by two different users.

So now let's do one thing here that we are logging in the console. We were doing this just for viewing purposes. So let's remove this. Let's also remove the error console log. In this way, and in the scorer, here we have written resume.name in the steps, let's remove this as well.

Okay? We have done this much work here. Okay? If we go here, now it has been removed. Now our work is being done in a proper way. Let's refresh this. So here we will not see any data because it is logging in the console. Now the data inside our Redis has also been set.

Okay? Of the resume. So if I have resume data here, then we do not need to show step one here. It means that the upload section we have should not be shown. We need to show a different section here. So let's create that here. So how will we create it?

You will see that we were returning in this way. We were returning for an upload section. Okay? Now what do we do here? We add a different section here, which will be our scorer section. Here we write scorer section and create it here. Okay? We will set data inside it. Okay? We will move this down.

So now here we place a simple condition. If we have a resume. If we have a resume then I need to return here. So we place a return here. Now I need to return something else here. What do I need to return? I need to return a new div here like this. Okay?

If I write resume.resume.name here in this div and give it the class name, I will make it text black so that it can be seen because the text is white here.

If I go here now, then in our scorer area, only Rahul Sharma is displayed here. Okay? And the upload section is not visible to us. Okay? What it means is that we have moved on to step two. Here instead of this now I can write if step two then we will see that step two is written here.

The same is the case for the other account where step two is written. Okay? Look at it this way. Now let's start creating this step two area. Okay? So let's remove this from here and give it some class name here. In this way, let's set the main height here.

Let’s screen this. We give some white text in the background here like this. And we also place the same nav bar inside it here as we are using. We’ll copy the same nav bar and place it here like this. So if we go here, our nav bar has appeared here. See, like this. So this much work is done.

This much is done. Now after this, we will create a section where all our work will be done here. So we’ll create a section here. Just like we made a section here, we will create a space section. We’ll give it a class name. And now we give this section a max width of 6xl with margin x auto.

For padding, we will give top padding of around 18 small, some 20 padding on top and bottom, and margin-bottom of 8 space with a margin of 3.5. So what will happen here? A section of that much width will be created here. Some 1152 widths. Okay? This much area will be created here, inside which all our data will come. We have done some

things here. Now we create a div inside which our header will come. So we’ll create a header here. Okay? And here we will also provide a button for re-upload, which when clicked, will nullify the data of our set resume here. So that our upload section appears again to us. And as soon as

we refresh, we will see this second section again. Why will the second section appear? Because the get resume function is working inside the useEffect here. Therefore, we give this div a class name here. So we create a div inside it and we are going to write a header here. We will comment out the header and give this a class name. We give it flex flex-column. We set the gap to three. We set it to flex row in small size. Meaning that if the width is more than 640 pixels, then things will be side by side. But if the width is less than that, then there will be things one on top of the other. Okay? We do the same here in small with item-center in small and justify-between.

And now we will do things within it. So we need to give a heading inside the header.

And we need to add a button. So we add a div here and below it we add a button like this. Okay? So inside this div, we have an H2 and inside this div we need a paragraph. Okay? Like this. So let’s do one thing, we will not create the paragraph here. We will make the paragraph on top. So one second here like this I will write the paragraph. So we’ll create the paragraph here at the top. We will give it a class name.

And we will style this with text size of 10 pixels text black with 40 and tracking somewhat wide upper case and here we will have margin.

Bottom around 0.5 and here we will write. And we will write here like this, Resume Analysis, and write whatever the name of the resume is inside it. I will write here if the resume name is there, then we will write that name here like this. Okay? And also here

we give a class name to this H2. We’ll do something here. We will set the text to large. We will set the font to bold. Now this button, we will give a class name here and write re-upload inside it. So here I will write re-upload like this. Okay? We write like this and we give it a class name.

So here we give it a class name. We set the text size to 10 pixels. In small, the text is extra small and text is black. Here we will set 50% transparent.

So that, the text will be somewhat dark black and we give it a border. The border will be black with 15% opacity, making it dark around 35 here. Meaning it will become a little dark due to px being 2.5 and py being 1, and we will make it rounded large. We will give a color transition.

Okay? We are giving colors here because the background color is here and the border is changing here. Therefore, when clicking on this, what do we want to do? So when we click on this, we want to set the value of our resume to null.

Okay? So we will handle the on-click here. And now how are we going to do things here? So here.

This is how we write a dispatch. And inside the dispatch, our set resume will have a pipe added here like this. Alright? Now if we go here, we have an analysis of the resume, and here we have Ankur Sahu and an option to re-upload. So if I click on this,

we get our upload section. If I refresh this again, we are back here. Because what has happened now? The resume data has been updated again. Alright? After refreshing this is why this is coming here. And if I remove this, it shows like this. Okay

? Here we see an option to upload or re-upload the resume. By clicking on this we have come here. Let's refresh again. We will come here. We will click on this. We will go back. So this is what is visible to us here. Alright? Because we currently have the resume data.

Now what do we do inside this?

We create a box. Inside this, we will handle everything. So now this section has had this much work done. This header div is now complete. Now we will create a motion div here like this. We are creating a motion div here like this. And this is going to be our main div where our scorer will be.

Inside this, we will take the closing class. We will make it relative. Overflow hidden, background this will be some black 90% transparent. Backdrop filter to excel border something white. Here, we will keep it 10% transparent. Rounded to excel padding something 4. Flex as flex column items.

Center gap something 4. In small, we give flex-row and shadow here. Some black color of 08 pixels, 32 pixels means that the box we created at the start will also be a black color box. Okay? And the backdrop filter is blur. So there will be a glass finish here.

And along with that, we will give a div here. We will provide such a closing div in which we will give a gradient color. Because we are making this relative. So we will have a div inside which we will add background here. Okay? We will give this some class name. So, this is... 

here, we give this CSS. We make it absolute. Insert zero and give it a background color of some gradient, bottom right. Here it will be from white some 0.08% transparent. Then here we will wear transparent to transparent point event.

We are done. Alright? That means this will come in the background of this div. And also, as we have used some properties of animation inside this box. We need to use the same properties here as well. We will copy this and paste it inside this like this. Okay? So this box will be.

visible to us. So if I go here, you will see this box coming like this. If I refresh this, it will come from the bottom up and our name will come from top to bottom. Look, it is coming like this from top to bottom and from bottom to top. So we have done this much work. Now we will handle things inside this a bit more.

We will reduce this a bit. Like it is going too much to 60. So we will set it to 20. Alright? Let’s refresh this. So our bit is coming a little bit up from the bottom. Now it looks okay. Now we will add things inside this. So now I need to create a ring type here within this circle where our score will be and in the middle, our score will be written. So let’s do this task.

So for that, we will use a rich chart here. Okay? We will create a circle here through rich charts. We will create a chart type here for it. We will use it.

We will map the components here. So where do we need to create this component? Just like we created a map here, a map bar. Similarly, let's create another component here. Okay? We will name it Cost Score Ring. Here we give it the name Score Ring and we take a score inside it.

Inside parameters. First, let's write the callback. And now we will take a score inside it. What score do we need to provide in the data inside the parameter? After that, let's write it like this. We return this. Okay? Along with that, we return it like this. Now I need.

What to do? I need to create a chart here through a rich chart. Okay? So first, we have a package with rich chart. Let’s import it where? In our front end where we have created our rich charts many times before. We import it.

Meaning we have created charts, etc. So in the dashboard, the chart that is visible in between, if I show you, there is an image in assets, and inside this image, you will see that this chart we see in the middle here is also created with our rich charts.

Okay? So let’s use the rich chart package. Okay? I will show you one by one what properties it has. Okay? This again goes to the score, and now we will first install the rich chart here. Okay? So let me.

Go and search on npm. Let’s go to the npm website. Here we go and search for a package. Look, rich chart has already appeared above. Because we have used it many times. So rich charts have come up. So if you search for rich charts here, you will see it. So this is a.

npm install rich charts we have. And here we have some line charts. Okay? There are many types of charts here. Documentation has very little written. But there are many charts here. So let's copy it from here like this. And go here and control C. Let's clear it here.

And now let’s install it here. npm install rich charts and click enter. Okay? As soon as this package is installed here. Okay? After that, we will use some charts, etc. We will run npm dep for this. Okay? Right now there are some errors because we haven’t.

Provided any data inside it. Okay? So first, let’s create a div here like this and give this div some class name. We will make it relative here. Flex item center justify center and now there is a radial chart here.

We write bar chart here. A radial bar chart is present here like this. So we need to use this bar chart. Okay? So we take this down like this. One second like this. Now we need to use the radial war chart. Okay? And we'll import it up here because our.

Import is not done. So we import radial bar chart here. So we write radial radial war chart which will come from where? So we write from here. It will come from our rich chart. This way, we will get it from rich chart. So now first, I’ll define a color here.

See how the color is here that if our score is above 75%, then a green color will show up here. If the score is less than that, meaning, here we set a condition that if our score is above 50 and less than 75, then it will show some orange type. Otherwise, here.

A red type will be shown. Meaning if the score is less than 50, then there will be a filled circle of red color here. Okay? Okay? In our radial bar chart. So it has some properties. Inside it, our height, width, and many other things are in this radial bar chart.

We give this. Okay? And we will also update this color. So, let's see what things we have inside it? Let's understand those. First, in a radial bar chart, there is a width here. What should its width be? What should be its height? So, we give this a width of 110.

And we give it a height of 110. Okay? And what are these cx and cy here? These represent our center radius, and the radius in the y-direction defines where our radius will be. Okay? Because here we are using a height of 110.

So, its center will be some value in x and y around 55, which will create an area in the center. Alright? This means we are basically defining the center here. By default, it is at 50%. So, this...

is about our 110% here and this height is also taking 110 here. This creates a circle here. Okay? Now, we have to specify where the center of this circle will be. So, we mention that the center x and center y will be around 50-55. This means we are providing a value that your center will be here.

Okay? Now what will be the inner radius and the outer radius? We are defining the inner radius here as 40 and the outer radius here as 43, which will indicate its thickness, meaning what thickness will be inside and what thickness will be outside. Okay? This is the radial bar chart.

Then here we have the start angle and end angle. So the start angle is around 90 and the end angle is around 270. This means that a complete circle has 360 degrees. Okay? So from where do we start?

The starting angle is given as 90, which means it will be at the topmost point and then go all the way down to where? To our 270. So we are indicating that we need to start from the top at an angle of 90 and go down to minus 270. This means we have to take it all the way to where? All the way back to 90. Meaning if it is to cover 100%, it will cover it entirely.

If it's 80, then it will start from around 90 and cover that much area. Okay? Now we have to fill the data within it and specify what its value is. So we are taking the score...

that we will set. Look, we are going into this div. We had made one div, we had given some div here. What do we put inside it? We put the score ring inside it. And here we need to provide some score. So, we will write the score here.

So, the score that our resume dot score has, we provide that. If it’s in the resume, then it will have a score. We provide it like this. Alright? So this will take our score, and along with that, we are giving it a color in color fill. What color is it?

It is that if our score is above 75%, then green, otherwise yellow. Otherwise, it's yellow and otherwise it's red. Okay? If we go here, then you will see that here the area has been taken, but we cannot see a circle here. Alright? Let's do a few more things inside it as there are a few other things left. Then later, the circle will be visible.

Okay? And we have a bar size that we have attributed, meaning it will specify the thickness of our ring. Now, after this we have used a radial bar chart here. Okay? Now we need to provide a radial bar in this. Only then will it be visible to us. So, let’s take care of that task.

Right now, we only have a container. It’s a container for a radial bar chart. Now, we have to provide it with whatever rings we need to apply to it, right? So, we give it that. Okay? So now we have a polar angle axis.

This is what will come from our rich chart and inside it there are some things like we give it a type number and assign it a domain from zero to 100. Okay? And we make it thick, set it to false here. This means that it will have a certain type here. And what is this?

What will it tell us? So this will tell us here about the angle's axis where its type number is and the domain here is from zero to 100. Okay? Whatever is here, it works like this, meaning that from zero to 100, we are supposed to fill it in here.

If some 50 is the domain, it means that it will take half our angle, half will come out of ours like this. Okay? After that, we have one thing. Now after that, we have the main thing which is our radial bar that will come from our rich chart. Now we also have to provide something in it. First, we will give a background color.

We will have some gray type like this. Okay? And then, under data, we will assign it a value. What value will we assign? So, we need to provide a value here and that value we are defining under data is score. Okay? We will assign that value and along with it, the same value will be assigned in data.

Let’s also give it some corner radius here. Okay? So we refresh it a bit, then you will see that it is coming with a yellow color like this. Because here our value is going to be less than 75%.

So here, it’s forming some circle like this. Now let’s add some labels, etc. Meaning we give data on how many marks we got out of 100. So now let’s do this, we are coming out of this radial bar chart. So right now, we will create a div here, something like this with a class.

We give a class name here. Make it absolute. Flex, flex column, item center. Now we need to create two spans inside it. I write span like this, and we need to make another span here. We write here, like this span. So we give a class name to this.

And we make the text some large font, bold text, white, and leading none here, and we have to write the same score inside that so we write score here and also write divide by 100 like this, and write divide by 100 and give some class name to the span.

We give a second span some class name, so we assign it text here, some 9 pixels, text some 200, margin top some 0.5. If we go here, then from this type, you will see that 70 is here, divide by 100, coming like this. Okay? Like this and if.

We do not make it flex column. Just leave it as flex, and if we go here now, then if we go here, this is how it shows 70 by 100. Okay? This has come to us like this. Such an area because it’s less than 75%. So here.

70 is coming like this. Okay? And here it started from 90 and left that 70% area. It took 70% area, and the remaining 30% area, it left here. Okay? Now this has been done. Now let's move on. Let's do some more things in this.

Okay? Now this much work is done. So we go here. The div that we created, we had given it our score. Okay? Score ring was given. One task is completed. We create another div now. Let’s do some things inside it.

So this div, let me give it some class name. Or let's not give it a class name. We need two spans here, like this, or we take two paragraphs, we need two paragraphs like this. Okay? And we need one paragraph like this, and then we need one div like this.

Okay? First, this div, we give it a class name. We make it relative here. Make it relative. And this paragraph, we give it some class name. And here we give it text white, 40%, 50% transparent text, extra small, margin bottom some 0.5. Okay? Like this and ahead at this point, I write resume score. Okay? Resume score.

Let's write here. And let's give some class names to this paragraph too. And inside it, we write 'test.' Inside it, we provide class names. Test large small with text here in excel ft some bold margin bottom some 1.5 and test some wide. Now in this paragraph, something like this.

We write that if the resume score here is more than 75%, then we can write 'excellent' here, and if it is less than that, then 'average,' and if it is less than that, then 'weak.' This way we provide some things here. So here we set a condition that if the resume.dot score is greater than 75, then here.

'Strong' will come up. Otherwise, it will come up by writing in the colon that if the resume.dot score again checks the condition, if the resume.dot score is greater than 50 here, then it will write 'average'; otherwise, it will write 'needs work.' If we go here, you will be able to see like this.

The resume score and 'average' is showing up here, okay, like this, and if we look here, you will be able to see a purple color appearing, our green color, sorry, a purple color is coming up. We called it green, but it is a purple color, okay, and here it is 85%, so here.

Look, 'Strong' is coming up like this, meaning that Rahul Sharma has a different score coming up here, and someone else has around 70% showing here. This is different. Okay? So now the div we created, we give it a class name, the one below. We will set the class name to 'flex item center gap some five.' Now we place a user.

icon here. We place an 'F.I. user' icon here. Like this, okay? We import this icon above. Maybe it got imported above. Look, it got imported. Okay? Now we do some things inside it. Like setting sizes and so on. So here we give it a class.

name. Okay? This way we set a class name to it, something like 'test some purple 400' and 'test some extra small.' Now after this, we create a span here, and what do we need to write inside this span? So our resume, if it is a resume, then we write the suggested role here like this, 'suggested role our.

suggested role will be here. If I go here, then its suggested role is coming as 'Junior Web Developer,' so we give it a class name here. It is not displaying correctly here yet, but the user icon has been placed here. So we give this span some class name here and set its text to some.

'extra small' and 'text some purple 300.' Now if we go here, 'Junior Web Developer' is showing up, and if we come here, 'Backend Developer' is showing up. Okay? So these are two different ones. So in both, different things are appearing here for us. Now we move ahead and do things here.

Okay? Let's map our weaknesses here. Let's map our strengths. Okay? We write all the things here. So this much work has been done here. One motion div has been completely made. Now again we create one motion dot div like this. Okay? Now we will do the things inside it.

So the same properties we provided here as initial and all these things, we will also give the same properties to this one. We use the same properties here, 1 second. We need to apply it down here. Here we also use the same properties.

Okay? Like this. Now we provide some class names inside it, and these will basically be for what? Here we will write our strengths and weaknesses. Okay? So I will give it a class name here, like this, and then before this, we will create one more dib.

One second, we create one more dib here. And since two things will come in it, one strength will come, one weakness will come. So we write this entire thing inside one tip and give it some class names here. In the class name, we create a grade box. So here we.

provide some class names. Grade grade column some one and here gap some three and in the middle grade grade column some two. Okay? Now the class name we gave to the motion dib here. We provided CSS etc. here like that, and this div has added. The same we need to do here again.

We need to do this. Okay? So I am copying this entire section from here. Inside which we will have a class name and the div in which we applied our gradient color will come in. Okay? So I will write it like this from here. Okay? This way we managed it. If we go here, we have a box here.

A box has appeared. Look, a box has appeared here like this. We need to create another motion div here in the same way. So let's copy this and create another motion div below it here as well. In this type. So now we have two boxes here. We need to place things inside them.

In both of these. Okay? So now inside this motion div, this div of ours, okay? Inside this motion div we will create again one div and inside this div, we will have two divs coming. One will be this div of ours wherein we will create two divs. One div is this.

This is done and we will create another div here, inside which all our strengths will come. First of all, we assign a class name to this div. So let’s give it some class name. We will set it to related flex item center gap about 1.5 margin bottom about 2.5, okay? So inside it.

We are setting some gaps. What does this mean? We need to give two things here. One is an FI, one alert circle icon here, and also add some span inside it like this. Okay? Here we write this span like this. Okay? First, let’s give this icon some class name.

So we give it some class name here. First, let’s give it some class name here. Like this and we write inside it like this. So we give class names and set the size here. Let’s set the size to 14. Class name text green about 400. Now we give some class name to this span.

So we give it a class name here. So we give it some class name. Text some extra small, semi bold. Text something like this and inside we write something. So we will write strength inside it like this. Okay? Now this div is done. We have added strength inside it.

And now we need to map this strength, so we will map inside this div. If we look at it now, we have a strength written here like this. Now we need to do some things inside this div, so that much is done. Now let’s give this div a class name here at the bottom, inside which.

We will map our strengths. We will make it relative flex, flex wrap and set the gap about 1.5 here like this. Now what do we need to write inside it before that? Let’s create a tag inside which we will map things to create a component named tag. So.

Below this again, we create a component named tag. Okay? We will map things inside it. We will also give some colors etc. inside it. Okay? And inside it, we will also take some value parameters. Like we will take one text and one color. We take two things here.

Let’s add a comma. We also take one color here. And in this way, we create a callback function and return it. Here like this we return things. Okay? And here we create a div. Okay? Now we need to give some values inside it.

Let’s do that first. So look, initially, we state a color here inside the cost style. Like if our color is purple here, then its background will be purple 50. Text will be purple 700 and border will be purple 200. If it’s red, then similarly, red will be 50 for the background.

Red 700 will be the text and red will be 200 for the border. If our color is green here, then the background will be green 50, text will be green 700, border will be green 200 and if it’s yellow here, then the background will be yellow 50 and yellow 700 and border will be yellow 200.

This way it will be, so inside this div we have to write the text, we will provide some different CSS to it according to our style. Okay, according to the color, so here I will write text like this first and give this div a class name to which we will do things inside.

that we give some 10 pixels padding to the text with about 1.5 padding by a rounded middle and border, and we set the font to medium and within the styles we provide color here. So whatever color we send from there will go into the styles here; it will check that if there is a purple color.

So here it will take purple and set its background text and border to that purple. Okay? And the tag we made here, like this type, we need to map things inside this type. I mean, how do we need to map? Let's take a look and I will show you how we will map.

So this is our div which we need to work with. Where did this div go? We have set it to relative flex here. Now we need to work with it. So we apply curly braces here and we need to map our strength here.

So here we write our resume dot of the strength we have here.

That strength and the strengths we have. Okay? Like this. So if it exists here, we will map it. So we write it like this here; if it exists, we map it here this way. I write map here. So what do we do here? We map like this.

So here we will map our strength. So we take an S for strength. Okay? We take an S strength here. Alright? After that, what do we need to do here? The tag we made here. We write curly bases here. Curlies.

Bases no sorry, here we put a tag. We write tag here like this. Okay? We write the tag here like this. And inside the tag we had written, we were providing a text. In that text, we provide that S here. We give a key here because there are many.

Strengths. Inside that, we give an S for the key because we will have different strengths and along with that, we provide a color here this way, and inside the color we provide green color here this way. Okay? We give green color. So we have to provide it inside double quotes here.

Okay? If we go back here, then you will now see things coming like this. It is coming here written. One second let’s look at it this way. So this is how our type is coming. So let’s fix this.

So let's fix it. So this is possibly how it appears here. So one second our div has been formed here. Our div is like this. So why is this appearing like this? Let's look again. So yes, here we gave flex column. We are giving this. Let's remove that here.

Okay? Like this and remove some gaps and other things from here. Now let’s look at it because we copied this from above. Here its CSS, which had flex column applied to it, was there before. We have removed it.

Now let’s go back here again. So now you will see. Now things are coming here correctly. Okay? Like this. Now let's do one thing. The motion div here, we will copy the whole thing like this. And this motion div below we will update.

Here it is like this. Okay? So what will happen with this? Thus, our strength will also come beside this. Look, it has come here. Now instead of strength, I need to write weaknesses here. Okay? So inside this div, we will do one thing.

We open it. So this is the same div we copied above. Look what is being mapped inside this div? Our strengths are being mapped. Now we have pasted this same div that we copied here and you will see it is within the same div we have done in which here we have grade column taking up 2 in the middle. Things are coming up and down. So one motion div is this. One motion div is this one. Within this motion div, we will write weaknesses instead of strengths. Okay? And here instead of green color, I will write yellow color here like this.

I write this down here in such a way that we reduce the weaknesses and its weakness to W small. We provide it here in the same way. And here, we will also write its color in the tag as yellow like this. Okay? We write yellow here. And if we go here now.

Here, the weaknesses are showing us like this. Look, here the weakness and lack of experience are the same weakness. So, only one is coming here. Let's refresh it. So, these three are coming down below, and this is coming from above. Okay? Like this. Now, after this.

Here, there is one more and we will map a couple of things below. So, our work is done to this extent. Now, this motion dip that we copy again here like this. Okay? Now, our motion dip was that we were writing two motion dips inside one dip, look one dip.

we were writing inside, but now we will not write it inside one dip and this dip that is our open close, let's remove it from here. So now we will not write this dip inside one div, after this we will create another motion dip here. Okay? We will create one more motion dip below this.

Like this and we will copy paste it here. And here in place of weaknesses, we will take something else here. So now in place of weaknesses, we will write our missing skills here. Okay? Let's move this up a bit. And this will be for our missing skills. Similarly, we will go here.

we will write missing skills. And we will comment this out a bit so that it's clear that this is for our missing skills here. Okay? Separately, we write something here in a motion dip. And here, the icon that we are using, we will use a FI ZAB type icon here. Okay? And here.

Instead of yellow, we will use red color here. So, let's write red color here. Okay? Similarly, we will write red color here too. Like this red. We write something here. Okay? We wrote missing skills here. And similarly, we will write like this missing.

skills. Okay? We will write missing skills here like this. This will map the missing missing skills here. So, if we go here, then a complete area has been covered under the name of missing skills, and if we refresh this whole thing, then these three of ours four of ours are coming from above to below, from below to above and nav is coming from above to down.

Okay? Now, after this, if I look at some other page, if I look at this account, then these are our weaknesses, these are some missing skills of ours. Now, after this, we map our recommendations below. Okay? So this dip work is complete for us. Okay? Now after this.

We copy this dip and again create a div below that will be for our recommendations. Okay? Here, we will write recommendations. So now in place of missing skills, we write recommendations here. Okay? Similarly, we will write recommendations above here and comment this out.

So that it is clear that this is for recommendations. And this dip here will be for our weaknesses and strengths. Okay? So, let's copy this. So this div here, we will wrap here and write it like this, one second, one second above, this div will be written like this.

We will write weaknesses and strengths here. Okay? We write strengths here and we will also comment this out. Okay? So what was the upper one for? It was for a ring. Okay? This is an area that was for score ring.

So, here we will write score ring. So that things are clear where we have taken what. So our area for scoring had a score ring inside it. We created two boxes inside one dip for weaknesses and strengths. After that, we created a box for missing skills. Now.

We are creating a box for recommendations. Inside which instead of zap, I will write trending up here like this. We will use a trending up icon. And here I will give it purple color. Here we give purple purple color similarly. And now let's take a look at this.

And here too, if I write like this, recommendations. Here we write recommendations. We write recommendations like this in terms of recommendations. Okay? And here we can give it some color like purple. So here we write purple like this. Now if we look at this, our

recommendations have also been mapped here. So we have created this much area here. Look, this way an area has been created. And this is fully responsive too. Look, this is fully responsive too. Here we have created our complete area. So look, here we have been given an average score.

Strengths, weaknesses, missing skills, recommendations, and if I refresh this, then this is also fully animated. It goes from top to bottom. It’s coming up from the bottom. Okay? So we can make this just a little bit better here that the motion dip, the first one, the motion dip

has our score in it. We've given it some delay here of 0.05, we give this second one here at 0 and give the motion dip here at 0.7 since it's in the same box, right? And

now for the missing skills, we’ll give it here at 0.9 like this, we need to add a delay here and last is the recommendation here so we can give it a delay of 0.12 here. Okay, if we go here now, this will refresh; first, this will come, then this, then this, then this, then this, then this in this way.

All three things will come. So we have created our thing here. Now, okay? Our area and if we go to re-upload, we can upload things like this and if I refresh, then our score section has come in here. This means we have also completed our score area in the resume.

Score section. So if we want to find the score of any resume here, you can simply re-upload the resume and your ATS standard score will be ready here. Okay? Your score for ATS standards will be ready here. If I go back,

and go to the resume scorer again. Look, we have reached here. Okay? So your scorer is ready here. The resume scorer that we created was here. We were giving scores, finding strengths, weaknesses, missing skills, and recommendations.

It has been completely built here. Now what do I need to do? We need to create our resume builder. Okay? Now we won’t make an API call for the resume builder. We will make a template for it which will be ATS friendly. In that template, first, we will

fill out the values with the user what values should be in the resume. Okay? And accordingly, a page will keep building inside the resume builder. We will allow downloading that page. Okay? So this is the task. Now let's start creating the resume builder. The resume score is ready here.

So now what do I need to do here? I need to create a resume builder like this. So I have made a demo here for you. So let’s first take a look at this demo here. After that, we will create our resume builder like this. We will create the same thing. Okay? First,

we have a nav bar here that says resume builder. There is a preview button here inside. We need to create that too. After that, we have a progress bar here. We will go from step one to step six, and currently, it is 0% complete. Okay? We will create a progress bar like this.

After that, in the first step, we have personal information. Okay? Where we can fill in name, full name, email, password, location, and can add the LinkedIn URL here. We can add the Github link here. Okay? And likewise,

there is a next button here. We can go to the next step with the next button. Okay? So if we click on this to go to the next step, you will see that our step two has come up here. Okay? In which our 20% is complete now. So much area it has covered.

Got it. Is that okay? After that, we need to give a professional summary here, which will have a test area for us. Is that okay? And this way, look, we can also go back to the previous step here. We can come here from the next one. Is that okay? A step two looks something like this. Here we will add the professional summary.

After that, there is a skills area where we will again have a test war. There is another separate test area for us where we can add our skills, etc. Is that okay? Like this. After that, we click next again. Here is a work.

There is an experience option. Is that okay? If I click on this button, the add experience button. As soon as I click on this, we have an area created here where we can provide the company name, what the role was in that company, and how long we worked there. Duration and.

Description. Is that okay? This is how we can add it. And if I click on this button again, we can again add it here. And we can also remove it by clicking on delete. Is that okay? So in step four, we need to create some work experience here. Some.

This area. Is that okay? After that, we move ahead. So there is a projects area where we can click on add project and add our project's name, tag, stack, getup link, and description here. And if I click on add project again, this way.

We can add several of our projects. And we can delete them by clicking on delete as well. Is that okay? After that, let's move to the next step. So here, lastly, we have our education, where our progress bar is 100% complete. So here is an education section. Here, we can.

Again, an area has opened up for us. We clicked on add education. So here, we can add the college/university. What was our degree? We can add the branch, etc. What was our CGPA? How long did it take us to complete it?

Which means, is that okay? This is how we can add here. Again, we click on add education. So we can add another education here in the same way, and as we continue to click on add education, our areas etc. will automatically.

Come up here. Is that okay? This way, we need to create some sections here. And lastly, as soon as our progress reaches 100%, there is an option for a resume preview. So if we click on this, we will get a preview option for our resume here. So if I reduce it a bit.

In this way, you will see that we have one page here. Is that okay? We have a complete page here. Where if we write anything. For example, if I go back to edit and go to step one here. Is that okay? So what do we do at step one? Let's give some full name,

email password, and some location here. If I write here Jhansi UP like this, and also write some LinkedIn links, etc. like this, it's all fine. Is that okay? Let's write it like this. After that, we currently write something in the professional summary here. So as soon as.

I want to see the preview along with it. Is that okay? I am updating here. Along with that, if I want to see the preview here, there is a preview button in the same tab. So you will see that first my name has come up as Ankur Sahu here. And after that, whatever email I have provided here. The number.

The location, LinkedIn link, and the getup link we have added will all be written here. Look above, and along with that, our professional summary, which we had added, is also there. Where we have entered some data. So here is an area for professional summary where some of our data is coming, and as we continue to.

fill in our data here. We will continue to add skills, etc. Is that okay? We will continue to add some skills here in this way. So you will see that here our skills area will also...

has been done. After that, if I add some bugs experience here. Okay? Anything we write right now because we are just looking at this. Okay? And we can also add anything to the project like this. Okay? And we can add many projects and so on here.

Okay? Let's add some things here. And if you look at the preview now, you will see that an area with class experience has appeared here. A project area has also appeared here like this. Okay? So as we keep filling our data here, our

everything is coming here. Look, as we keep filling the data here, all the fields will gradually fill here and we will see the preview there. So we need to create an area here and we have added all the things like education and so on. Now here,

let's click on the resume preview. So in this way, our resume is coming up here. Okay? Okay? And the resume we are getting is following our standard. It follows the ATS standard which is necessary for our resume. Because

what happens here? What happens in many companies? Resumes are analyzed through AI. Okay? And if we take a fancy resume there. If we create such a resume that the AI cannot detect things, then it gets rejected right there.

But if we create a resume like this that is ATS friendly, then even if the AI scans it, it will find out all the details of our user’s resume. Okay? So that's why we will keep some

kind of template ready. Using that template, we will do things here like this. Okay? So this is something we are doing. We are not going to call any APIs here. We will create our resume builder here through the front end. Okay?

And if I need to download it, there is a download PDF button here. As soon as I click on this, an area to download our PDF has opened here. We can print it from here too. Otherwise, if I need to save it as a PDF, we can save as PDF like this.

And in this way, our resume will be created here. And as you properly fill everything here, it will automatically come up in a full A4 size page. Okay? This is our complete A4 size page. As we keep filling things in it,

we will give our professional summary. We will add technical skills and so on properly. We will add work experience and other things properly in it. So the part that is currently coming in half a page will fit on our whole page. Okay? And if you want to update it, you can also add certificates here.

Okay? But here we have taken a few steps less. For instance, we have taken personal information, professional summary, technical skills, work experience, projects, and education and so on from the user. Okay? We have filled in so much here.

So much we have filled in here. Okay? These things like professional summary, technical skills, etc., we are filling in with the user and the output we are building here will follow our ATS standard. Okay? Like this. So we have this much work to do here. So you must have gotten an understanding of this.

So we also need to create a preview area. We need to create an edit area like this. Okay? And we should do this entire work properly. So we need to create this entire area like this. Okay? And as we remove things from it, our data

here will automatically decrease. Only this much data will be left with us. So let’s start building our resume builder here. Okay? So we have seen this in the preview. Now we need to make the same here. So let’s start making this. So we have this much.

The work was completed, and we had finalized our receiver score here at the end. So what do we do here now? We create a separate page for our score builder here. Alright? So we go inside our frontend. Now let's close the backend for a bit because right now we don't have to

fetch any API or anything. We need to do all our work inside the frontend. Alright? So what do we do here? We are also going to create a resume builder along with our resume scorer. So let's create it here. Okay? Let's do this much work first. So first of all, I write here inside the pages,

what I do? I write a resume like this, in capital letters. I write resume builder this way. Let’s write resume builder dot jsx here. Then, we click enter and make this an RfCE, so that our function will be created and exported.

Alright? Now let's do one thing. Let's create a page for this. Okay? So we go inside the app. We’ll go inside the same app and just like we created a slash for our scorer here, we will copy this and go down here. And now what do I need to create here? I write a resume here like this, simply in slash resume.

Alright? We had our resume scorer. So we wrote slash scorer here. Now we write a slash resume here. And along with that, what do I have to do here now? I just need to write this simply.

So here I write resume builder, so the resume builder will be imported above. Alright? Now inside this I don’t need to send any user data or anything here. Okay? So we write slash resume here. And inside this, we also provide a user data and set user

यहां पर प्रोवाइड कर देते हैं साथ में। ठीक है? तो उसके लिए मैं यहां जाता हूं और रिज्यूम बिल्डर के अंदर जाएंगे। इसको बनाना स्टार्ट करेंगे और पैरामीटर के अंदर एक यूजर हम ले रहे हैं और एक सेट यूजर हम यहां पर ले रहे हैं। तो ये दोनों चीजें यहां पर लिख लेते हैं। ठीक है? तो अब बेसिकली यह तो हमारा एक रिज्यूमे बिल्डर

हमने बना लिया। अब एक काम करते हैं। एक एक अलग कंपोनेंट बनाते हैं जहां पर हमारे सारे हम इनपुट्स को बनाएंगे। ठीक है? और अपने स्टेप्स वगैरह को यहां पर बनाएंगे। तो उसके लिए एक कंपोनेंट बना लेते हैं। और उस कंपोनेंट को यहां पर रिज्यूे बिल्डर वाले पेज के अंदर हम उसको मैप करा लेंगे।

तो ये काम जरा यहां पर करते हैं। तो यहां पर सबसे पहले कुछ कंपोनेंट अपने बना लेते हैं। तो हम एक काम करते हैं। इस कंपोनेंट के अंदर एक फोल्डर बनाते हैं। इसको नाम यहां पर हम देंगे रिज्यू्यूे। तो अब जो भी यहां पर रिज्यूे के अंदर हमारी चीजें होंगी इसको एक सेकंड रीनेम करते हैं। इसको

रिज्यूम में लिखते हैं इस तरह से। और अब जो भी चीजें यहां पर हमारी रिज्यूे वाले फोल्डर हम रिज्यूुमे बिल्डर के अंदर कराएंगे उसको हम लिखेंगे रिज्यूुमे के अंदर। रिज्यूुमे कंपोनेंट वाले एक कम फोल्डर के अंदर लिखेंगे। ठीक है? कि जैसे मुझे अब मुझे सबसे पहले यहां पर क्या-क्या चीज़ चाहिए? मुझे एक रिज्यूे फॉर्म यहां पर

बनाना है। तो इस तरह से मैं लिख देता हूं यहां पर रिज्यूे फॉर्म। ठीक है? एक रिज्यूे फॉर्म हमें चाहिए। तो रिज्यूुमे फॉर्म डॉट gfx हम किस-किस किस फोल्डर के अंदर लिखते हैं? कंपोनेंट के अंदर एक रिज्यूे फोल्डर के अंदर लिखते हैं। ठीक है? और यहीं पर हम क्या कराएंगे? अपना जो

रिज्यूुमे फॉर्म है उसको यहां पर बनाएंगे। अपने कुछ कंपोनेंट बनाएंगे। इनपुट, टेक्स्ट एरिया। ठीक है? बाकी सारी चीजें और उन्हीं उन्हीं के थ्रू हम यहां पर कुछ स्टेप्स अपने क्रिएट करेंगे। टोटल छह स्टेप थे हमारे। वो सारे स्टेप्स वगैरह भी हम यहीं पर बनाएंगे। और इस रिज्यूे फॉर्म

को कहां पर मैप करेंगे? अपने तो इस रिज्यूे फॉर्म को हम मैप करेंगे अपने रिज्यूुमे बिल्डर के अंदर। यहां पर उसको मैप करा देंगे। ठीक है? इस तरह से। तो ये चीजें हमें यहां पर करानी है। तो अगर मैं यहां जाता हूं इस तरह से रिज्यूे बिल्डर हमारा ये है और एक रिज्यूे फॉर्म हम यहां पर बना रहे हैं। यहां पर लिख देते हैं कुछ

Where will we place the RFC and this resume form? We will place this resume form inside our resume builder. Okay? Like this. So let's write resume builder here. We will write resume form. Sorry. So where will this resume form come from? Here.

It will come from inside our component, from a resume folder, we will find our resume form here. This is the way we need things here. So we write it down like this. Okay? Now what we will create inside our resume form will be shown to us on our resume builder.

Okay? And this is how we do things here. Okay? And along with that, we keep some data here. Like, I will create a file here, which I will name like this: let's write initial data here. I write initial data dot js here which is our.

It will be like this that basically our resume will have what fields. So we will create an initial data here like this. The first step, step one, I will tell you that in step one we need to add personal info here. What will be included in it? One name.

There will be one email, one phone, location, LinkedIn, and get up. So these will be in our step one. Okay? After that, there will be a step which is a summary in which what will it include? Whatever our user summary will be will be shown here. Okay? After that, there will be step three which will include our skills. What will we do with the skills?

We will separate them with a comma. Like this, some of those. After that, there will be step four which will include experience, which will be an array here. Because in experience, our user might have multiple experiences from various companies he has worked for. Okay? Like this. So all of these will be an array of strings.

Meaning that there will be an array of objects here. Along with that, projects will also be an array of objects. Education will also be an array of objects. So these are our six steps here. First is personal info, second is summary, third is skills, fourth is education,

fourth is our experience, fifth is our projects, and last is our education. So these will be some of our steps here. And now what do we do here? We start creating our resume form. And before that, we need to add some parameters to the resume form. Let's set those parameters.

Okay? So now what do we need inside it? Look, for example inside initial data, if we see, we have data dot name. We have data dot email, data dot phone, data dot location. Okay? So, in a way, this will be our data here. Inside an initial data,

we created an object. So all these fields are our data and if I want to access any one of them, I can write like this data dot name here. So like this, I can access the name. Okay? And we can also set them inside the set data like this. Okay? So what do we have to do with all this? One.

We have to set this inside the data. Okay? So first of all, here inside the resume form we will have some three parameters. Now, one will be our step, which step are we on? Okay? Which step do we need to show here? So that step will be here. One will be our data and the other will be our set data.

What will we do here? We will set the data and we will map that data where? We will show it inside our resume builder, right? And through this data, we will also show our preview here. So we will have to set this data, all of these things. Here will be one.

step. Okay? After that, we will also need to provide those parameters inside our resume builder. Okay? So now what do we do? We will create two use states inside the resume builder. First, I write cost here. We will write current step like this.

Set current step here. Let's write here. I am writing the set current step. Okay? And we put this equal to use state. We write use state like this here. Okay? And what will we do by default? We will set it to off by default here. Okay? Like this.

We will give it one and in this way we will set it to one for one second like this. Okay? We will give it a number type here. Okay? We set it to one. After that, I will write here like this set cost data, a set data. We need to set the data like this and we put an equal to.

We write use state here. And what data do we give it by default? So we will give initial data as default. That is, the data we have written here in our resume component, we will provide initial data here. Meaning, what things do we need to set in this data?

Inside this data we can set name. We can set email. Form education, LinkedIn, get up, summary, skills, age, our experience, projects, and education. So, all these things are in our initial data. And of the same type, we have created a data set here.

Through set data, we will set things. Okay? So, we have done some of this here and now first in form data we will give it a step. Okay? Inside the step we will provide what? We will provide the current step here.

Okay? And how will we set this current step? We will do it from the front end, which step we will keep it on. Because I have mentioned the front end here, so now in the step we provide the current step here. And where will we set the current step? We will set it in our resume builder page.

Because there is a next button here. There is a previous button here. If we click on the next button, we will increment the current step by +1. And if we click on the previous button, we will decrement the current step by -1. Okay? This way we give this one step here. And what steps,

we need to create in our resume form? Okay? Meaning that an initial data will appear here in our form. After that, a second data will appear. Okay? Meaning that the second data will appear in the second step. So the data we will create here, meaning the form we will create, will basically be of that step.

We will create it within our resume form. Okay? After that, we need to give it data and the same data we provide as initial data set here. After that, we give the same set data inside set data like this. Okay? So we have also set the parameters here. Now what do we do?

We start creating our resume form. Then after that, we will create our preview area here. Okay? Where we will preview this data. So basically, okay? We will do some of this here. So first let's do one job. We start designing our resume form here. Okay? And we have also imported the resume form.

So things will also be visible alongside. Okay? This much work we will do. So first let's start designing our resume form here. So now here let's first do one thing. In our resume form here, look there are many things. We have an input. After that, we have a text area. Okay? We have many components and we need to keep them in different steps.

So for that we do one thing. We create different components for ourselves. On top of this, we can create different components. For example, if I write a function here and inside the function, I will create an input here like this.

So let's create a separate input here, in which we will take some values inside the parameters. Like I am taking a label here. Okay? What is the label here? What is its value? What will happen on change? And what will be the placeholder here? And its.

This is a test in default type here. Okay? Let's give some here. And we will create an input, which we will set here in our step one. Within that step one, we will map this input. Alright? We will place that important component there.

Within step one, inputs and other things will keep being created. So let's start to create some different components here this way. And we will place a return here in a way. Now what do we start doing inside it? We begin to process things here. First, we create a div here. So basically we are 

creating our input component here which we will map in step one. We will also map it in step two. In step three, we will set up things like this. Okay? So let's create our input section here. We will place this input section in our step one. Because in step one,

what will we have? In step one, we need to fill in our name input here. We need to input email, phone number, location. Lindin and get up. This means we will create one for whatever inputs we have that we will set data for. First, we create an input component.

And we will use that component every time. Okay? So we won’t have to create inputs here repeatedly. Once we create the input, we will use that input everywhere. Alright? So these are some things we are going to do here. Let's assign some class names to it.

Here we assign it. We give it Flex column some one and Flex to Flex and give it Flex column and provide some gap here. Okay? And afterwards, we have to process things here. So first, look what are the things we have with the input? We will have a label with the input. It means that

inside it will say for whom we have to fill in the input here. So there will be a name label here. There will be a separate label for email. Alright? There will be a separate test area for that. It means we will have an input area. So now let's create a div for a label. So we don't.

need to create a div here. We can simply create a label here. Okay? And what do we put inside this label? We will provide the value of the label parameter we are receiving here. Okay? So if the label value is name, it will take name inside the label here. Alright

? In this way, let's assign some class names to it. We will set some text to around 10 pixels font to some semi-bold text in black with about 70% transparency. Then we apply upper case here. We will make the tracking a little wider this way. Okay? Now let's move on. We create

an input area here. So now let’s create a simple input. Okay? It is very easy to create an input. It’s not very difficult. Now we first need to give this input a type. So what will we provide for the type? We provide this based on the parameter we are receiving in this way in curly braces. Okay? I will provide it like this as a type. So it will take the type from here. Alright? Like this.

Next, we write it down this way. Now what do I need here? I need to give it a placeholder. Same here we provide the value for the placeholder which we will receive in the parameter section. Whenever we use this input inside any of our steps, we will provide this data to it at that time. Okay? After that,

now what else do I need to put? I need to add an on change event here. Because what do we need to do when we click on this? We need to set some values inside it. So we add an on change like this. And we take an event, E, during on change. So we will take it here. Okay?

अब मुझे यहां पर क्या क्या लगाना है? एक ऑन चेंज यहां पर लगाना है। क्योंकि इस पे क्लिक करा के हमें करना क्या है? हमें कुछ वैल्यू सेट करानी होगी इसके अंदर। तो यहां पर एक ऑन चेंज लगाते हैं इस तरह से। और उसके अंदर एक इवेंट यहां पर ले लेते हैं ई। एक ऑन चेंज करने पर एक इवेंट हमें मिलता है ई। तो बोल यहां पर ले लेंगे। ठीक

Is it? And let’s write an onChange inside it like this because we need to handle things within the set data here. So look here, we don’t have set data, but on changing it, we will set some value inside it. So this onChange we are getting inside the parameter. We write this onChange here.

Like this. Okay? And what do we put inside it, brother? We give E dot target dot value like this. Okay? And similarly here, we need to also provide a value inside one input, right? We will need to set that value. So we provide the same value that we are getting in the parameters.

Okay? So when we set this input somewhere and use it in our steps, then you will see how we give this value here. Okay? Now let’s give some class name to it here. Okay? So here we provide the class name.

We give it a background color of some white, a border of 2, border some black, 45% transparent, text some black here. We give the text some extra small and the font some large. Padding of about 2.5 in PX and about 2 in PY. And.

Here we outline it. On focusing, the border is black here and 60% transparent, and we give it transition in colors, and the placeholder background is black here at 30% transparent, and its.

shadow inside is some 0 2 pixel 8 pixel black color shadow. Okay? Now we have made our input component here. Okay? An input component has been created. Now we will use this component here and make our step one. Okay? So like this we won’t return here.

So we will remove the return here. And now we will write here that if our step’s value is equal to 1. Okay? Like this, so if step is equal to 1, then we will what?

We will perform some return. I will write here like this return, and what should I do inside it? Inside my step one, we need to set as many inputs as we have fields here. Okay? So first of all, let’s create a div here like this because here.

We are not going to create just one input. We will give many inputs. So we give it a class name. We provide it flex, flex column and set a gap of three here. So that all the inputs inside it will come in our column and the gap will be three.

Now let’s first add an input. The input component we created above will come here. Okay? Like this, that input will come here. Now what do we provide inside the label? Inside the label, we provide full name like this. Okay? I will write like this full name, and let’s just put it in curly braces.

And this means to put it inside double quotes and we will remove the curly braces from here. Okay? After this, what do we need to provide inside it? Next, we need to give it some value. The type is default test. So we let it remain test. Okay? And we also need to give it some placeholder.

So here we give a placeholder, and we give it default some Rahul Sharma as the name. I write like this Rahul Sharma. Now what’s next? We need to handle things inside onChange. So here we put an onChange. And inside onChange, just like we did.

Here, inside an event, we say what? We provide E dot target dot value inside onChange. Okay? So we will have a value B inside this onChange, and where do we need to set that value? We need to set that value inside our set data. So here we write a.

set data which is here. And how will we set inside this set data? So the data that we already have here. Okay? We need to set inside it. What do we need to set inside it? We need to set the value. Okay? And what value do we need to save inside it? Name.

Well. So what will we put in the name here? We will put the same thing here like this. Okay? And we are doing two things here. So we write it in a curly basis like this. So what have we done here? Look here simply, we were getting an event in the onChange. If we make any changes in this input.

So here in the onChange, we had given it an e.target.value. It means that we are taking any value here. So we had set that in the onChange. Okay? And how are we providing this onChange here? So we are taking one here and putting an onChange. Inside that we are writing.

Like this value, and in setData, what will we do with the data we already have? We will insert the same value in its name that we are setting in the onChange inside e.target.value. Okay? We will provide that in this data. Okay? And along with that, we had a value in a parameter. So our work is done here.

Now we give a value here. I will write value for a second. And what do we insert in this value? So what do we insert in this value? The data.name will be inserted here in this value like this. This means that.

Whatever data.name will be, it will also come written in our input. Okay? So we were providing this value, and what do we give as the value? We will give data.name here. So we have done this much work here. So if I go here, you will be able to see that we go to the Resume Builder.

So we see an input here that looks something like this, like it is written above Full Name, and it is coming in this way. Okay? So right now it is coming in our entire area. Okay? Why is it coming in the whole area? Because we have not given any height or width to our resume builder here yet.

So it automatically took the full height and width here. Okay? As we make corrections in it, our area will start to adjust automatically. But for now, understand this thing that our input has started to be visible here. A label is coming over it, ‘Full Name’ for us. This means that this has become our area. Okay?

Now first we create all the steps here. Then we will properly finalize our resume builder here. It means that we will give its width a limited width so that the area appears in the middle. Okay? We will do all other things later. First, understand this thing that our Step One is visible here.

Which has a Full Name and a text area is present. Okay? So now we have an input here. Similarly, how many total inputs do we need? So we need one for name, one for email, one for phone, one for location, and one for LinkedIn.

So here we need a few more inputs, so let's write that down. Okay? So here we go. So we have copied this. Now we have our one input here. Okay? One is for name, one is for email. After that one will be for our phone. One will be for our location.

One will be for the LinkedIn link, and one will be for the Getup. So these will give us a total of six inputs here. Now I will change the label's values inside these. Okay? I will change the placeholder's values as well. And here we are adding the value inside the name data that we already have.

Now here we will add the value in the email input. Its value will be our data.email. Okay? Similarly here in the phone, we will add the value. Here the data.phone will take the value. So I will first set up all these things here. Okay? Then I will show you here. This means that I will update it.

Just here we will update the label's value. Set the placeholder's. Here we will set something for email in the onChange. And write data.email in the value. Okay? Similarly, we write the phone here. Here we write it down. Here in place of email.

We write the phone. Here we write the getup and other links. We write all the other things that belong to us here. So now here we have updated their data. So basically we have written the name in the previous one. In the second one, we placed a holder and in the second one, we wrote the email here within the level.

We provided a placeholder. We have given some rul@mail.com here. Okay? After that, in set data, we need to keep the existing data as it is. But here in the email, we will put the V value that we will set here. Okay? See, we will set it like this and they will be inserted.

And what will the data and value be? Our data will be data.email. Okay? Likewise, we added a phone. We provided a default phone number here. And in our set data, we are setting the value of the phone inside the data data, where the value is data.phone.

Then we added a location inside a label where we are providing a default placeholder as Jhansi, UP, and by on change, we are saving the data under location in this way in set data. Okay? And here, inside the value, we are giving data.location. After that, we have a LinkedIn URL where we are giving a LinkedIn URL in the placeholder.

And here we are saving the LinkedIn URL in the data. And what is the value? data.linkedin. Then we are providing a GitHub URL here. We are writing the GitHub URL inside the GitHub placeholder. Inside the value here, we are providing data.

dot.github here. And here in set change inside set data, we are setting the same value in GitHub. Okay? So if we look at this, our things here are somewhat of this type. See, this way the location has become somewhat of our six here. Okay? So now I go here.

So this much work has been done here by us. That means step one is done here. Okay? It may not be visible properly right now. But it will be visible properly a little later. Okay? Now we adjust the step value to two. Now we are about to create our step two.

So we set the step value to two. So we will see the area of the second step. If I go here, you will see that we do not see any area because now the step value has become two. Okay? So now we have to create for step two. So now what do we do here? Again we go into the resume form. Now what do we need to do here? We need to create our step two here.

Okay? So now we write this in such a way that if we apply a condition here that if the value of our step is equal to two. Then we need to return something here. So we will return it here like this. Okay? Let's create a div like this. So we will return this div here. Now in this div, as we have taken an input here.

Now I need to create a summary area here. So for that, I will need a text area here. So just like we created an input component above. We will create a component for our text area here. So we write a function here and structure it like this, some text area. We create a text area component here. Inside it, we will give some value in the parameters.

And we will do here that we put curly braces. And we apply return here. And now inside this, we will have things like this. Like this we will create a div. Now inside this text area, we will set the values that we need to set.

Just like we set the values inside it, in the same way, we will also set the values inside the text area. Okay? We will give values in the parameters and access it inside this component. So now we process it this way in the parameter that here we give it a label that we have already

जैसे इसके अंदर हम वैल्यू सेट कराए थे, उसी प्रकार से टेक्स्ट एरिया के अंदर भी वैल्यू सेट कराएंगे। कुछ। ठीक है? पैरामीटर्स के अंदर वैल्यू देंगे और उसको यहां पर इस कंपोनेंट के अंदर एक्सेस करेंगे। तो अब यहां पर हम इसको इस तरह से पैरामीटर के अंदर चीजें करते हैं कि यहां पर इसको एक लेबल देते हैं जो हमने पहले

was given. They provide the same value. They give a placeholder on change. But now here instead of typing we give this daily. Meaning that we will tell how much row we add in the test area. Okay? This is something. Now let's start creating this test area. Let's give it some class.

Let's give a name here. So basically here we don't need to do anything different. The dip we had created inside the input area. We will copy this whole dip like this from here. Okay? And we will paste this same dip here like this. Okay? This is something. Now

here inside the level we need to create the same label. And now in place of the input, meaning this input of ours, I need to write here like this test area only. So we need to add a test area here. Rest. Okay? And here along with this, we need to add a row here. So let's write

like this I give row and what do we put inside row? We put the same row here that we are taking inside the parameter. Okay? Like this and we do not need to give it any type. So let's remove one type from here like this. Okay? We do not need to give type inside this. And along with this, its CSS

is all the same. But we add a small thing in its CSS. So we add this here, it becomes our resize. So we set the resize to none here. Meaning we can't change its size here at all. Because we are giving some three rows here.

For this reason. So now if I go here, then our test area has been created. Okay? Now we need to write this test area here inside step two. Okay? And the rest of the things like we were setting here. Okay? We were providing a placeholder.

We were setting the value and providing the value here. Everything else is the same. Here we do not need to do anything. Just instead of input, we have written a test area here. And the rest set the resize to none and provided one row inside its rows. Otherwise, it is just like the input. Okay? This is something. So now let's move to our step

two page. And inside step two, we need to put our test area. So here we give a class name to it. First of all flex, flex column and we give three for the gap here. Now what do we do inside it? Here we set our test area to the test area that we just created above.

So first of all, what do I need to give here? I need to give a label here. First of all, we give it a label here. And inside the label, we provide it with something like this. We give it a summary. So here we give it like this professional summary. Okay? Now after that, this is our label we give.

Okay? Now what do we need to give after the label? After the label now we need to give it some value here. We need to give an on change placeholder. Okay? So we need to give rows like this. So we give this. So before that, first here we give it some placeholder. So for the placeholder,

we provide it something like this that the backend developer with two plus years of experience building scalable Node.js and MongoDB applications. So in this way, we inform that you can add a summary like this. After that, inside a row, we tell it that we do not want default rows by default here. We need to add some five rows. So we will add five rows here. After that, we put an on change here.

So now here inside the on change, we set the data. So we take this value like this and write here.

And now what do I write here? Set data. So now we set the value inside set data. So the first thing is that the default data here will remain the same. We write here default data will remain the same but here we write our summary here like this.

Here is a summary of what should be included; the same value should appear here as we will set here. If we write anything in this, then what is coming in onChange inside the e.target.value is fine. We have accessed that V here, which we accessed inside onChange and set in set data.

The data we had earlier inside the summary will remain the same, but we have added that V here in the summary. Is that clear? So there will be some data here. After that, we need to provide a value here. So let’s write the value like this. Now what do we put inside the value? So we write data.summary here.

Data.summary. Its value will be here like this. Is that clear? Data.summary. So we have done some work here. So you can see here that we are using the same. Earlier we provided name, email, phone inside step one. Then inside step two, we added the summary like this.

We added our summary inside it. Is that clear? So we've added a summary inside the data. We’ve done this here and this much work has been done along with a paragraph here. We give this paragraph some class names like this. Some text with 10 pixels text, some black here, 40%.

Transparent. And now what to write inside it, let's write that. So now we have to write something in here like this. It should say 'Leave MT to skip this section.' Is that clear? That means if you want to skip this summary section, you can easily leave it here.

So we have created a test area inside step two where we will set the summary. So if we go here, we refresh this. Why is our one second not showing? It shows 'illegal return statement' here. Let's see what the problem is. What is the problem here? Alright? And where is it showing.

It's likely giving that in the same receive form. So where is the return statement facing issues? Let's take a look around. One moment. This debug we created here, we need to copy it here and we have to write it inside this curly braces because we need to return inside the resume.

Form, not like this. So we write it here like this. Alright? So step two is in these curly braces. If we go back here and refresh this for a second, you might see that you cannot read properties of undefined data here. So.

Here we write something that if the data value is not present, we take some action here. First, you see that both the professional summary and a test area have come up here. We can add values inside it. And there's also a paragraph saying 'Leave MT to skip this section.' So we have created our step two here.

Alright? And let’s see that we don’t run into any errors here. So this error is not ours here. It means there is no error in the resume form. But there is an error here in the fgsx inside set resume. Alright? Like this.

So if we go inside f. here, you see that we are placing results inside set resume and result.data here. So we can put a question mark here so that if there is a result, then its data goes like this.

So if we go back and refresh this once, you will see that the error which was showing earlier has been removed. Alright? Like this. So we've done some work here. Now what I need to do is create step three for you. Step two is ready here for the professional summary. Now we will create our step three here, so right now I know that it's not showing correctly.

But we’re just creating our steps. When we build the resume form correctly, we will automatically adjust its width and height so that it appears correctly centered here. Alright? We will do this after a while.

Let's create our steps. So again, we go here into our resume builder and inside the resume builder, we do not. Before that, let me do one more thing. Look here, I will give it a class name. This way we make the main height a certain screen here. I will write this here. Let's set the main height to a certain screen.

This way and we assign some width here. And we assign max width here. Let me give this a max width here. I set the max width to 2xl here. And by the way, if applicable, I will set the width to full here. Okay? This way, and together, I will set the margin x to auto.

So we apply some changes here. So you will see that it has come in this type here. Look, we can see things here in between, and if we give it some top margin here, say five, then it has also come down here. Now look, this area of ours looks very good here. Okay? Because we have added some CSS to it, as it was not looking that great before. It was not enjoyable either. So we added a little CSS which brought it to the center. Now it is starting to look a bit like it did before. Okay? Just like we saw in the previous demo.

Okay? And if I set the step value back to one here, then if we go here, you will see that our full name is properly shown in this area too. Okay? What we wanted to appear here is displaying properly. So what do we do here?

We start creating step three. So we write step three here. As soon as we write step three, our data has been removed from here. Okay? Now, let’s create step three where we will map our skills. So again we go into the same resume form.

Now we create step three. So we copy this step two from here and go here and write step three. Okay? If the step value is three here, then step three will appear here. So basically, we just need a test area here. But here, I need it for skills.

Okay? So first, look, we change the label here. We are creating it for our skills. So here we change the label and simply write skills and comma separated. So we need to write skills but here it has to be comma separated.

Now let's change the placeholder a bit here. And we set the placeholder here like this. We can write here: JavaScript, TypeScript, React, Node.js, Express, MongoDB, Redis, and Docker, AWS, Git. Okay? We write it like this.

And we set rows to four here. Okay? And here we need to update the data in our skills inside the set data. So here we write skills like this. Okay? And similarly, what will the value be here? data.skills. So we write data.skills like this. Okay?

So just as we wrote here inside our initial data, in the same way, we need to set the same value here inside them. Look at this. Okay? This has become like this here. Now let’s change the value of the paragraph. So here I will write something like: separate each skill with a comma.

Okay? And if we look at it now, you will see that our skills section has come up. Where it is writing as comma separated and here it is saying: separate each skill with a comma, and there is a placeholder. We can add values and so on.

So our step three is also complete here. Now let’s create our step four. Okay? And what will come in step four? In step four, we need to create an experience area. So if you remember, there was a button here that, when clicked, opened up a small form for experience.

Okay? We need to open that form, and also, there was a trash can icon there that, when clicked, made that form disappear. Okay? Because here this object...

हमारा क्या हो रहा था? एक्सपीरियंस वाला एक छोटा सा फॉर्म यहां पर ओपन हो रहा था। ठीक है? तो उस फॉर्म को हमें ओपन करना है और साथ में वहां पर एक डस्टबिन वाला आइकॉन भी था जिस पे क्लिक करने पे वो हमारा जो फॉर्म था वो गायब हट भी जा रहा था जा रहा था। ठीक है? क्योंकि यहां पर ये ऑब्जेक्ट

is an array. So, similarly, we will need to set data inside the object. We create a form here where we set the data, and how will we create that form? We will use the same input inputs, etc. There we will use a test area, and through that, we will create here. So this.

Somewhat of our experience section will be a bit important because we need to understand how we are going to create it. Then after that, we need to write the same for the project and education here. We just need to understand the experience.

We need to create a similar box here. So that will be easy for us. Okay? Let's do this work. So, for that, what do I do here? I create a separate component here. Inside that component, what will we do? Inside that component, we will set all the inputs we have; we had created input components, all those inputs.

We will set inside one box inside that input component. Okay? So let's first create that box component here. Now, again, we go into the login form and we need to create our step four here. For that, we need to create one component at a time. We are going to make an entry card here.

So first, let's do one thing here. Let’s create our entry card component here. And we will provide a child inside the parameters of that entry card component. And inside that child, basically, what will we do? Because if that entry card is ours, then for the entry.

We are currently creating for experience here. Okay? So let's assume we are creating for experience in our step four. So there will be a company name for experience. Okay? Alright? So we will need to fill an input for the company name. So what will we do inside its child?

We will use this input component. We will use our input component. So in a way, we can understand that our entry card will be something like a box type. And inside that box, we will fill in our input components as needed. Okay.

So how do we create this? First, let’s create that. Then we will see how to set data inside it. Okay? So first, here I create a function in this way, and we'll name this function an entry.

And one more thing, if we only create this for experience, then we won't have to create any components again for education and project. We just have to update the values we need to set in it. That's all. Okay? So this is easy for us.

It is easy to do component-wise things here. This way, we can do much more with fewer lines of code. Okay? Meaning we can use the same component in many places. So this is very easy, and coding should be done like this, that we can do more with fewer lines.

This is great that we can perform more tasks in fewer lines. So this method I am using here to optimize my forms and so on is excellent. Okay? Now after this, we will need to get some parameters inside this entry card. Before that, let’s return some.

Let’s return a div here. In this way. Now, basically, what will we do inside this div? This will be our box. Inside it, you know, a dustbin icon was also there, which when clicked, we will remove what? We will remove our entry card here.

Okay? From whose data? We will remove it from our data. Okay? Meaning that we will do something like this. And as we gradually proceed, you'll understand everything here just as we do things gradually. Okay? Now here, one.

What do we do here? We add some parameters. After that, we create our component's entry card here. So there will be two things inside the parameter here. One will be our children and the other will be on remove. So here the children basically will be if we wrap any component with this entry card, that component will become a child of this entry card.

Okay? So for that child, there is some data here specifying where we need to set that child in this entry card and on remove. So here we will use a dustbin icon. When clicked, this entry card will be removed from this array. Because if we look inside the initial data, our experience is an array of objects, and that object is...

...inside which we are creating? We are creating an object inside an entry card. If I need to add an entry card to the array, I will add an object inside it and that will become an entry card. And if I need to remove it from the object, what will I do? I will remove that object from the array. Okay? So in this way we can remove one entry card from there. So we can add many entry cards to our experience and also remove many entry cards here from our step four.

Okay? We are going to do something similar here with step five. We will do the same thing with step six. First, let's create our experience area. Let's create step four. The rest of step five and step six will remain the same. We won't have to do much there. Okay? So now here...

...let's start building this. First, we give this div a class name. So here we assign a class name to this div. First, we will make it relative. We will set overflow to hidden. We will give this a background color similar to white. Something bluish.

And here we will give the border a thickness. The border will be black at 50% transparency with a rounded excel and padding of three. And the shadow will be zero two pixels with ten pixels in RGB in some black color. Okay? Now after that, what do we need to do? Inside this...

...we need to provide a button. The button will be absolute and will have an icon for our dustbin. After that, we will create a div inside which we will place our children, meaning if we wrap an entry card with something, it will become its child.

So we will set that child inside this div. Look at this div. Now first let's give this button some class name. So we assign a class name here. We will make it absolute. From the top, we set it to some 2.5, right to some 2.5, and z index to 10. The text will be black with 35% transparency, turning red 500 when hovered, with a transition in color. Okay? We will do that here.

And after that, there is one more thing we need to do. What do we need to do here? If I go here, we need to add an icon inside it. I will name it FI Trash Two. We add a trash can icon here. We give it some size and class name. So we will simply give it a size. The size is set to 13 here.

And we will close it. And now this div is here. Let's assign a class name here. We will make it relative, set it to flex and flex column. Set the gap to 2.5 and right padding to six. And what do we need to put inside? So we will add the same children inside here.

These are the children we are getting in the parameters here. Okay? And how do we get those children? Here we will simply create a closing and an opening tag. Okay? For the entry card, and if we add any of those...



देते हैं। और अब यहां पर ये डिव है। इसको जरा कुछ क्लास नेम यहां पर देते हैं। इसको यहां पर रिलेटिव कर देते हैं। फ्लेक्स फ्लेक्स कॉलम कर देते हैं। गैप कुछ 2.5 और पैडिंग राइट कुछ यहां पर सिक्स कर देते हैं। और इसके अंदर हमें क्या डालना है? तो इसके अंदर वही चिल्ड्रन हम यहां पर डाल

देंगे। यह कुछ जो चिल्ड्रन हमें यहां पर पैरामीटर के अंदर मिल रहा है। ठीक है? इस तरह से और चिल्ड्रन हमें कैसे मिलेगा? तो यहां पर सिंपल सा हम यह कुछ यहां पर क्लोजिंग और एक ओपनिंग ओपन ओपनिंग और एक क्लोजिंग टैग बनाएंगे। ठीक है? एंट्री कार्ड को और उसके अंदर अगर हम कोई भी

When we add some input components here, that input will become the children of this entry card. So, all those children will be mapped inside our dip. Is that okay? Like this. So we have done some work here. Now we will use this entry card.

Let's use it in our step four, and first, we go to the resume builder here and write our use state for step four like this. Is that okay? So now what will happen here? Step four will be visible here. There's nothing in step four right now; nothing is visible. Is that okay? Like this. So now.

First, we go to our form resume inside the form. And now here, we again set a condition. Like this, first, we write it with this. Just keep in mind that we need to get things inside this curly braces. Okay? So now I put an if condition that if.

If the step has a value equal to equal to if our four is here, then what do we need to do here? Then we need to return here. We set up the return like this. And what do we need to return? So let's add a div here like this. Is that okay? So inside that, first, we write this kind of div. Is that okay? And this.

We give it some class name here. Like this, we add a class name inside it. And flex, flex column gap something four we set here. Is that okay? Like this. Now we start to put things inside it. So first, we write a paragraph. And when do we need to show this paragraph?

So we set a condition inside a curly braces for this. When do we need to show the paragraph? So when our data's experience inside it, if its length is equal to equal to 0, then we need to show this paragraph here.

Is that okay? This means that when there's no data in the experience, we need to show this paragraph at that time. So if I write here like this, I write data how to write? Experience we write here. Is that okay? So here we write like this data.

Experience.length. Here I write like this length. If this equals to equals to equals to if 0 is here, then we need to show this paragraph here. Is that okay? Like this, so one second, one second length we need to write. So TA is here like this length.

We write. And we give this paragraph some class name along with it. Before that, we should bring it down a bit. And we give this paragraph some class name here. Like this, and text some extra small, text some black 40 and text some center py of some three we set here. Okay? And.

We write it inside brackets like this. We do this much work. Now what do we need to write inside this paragraph? Let's write that. So what we need to write inside it? No experience added yet, click below to edit. Okay? Click blue to add we write here. This means that.

There is currently no experience added here because the length is zero. Okay? Like this. So now, what do I need to do here? Now I need to use the entry card. This means that we need to show that card here for us. So how do we do that here? So, one thing to understand.

Here what do we do directly? We directly map our data.experience here. Is that okay? We map in such a way that if there is no data here, then it will only write no experience added yet. But if there is some data there, a simple box will be created there, and many.

Boxes will be visible to us. Is that okay? Inside those boxes, we will have our data. For example, company data. How much experience we had in the company, for how long we worked, that entire data will be there. So we will set all that data there as well. Okay? And how do we do it first? Let's understand that. That means writing.

Let's start first. Then we will get the rest done. Okay? First, let's go here. Let's see what we do first with our entry here? First, we will get things done with our entry card here. So first, we will do a simple thing here.

So, what do we do here now? First, we will map the data here. Okay? So why do we need to map the data here? Okay? Because see, we will map it this way. I write data here like this, using experience.map, what should we do?

Here we will take our experience, comma, and an index here. We will add a comma like this here and take an index here like this. Okay? So we will map this here. And where do we need to map this? The map we will do here will be for our entry card.

We will map the data inside it basically, alright? And how will we map the data? We will keep it in a structure of closing and opening this way, see, this way we keep closing and opening, so that if we input anything in it, it will work as our children.

This is how we do things, and now let’s understand why we are mapping here. Because here we need to do what, as we can see, our entry card is holding a string type data here, meaning it has a string of an object inside.

Okay, and it is not necessary that we only have one entry card here. We may have an array of multiple objects in the data within our user experience. What does this mean? There can be multiple entry cards here. Therefore, what do we need to do? We are mapping this entry card.

We are mapping data within the entry card. Okay? What will happen here? As much data as we will have inside our experience and the array of objects, that many entry cards we will create. Did you understand this? Now, we will process things within it. Alright? We need to add an on remove.

So we can remove it by clicking on it. We will do this little later. We need to add; meaning, we need to add experience by clicking on a button. We need to remove it. Okay? And in addition, we need to update it. What does updating mean here? Updating means that the data we wrote once.

Okay? We wrote the data once and it got saved in our youth state within data.experience. Alright? It got saved in the youth state. Now we are rewriting that data from the same entry card. Meaning we are changing its value. So, in a way, that is what updating means.

Okay? So if we fill some data inside the entry card initially, then if we fill the data again, we will have to update the experience data of our resume. What do we need to do for that? We need to update the data in the experience.

If we make any changes here, then this is the thing. So for that, we have to get the data updated. We will create our own function for the remove, upon clicking on the dustbin button. Alright? What will we do? We will remove the entry card, meaning, the object from the array.

So we need to do all this here. Alright? So slowly, let's start doing that. And as I proceed with things here, you will slowly understand, because right now I am speaking out loud, so you may not be able to comprehend everything here. But as soon as I write down things,

you will see things on the screen in front of you. So automatically, you will feel that yes, this is how things are working. Okay? So this is the thing, that if you take theoretical knowledge, you may not understand much. But as soon as we take practical knowledge here, meaning doing practicals by ourselves.

When we do practical work here, we understand more things. Okay? That's why we say to subscribe to virtual code. The college will teach theory. We are doing practical work here. So now here, the first entry card is given a key and inside the key, we have an index.

We provide. Because as many objects as there will be in our data array of our experience, that many entry cards will be created here. Okay? And we also need to put an on-remove function here. Once we create the remove function, we will set it here. Before that, what do we need?

Look, we need a few things. For example, we need three inputs, and we need a test area. So first, let's see what will be in the first input? The name of our company will come in the first input. In the second input, what was our role in that company? In the third input, we will show how many days we worked in that company.

And in the last, we will add a test area. In that test area, we will display what activities we did in the company. Okay? So first, let's add an input here. We write the input like this. Then again, we will create another input. So this input is our component. Okay? Then we will create a third

input here. I write input in this way. Let's write input here. And we have three inputs and finally, we will create a test area here. So let's write here like this for the test area. Okay? Now we need to provide data inside them. First, we will give a label to this and inside the label,

we will write 'company'. Okay? Let's also provide some placeholders for it. We write 'company' here like this. Okay? One second, let's write this in double quotes. We write here like this 'company'. Okay? Now we will provide some placeholders here. Alright?

So we also write this in double quotes like this. We write 'ABC Technologies' inside it. Okay? Let's write some here. And after that, we added a placeholder to it. Okay? We also added our label to it. Now we need to provide values, etc.

because we need to add various items inside our input. Look, we gave a label inside this input. We have a type, which is 'text'. We provided a placeholder. We need to add value and an on-change function. We will set this a bit later. Okay? When we begin to see some data correctly here.

Then we will proceed with things. For now, just understand that we are adding these items here. First, we are creating an input for the company. Now for the experience, we need to specify the role we had at that company, and we place a placeholder that defines the role inside.

So now, we will write 'Backend Developer' here. Then again, we place a label where we will provide some duration. How many days did we work here? So let's write 'Duration' here like this. Okay? Let's write the duration here like this. Now we write the placeholder here.

In the placeholder, we will write what our duration is like this, from January 2023 to December 2024. Let's write it like this. So now when I look at it, it shows 'No experience added' here.

It's saying 'Click below to edit'. So it's saying 'Click below to add'. Now we need to create a button here so that when we click it, we can add an object to our experience. Okay? Inside it, we will display an entry card.

Here we will add an object, so an entry card will start appearing here for us. Because if there's some data in the experience, only then will an entry card be visible here. So if I take a moment to comment here...

Should I comment it out here? So now if we look at this, we will see it here. Look, for a second, we have faced an issue here. The console is showing that some index is not defined. So this index, let’s hold on to it for a moment.

Let’s remove this index for a moment. Now we go back again. See, it is appearing to us like this. Look, this is showing something. And we need to place this dustbin icon somewhere here. So we will place it here and also in the test area.

We need to add a placeholder and some labels here. This way, a box will be formed here. Alright? So we will do this. So let’s do one thing here. We will remove these comments and fix this dustbin icon.

So yes, for a moment, we have double quotes here. Let’s just remove it. Now it will come to our right side here, 2.5. Alright? We have done this much work. Okay, let’s move forward. Now let’s add labels in the test area here.

So here we write description. We write it here and we also give it a placeholder. And we will give the placeholders here like this. Inside curly braces, we will add a dot inside double quotes. Build REST API high and we will put backslash N here.

So that a separate dot will come down and we write 'improved performance by about 40%' like this. And if we go here, if we go here, let’s again comment it out so that things start to appear. Okay? Let’s remove this from here.

We will comment this out too. Now let’s go here. So look, it has come here now as well. Alright? And in this way, we have created an entry card here, inside which we have given three inputs and one test area. Alright? So our things have been set like this.

Now what do I need to do? I need to add a button below this which, when clicked, shows this entry card here. Alright? And we need to fill data inside it. So let’s do this. After that, what will we do? We will set the values inside this data.

We will set the data. Okay? And we will do this here. Alright? Let’s move forward. So again here we control S Z. So much work has been done. Now let’s add some buttons inside. On which, when clicked, we will add this to the entry card.

Alright? So what do I do here? I will create a simple button. And we give this button a little class name like this. And flex item center justify center gap some 1.5 width full here.

We give it a border of about 2.5. We will make it a dust border here. And a border black some 20% transparent rounded excel. The text will be some extra small and the text will be some black here 45% transparent, and on hover, we will make its border black 40% transparent.

On hover, we will change the text color to black and transition all this inside the button. Now, we also need to add an onclick event inside this button. On clicking this, we will need to add some fields to this data experience.

So that we will start seeing an entry card here. Okay? So let’s do this work. So here I write adding the FI plus icon here. Okay? We write the FI plus icon here and we give this some size of 13 and 13.

Now below this, we need to write add experience. Alright? So this much work is done. Now I need to create a function here to add experience. Alright? So here I will create a function. This way, we will write post add experience, and we write experience like this and an arrow function.

Let's do this here in this way. So here we need to do a simple task where we have to set the data which is basically data that we need to set here, and how we will set the data is that our existing data will remain as it is, we just need to write what our data dot experience is here, okay.

Inside its array, we need to add an experience, and within that experience's array, we need to add an experience which will have a complete object here. We need to add that here. So how to do this? In this way.

You understand that inside the data an experience is written like this, we put a colon so that one data will remain as it is. You will see that if we go here, one experience is here that we can access this experience from data dot experience.

Now what we need to do inside its array? We need to add experiences and we need to add an object inside it. Okay? That's why we have written it like this, experience. And now we need to do things inside it. So here we will put an array and in this way.

We put this here. Data dot experience. Data dot experience will remain as it is. Okay? What is here will remain as it is. So let's write data dot experience here. This means that by putting dot dot, it indicates that whatever data is already stored in our experience's array will remain as it is.

After that, we need to add an object here. So look, which object do we need to add here? That will have company, role, duration, description, where currently there will be no value for it. Okay? In this way, this is something additional, and now if we add anything here, experience.

So now what do I need to do here? So the data that we have set inside experience, now what do I need to do? I need to update the company name. I need to update the role name. I need to update the duration name. Okay? So for updating as well, we need to create a function here.

And one second, there are two things happening here, right? One data is coming and one experience is here, so we write this whole thing inside curly braces. Okay? So this is something here. Now let's understand one thing. Now what is the function of our add experience? Here we put an on click.

So I write on click here and what do we need to do on click? We will add an experience here. In this way. Okay? So if I go here, we have the add experience button like this. If I click on it, you will see that a new area has come to us. If I click on this again, another area comes up like this. Okay? There is also a remove that we need to implement by clicking on it. We will look at this now.

So if you notice one thing now that we have done here, what have we done? We have added an object inside the array of experience. We have added two objects. Currently, there are no values for company, role, duration, and description in those objects. Okay? So now what do I need to do? If I make any changes to the zero index here, what will happen?

What will happen to our zero index here, our experience object, what will happen to its data? It should get updated here. If I click on update here, then the object at index one in the array of experience should also have its data updated. Okay? So this.

This is how we will set its data values here. We will change its values here. Okay? And upon clicking this button, we will also remove it from our experience's array. So how will we remove it? Let's get bored for a moment. So how will we do that?

प्रकार से हम यहां पर उसकी डेटा को वैल्यू को सेट यहां पर कराएंगे। उसकी वैल्यू को चेंज यहां पर कराएंगे। ठीक है? और इस पे इस वाले बटन पे क्लिक करने पर डस्टिन वाले बटन पे क्लिक करने पे उसको अपने एक्सपीरियंस की एरे में से रिमूव भी करेंगे। तो किस तरह से रिमूव करेंगे? जरा बोर कर लेते हैं। तो किस तरह से फ़्टर

Will we get it done? So here again, we create a function in this way, I write here: cost, so I write remove cost remove experience, okay? And we will create an arrow function here inside which we will take the index by default, okay? A value here.

We take the index as a parameter, so here we will provide it an index. So it will remove any data present at that index from our data dot experiences array. And as soon as.

the data will be removed, automatically our entry card will be removed here too. It will not be displayed to us either. Okay? So this is what we are going to do here. So what do we do here? Just like we set the data here, we have to do things in the same way. So we write set data and set data.

We write here like this. The data that is already there will remain the same. So we just write data here and put a comma. Now what I have to do? From our array of experiences, I have to filter the data dot experiences. So I write here.

What to filter here? So we write here like this to filter. Okay? And how do we need to filter? So here there is an index. What do we need to do to that index? We need to remove it. Okay? This means that all the data at the indices except that index needs to be placed inside.

We need to put them inside the experience. So that index will automatically be removed from there because we are placing all the objects of the others inside experience but not placing that index. So what does that mean? The object will be removed from our experience array.

Okay, so here I first take an empty data and one index. Okay? Like this. And now what do I need to do? Inside this, what will happen to the experience is that all the indices we have so far will be present. It means all the objects will have their index present. So what will we do with that index? We will subtract that index here.

The index that is given to us in the parameters. Okay? So we write here i not equal to here write i not equal to equal to our index. So what will happen here? It will ensure that it adds all indices except this index to the array of experiences and remove this index. Okay, this is what is happening here.

It means it will filter out all those which are not equal to this index. So whatever is not equal to this index will be saved inside our experience, and whatever is equal will be removed from here. Okay? So now let's do one thing. We provided this remove experience here. We use it here.

Okay? So how will we use this? Here we had an object of remove experience. We were providing this to the entry card. Look, we are giving an on remove. Okay? So we write it like this in the same way on remove. Just a second. So upon removing.

What do we need to do here? So on removing we need to call this function here. Okay? Like this and we write here? Remove experience, and inside remove experience what will we put? Inside it.

यूज़ करेंगे? तो यहां पर एक रिमूव एक्सपीरियंस वाला एक ऑब्जेक्ट हमारा था। यहां पर हम दे रहे थे इसको एंट्री कार्ड में। देखो एक ऑन रिमूव हम दे रहे थे। ठीक है? यहां पर लिखते हैं इस तरह से ऑन रिमूव। तो यहां पर इस तरह से लिखते हैं ऑन रिमूव। एक सेकंड। तो ऑन रिमूव करने पर

हमें यहां पर क्या करना है? तो ऑन रिमूव करने पर हमें यहां पर क्या करना है? इस एक फंक्शन यहां पर कॉल करना है। ठीक है? जैसे और तो इसको हम कॉल बैक के साथ इस तरह से लिखते हैं और क्या लिखना है हमें यहां पर? रिमूव एक्सपीरियंस और रिमूव एक्सपीरियंस के अंदर हम क्या डाल देंगे? इसके अंदर एक

We will provide the index. Okay? This way we will provide it with an index. So let's say if our first card here means zero is at the index, what will its index be here? It will be zero. So zero will come here like this. Okay? So what will it do here? It will

remove the object at zero index inside our experience. Okay? So we have done some part here. So if I go here and click on the dustbin button, it hasn’t removed it yet. One second, is there an error? Oh, so on change is not

a function. So here on change is not a function. So what do we need to do here? One second. I will remove this here. Refresh again. Let's see now what error is coming. Let’s click on it like this. So if I click on it like this, then it should be

removed. Why is our remove not happening? One second. Let's see why it is not removing. So we have created this function correctly. Along with it, we are providing it with the index inside it. So one second, let’s go to our entry card. Okay? The entry card object we made, let’s go there and see what the issue is. So here, look, this entry card, one second, yes, that's why there is an issue here because we haven’t applied on click inside this button yet. So let's put on click here like this and write on remove inside it. Now

things will work here. Let’s go there again. And if I click here now. Look, it has been removed. I click on this. It has also been removed. Okay? And here it is saying no experience edit yet like this. Okay? And if I click on this again.

It has come back. I click on it again. I do it on this. So all of them have come here. And on clicking this, they are also getting removed. Look, they are getting removed. Now what do I need to do here? I need to set data inside them. Just like we were setting data inside everyone's. Similarly, we need to set data also inside this.

In the on change of this input, we need to provide a value field. Okay? This way we need to give things inside them. So now let’s go and create an update experience function here. Okay? You might be understanding why

we are creating the update experience function here. Because what have we done here? We have added to the experience but we don’t have any data inside it. Okay? So what do we need to do here? We will also need to update the data for that index. Okay? So we need to

update the data for that index. For that, I will create a function here. Post update experience and we will create an arrow function here like this. We provide some parameters to it. One is the index, one is the field here, and one is the value here. Okay? So how will things be like this?

So let’s understand this here. First of all, look, here the index will tell us which index we need to update. The field will tell us which field we need to update. Whether it is the company, role, duration or description, and the value will tell us what it will be here. Okay? What is the value of the company?

What is their value? So this is how we need to update things. Now we need to use set data inside it and update the value at that index inside set data. So let me first write down the complete set data here. Then

slowly we will understand what things we are doing. So first, we write it like this. I will create a variable named updated. So how do we update this updated variable? Let’s take a look at it. Okay? So understand this thing that we first did here. What is our one

धीरे-धीरे उसको समझते हैं कि क्या-क्या चीजें हम करा रहे हैं। तो सबसे पहले इस तरह से हम इसको लिखते हैं। एक मैं वेरिएबल बनाता हूं अपडेटेड नाम से। तो इस अपडेटेड वेरिएबल के अंदर हम किस तरह से उसको अपडेट कराते हैं? जरा उसको देख लेते हैं। ठीक है? तो इस चीज को समझो जरा कि हमने सबसे पहले यहां पर क्या करा है? जो हमारी एक

Data dot experience is an array in itself. Okay? Now, if we have to make changes to the object inside its index, we will need an index for that. So we will need an index and that experience.

Inside that, we will be able to make changes. So now what are we going to do here? We will simply do this that we will map it here. Okay? We will map data dot experience. From that, we will get an experience, whatever we have, and along with that, we will also get the object of the experience.

So first of all, we have to check here which indexes we are working on. If we have applied updated experience anywhere here, what will we do first? We will compare the indexes which we need to update. So first, we will consider one index.

We will check if the index we are taking is equal to the index. If that is true here, it means that if I want to update the object of the zeroth index, then the value in the index will be what? Zero. And there will be many fields inside.

There will be company, role, etc., and their values will be inside. Okay? So now what will I do here? First, I will check, I will find the index that I need to update. So here I have checked if our zero index is there.

If it has the zero index and its value is true, then I need to update that index. It means that the data in that object must remain the same. But any fields that we want to update here, we will collect that field into an array and provide its value ahead.

Okay? That means, if the value of this field is company, what will it do? It will put the same name value in front of that company, whatever value we give to that field. Similarly, if the value of that field is role, it will put that same value in front of it.

Okay? So let's say if that index is not found, it means that index is not found, so it will simply keep what is already there in the experience data. So the same experience data will come under updated. That same object will come here. Okay? Like this.

So now the object that we just updated is ready. Okay? So what we need to do? We must put that in the array of experiences. Okay? And now what is inside this updated data? What is inside this updated, it contains all the experiences that we have updated here.

Okay? Like this, the data inside the set data will remain the same as it was before. But the experience inside will be updated. Okay? So it's a simple thing. You understand, we will place updated here. So what will happen here? So basically understand one thing, we are updating the whole array of experiences.

Okay? How are we updating it? First, it checks which index it is finding that we need to update. So if it finds that index, it will only update that index and keep the rest of our extra experiences intact. Okay? It will save it like this inside updated. And later, we will insert that updated experience into the set data, which will populate our data here. Okay? This is how we are handling the changes.

Now, when we have to call the updated experience function, where will we call it? So here when we input, we will execute some on change, and within that, we will have to perform this updated experience. Okay? How do we do it?

अब अपडेटेड एक्सपीरियंस वाला फंक्शन हमें जब कॉल करना होगा कहां पर कॉल करेंगे उसको? तो जब यहां पर इनपुट के अंदर हम यहां पर क्या कराएंगे? कुछ ऑन चेंज यहां पर कराएंगे और उसके अंदर हमें क्या करना पड़ेगा? ऑन चेंज कराने पे इस अपडेट एक्सपीरियंस को यहां पर परफॉर्म करना पड़ेगा। ठीक है? किस तरह से करते हैं?

Let's see here. Okay? So here we are applying onChange like this. We are taking a parameter onChange inside the input. Okay? We apply onChange, and inside it, we are getting an e.target.value. So we access that value like this inside V. Okay? Now that

value, where do we need to set it? So, where do we need to set that value? Inside our updated experience. Because the value is being set in the set data inside updated experience, right? So, I will write updated experience here. And whom do we need to update? We will update that here.

We will give the value inside the parameter. Okay? What values need to be given? An index needs to be provided. So, we will simply provide an index here. And what is the value of the index? Here the index is. So if I give this input here, it will more or less take the input's index.

That means if the index of this entry card is zero, its index will be zero. So, it will take the zero for our updated one here. Okay? Now which field do we need to update? So here, this is for our input. This is our

company field. So, we write company here. So, we will write a company field like this. Okay? And then what do we need to provide here? We need to give it a value. So, what will we put inside the value? We will put the same B here that we are getting from the onChange. Okay? So, we will provide a B here. This

is something we have done here. And here, this is in a string. So, we will write it inside double quotes like this. And we have provided this onChange. Now at the last, we have one more value left. So, what will we put inside the value? The experience we are getting here.

What will the value of experience.company be? Okay? Experience.company, and how are we getting experience here? So, we are mapping it here. What will the value of experience.company be? It will be the value of that input here. Okay? This is how we need to handle things.

Okay? Now after this, what do we do? We also apply some placeholder for this role. I mean, we also put an onChange for the role here. We are setting a value inside it. So we will get that value here. When onChange happens, a value will be obtained. Okay? Now here the

updated experience, we will give it an index like this, and which field do we need to update? So, we need to update our role field here, and what value needs to be given? The value we got here from onChange will be the same, and what will the value be? Its value will be

experience.role. Experience.role will be its value. Okay, so see, this way we were providing these fields, right? Company, role, duration, so some will be their values as we move ahead. Now we will apply onChange to this duration. We are not applying this onChange arbitrarily.

We need to update the values inside the parameter in the input component. So, we are providing some here. So we give it a B like this. Now again, we write updated experience here. After that, we give it an index. Now after the index, we tell it that we are writing for duration here.

So here we will write duration like this. Okay? After that, we need to provide a value. So we will provide the same V value. Okay? Now moving ahead. Again we will apply onChange in the test area. So now we need to update the value inside the test area.

So here we write V like this. Okay? And here also, we write it like this updated experience. And inside updated experience, we first give it an index. What do we provide here after a comma? Here a one. So now we need to provide what? A description here.

So let's write the description. So here we will write the description this way and give it a value, so we will write B here in this way. Okay? So we have done this here. Now if we put any data inside this, it will automatically be the same as our initial data for the resume.

Inside the experience data, it will create an object here. It will put a value inside that object. Okay? So the work we did here with experience, we need to do the same with projects. We need to do the same with education. Just in different steps.

Where we wrote experience, we will write projects and education here. The rest of our entire step is the same. We don't need to do anything different. Okay? So if I go here, you will see that adding experience appears like this. If I click on this, it will also be removed.

It comes up here. So what is this? This is what we're seeing, step four. Now let's create our step five. Okay? Step four is completely done. We can take data here. The data we are writing inside it has been updated.

So if I look at this, then the company dot date will mean that the data will be written in experience dot company. Inside experience dot role, it will be written there like this. Okay? So when we show all this data in our preview area, the data we are setting here will be shown in the preview area.

At that time, we will see that entire area, meaning we will see all the data when we display it in a preview area. Okay? We have done this much work. Now let's create our step five and step six. So now what do we do? We go back here and.

Create step five and step six. So let me copy step four from here like this. Okay? So we copy step four entirely from here. And now we go down here like this and create a step, we will name it step five. And we will create one later. First, let's write step.

Five here. Okay? So now what do I need to do? I need to work here for our projects. Okay? So in add experience, where it says experience, I write projects here. Okay? And this is the same name that we had given in the initial data. It's called projects.

So we need to write that. Only then will things be updated there. So here we write it as projects. And we need to add an object inside data dot projects. So we change that object here a bit. Okay? So we change this object here.

It will have name, tag stack, getup, and description here. Okay? Like this. So all these things will be here. After that, whatever we need to remove, we will remove it from inside projects. So we write like this in projects.

Okay? We need to call data dot projects here. So we write data dot projects here. Okay? Very simple. Now we don't need to do anything. Wherever we kept experience, we just need to write projects there. Okay? Just like that, we will write what we write instead of updated experience.

Instead of experience, I write like this pro updated here. Okay? So we write update pro like this so that we know it reflects as pro. Also, we will write remove pro here, and we will write projects. So here we wrote updated pro.

Inside what else do we do? We will update projects here. So we write it like this projects and similarly here we write pro like this instead of e x p we write pro this way. The data for e x p will remain the same here. The rest of the fields inside it will be updated.

Let’s write sem here, Professor, like this. Okay? And what will we do inside the set data under projects? We will place the updated data here. Okay? Like this, and now if the value of data dot projects is zero, then we need to add some paragraphs inside it. Okay?

Let’s change the value of the paragraph a bit. So here instead of no experience, we will write no project. No project added yet, click blue to add, we will write it here like this. And now who do we need to map? We need to map data dot projects. We will do it like this.

Instead of experience, we will write here for the index, Professor. Okay? And here remove and look, and with it, now the function of remove on remove will work here. Okay? And we don’t need to give a label for the company here anymore because now the value has changed.

Here. Now we have name tag stack, and here the description has been updated. So let's update that value here a bit. Okay? So here we will change the label, placeholder, on change, and the value’s value of all these a bit. The rest will remain the same. Just.

We will change their value. And how will we do it? First of all, let’s write name here like this. Okay? And inside the name, we will give a placeholder for it. So here we write project name like this. I will write project name, project name here and we will place it.

Inside the placeholder, we give it a project name. You can write project name like this using interview IQ. Okay? And what do we need to update? We don’t need to update experience. We need to update here, updating the professor like this. So here we write update prof.

The index will remain the same. I just have to write what in place of the company here? Instead of the company, I have to write name here. So here, like this, I write name here. Okay? This is something. So you must be understanding that according to the new object data, we are updating our inputs and text area.

According to this new data, which has name, tag stack, getup and description. Okay? We are updating like this. And we have some done here. And here what will come inside the value? Inside the value, pro dot name will come here. We will write it like this.

Pro dot name. So just like we updated this input, we need to update this input as well. The same input and here we need to update our text area. Okay? So first let me update this. So see, we have updated our input here. Here we first.

In this input, we have stack tag for the label. Okay? After that, we wrote pro dot tech stack here for its value. On change, we have given an index in the update prof inside here. We have given a tech stack here, we have given it a name and given its value. Okay? Meaning we have provided a field.

And given a value. And inside the placeholder, we have written something like react note js mong here. Okay? After that, we gave a label here named getup link and gave the value of pro dot getup and on change, we are updating inside update prof an index and a getup.

Field value. Okay? And we are updating inside the value. Okay? And in the placeholder, we have given the getup link like this. Okay? Now lastly, we needed to give a description in the text area. So we have given the value of pro dot description here. And on change.

We are providing an index inside update prof for the description and here we are providing. Okay? The value means that we are updating a value inside that field and in the placeholder, we are writing something like AI powered interview preparation platform here. Okay? And.

Platform with mock interviews and resume builder. So take a look at what all things we need to update and you can write in the same way. Okay? You will understand the other things as well. What we are going to do. What we have done here earlier means what we did in Step Four here. Okay? What we have...

What we did alongside its own data experience. Now here we have replaced experience; instead of that experience, we are now working with its projects here. Okay? So first we added 'add experience' and replaced it with 'add project' here.

We wrote 'add remove project'. We wrote 'update project'. Okay? Just like we were removing experiences in our entry card, similarly now we will write 'remove project' here. Just as we were updating experiences, now we have written 'update project' here. Okay? And...

Inside it, we added a field in our projects, added an object for name tag, stack, get up, description, and we updated these as well. Where we needed to write name, we will give a different label or we will give project name there. Just like we earlier were giving company names there, now we will give project name and so on.

Now here where we were doing 'add experience', instead of 'add experience', we will write 'add project'. Here we will write 'add project' instead of 'add experience'.

Okay? So now if we go here, you can see what we have showing here? Currently, we can see our fourth step. Okay? So if we go into our resume builder and set its use state to five here. Now we will see the fifth state displayed here, the current state. Okay?

If we go here, you will see that where it was written 'add experience', now it is written 'add project' and 'no project added yet, click below to add.' If I click on this now, there was a second error that appeared here, and what error came? Test area is not...

defined here. Just a second, okay. So just a second, we will go to our resume form, so just a second here. Oh, we wrote the test area incorrectly; it should have been a capital 'A' in test area, right? Similarly, we will also make this capital in projects. Like this now...

This is correct. Now let’s go back here. So if we now remove this and if we add here, see now our projects area has been added. Look, it has been added. If we remove it here, see project name is coming. Here it is writing interview ID. Tech...

Inside the stack, this placeholder is appearing similarly. Get up link in this way, description something like this, when you click on it, it continues to add here. Okay? And if I click on the pin button here, this is also our removal here. Look in this way, so this project area...

is completely built and whatever we write inside it, our data will also update there. Okay? Like this and if any error comes later when we input the things, if an error occurs then we will solve it then. For now, our UI keeps getting built. Okay? Now what do we do? Just like...

we created for 'add project'. Similarly, now we will create our sixth step for what? For education. This is the last step for our education. So where we were writing 'data dot projects', we will write 'data dot education' there. Okay?

That's it; the rest will remain the same. The same thing needs to be done. Just like we updated it to pro. Mean we updated step five. Similarly, we will copy this. Now what we need to do? We need to update this step five. According to our education. Earlier we updated step four according to projects.

Now let's update step five in our step six. According to what? According to education. Okay? So now if I go to the initial data here, education is written like this. We need to update it. Okay? So let's go there. First of all, look here, data.data comma, we need to add something here.

What to add inside the data? We need to add data inside education. So we will add an object inside data.education, and there won't be a name tag stuck here. There will be something else here. So we write the object here. So there won't be any names or something here.

Let's remove that. And now we will have a college, a degree, a branch, a CGPA, and a year. Okay? So in total, we have five here. Okay? Let's write some of this here. There is no description here. So what does this mean? We won't give a test area inside it. Instead, we will update five inputs.

We will replace the test area with inputs. Okay? After that, instead of add pro, I will write add education here like this. Okay? Similarly, instead of remove pro, it will be remove education like this. Okay? We will do some things here. Here we will write education instead of project like this, and here also instead of projects, we will write education like this.

So here we write education like this, and everything else remains the same which will be removed like this now. After that, we will make some changes in the updated pro. Instead of projects, we will write our education here, and we will also write updated education here like this.

And also here, we write that we are mapping to one pro, so we will write education here like this. We'll write the same here too as education. And we will add EDU here like this. Now here, data.set data will remain the same inside set data. But the updated education inside education will be updated like this. Okay? Now we will check if our length of data.education is equal to zero.

If so, we will write no education here like this. I will write no education added here like this. Okay? And similarly, whom will we map? We will map our education. Okay? And here inside the entry card, we will give it an index. What do we have to do to remove? We have to use remove education like this. So it will remove the education.

We will do some things here. Now what we have to do here? We need to change the input values. Okay? We need to change the values of all inputs. So let me do one thing. I will change the input values first and then show you. Okay? So this is very easy. We have done it many times before. Okay? I just have to change the label here.

I will need to change the placeholder and on change here, and I will need to change the value. Just good inputs here. Everything else is the same. So we are doing this after a little while. First, we write add education here when clicking on the button like this. Okay? This time instead of adding project, I write add education here.

So we have done this here. Okay? Now let's change our inputs here. So we need a total of five inputs because this time we have fields like college, degree, branch, CGPA, and year. So we add five inputs here. So now you can see that we have added five inputs inside it.

Now let's take a look at these five inputs. So first of all, see we are mapping data.education here. So here it is like this.

तो ये कुछ हमने यहां पर कर लिया। ठीक है? अब बस यहां पर अपने इनपुट्स को चेंज करा लेते हैं। तो टोटल कुछ पांच इनपुट्स हमें चाहिए क्योंकि इस बार हमारे पास कुछ एक कॉलेज, डिग्री, ब्रांच, सीजीपी और ईयर कुछ पांच फील्ड हमारे पास हैं। तो पांच यहां पर इनपुट ऐड करते हैं। तो ये कुछ यहां पर

हम पांच इनपुट इसको देते हैं इस तरह से। तो अब यहां पर देख पाओगे आप कि हमने कुछ पांच इनपुट्स इसके अंदर ऐड किए हैं। अब इन पांचों इनपुट्स को जरा एक बार देख लेते हैं। किस तरह से हमने ऐड किए हैं। तो सबसे पहले तो देखो यहां पर डेटा डॉट एजुकेशन को मैप करा रहे हैं। तो यहां पर इस तरह से

Education is written here. Is that okay? And some of these indices will remain the same, and all these things will be fine, and by removing, the remove education option here will work, which will fetch our data from data dot education, okay? Now look inside this, first we will add a label.

We added an input, meaning that we added an input in which we provided the label college slash university. In the value section, we will put education dot college here, and on changing, we will get a value that will be what we updated in education and we will put an index in it, and give it a field.

College, and we will provide a value here. Is that okay? And here we will put in the placeholder some SR group of institute like this. Is that okay? And basically, you can write anything here. Just write the name of your college here. Is that okay? You can write anything in the placeholder. Is that okay? After that.

What do we do here in an input? We give it a label. Degree, and in the value, it will be education dot degree. Similarly, in updated education, we will give it an index. A degree will be provided here as a value. So what will happen here? It will set data here.

Inside education, it will update that field that we want to update here. Is that okay? So we are giving the field here as degree. So the value will be placed here which we are updating here. Is that okay? And in the placeholder.

Let's write B.Tech here. Similarly, we did with the branch. We provided education dot branch in the value here. In updated education, we gave an index. We gave it a field branch and provided here B. In the placeholder, we put computer science. Similarly, we provided CGPA here.

We added the year here. Is that okay? So this way we have done things here. The rest of it is exactly the same. Is that okay? We didn't have to do anything different than what we did in step four. We did exactly the same thing in step five. And we did the same in step six. Is that okay? Now let's work here and go to our.

Resume builder, and we give it here step six. So now which area will be visible? Now we can see our sixth step which mentions no education added, add education. So when adding education, college university is coming, degree is coming, branch is coming.

PGP and air is coming here, and by clicking on it, they are being added here. And by clicking on this dustbin button, they will be removed from here. Look, everything has been removed like this. So our whole work here is complete. Our five steps have been created here. Now what do we have to do with these steps?

We have to map these steps. Meaning, we have to set where? To our resume area. Is that okay? So in that resume area, we are placing them. Now what do I need to do here? I need to make our resume area a bit better here. Meaning, improve it nicely here. Is that okay? Well.

Then inside it we will do things. [music]