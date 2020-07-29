//packages
const path=require('path');
const express = require('express');
const socket = require('socket.io');

const publicPath=path.join(__dirname,"/public");
console.log(publicPath);
// App setup
var app = express();
const PORT=process.env.PORT || 5000;
var server = app.listen(PORT, function(){
    console.log('server setup done PORT:',PORT);
});

// Static files
app.use(express.static(publicPath));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {
    //1.5
    console.log('Connected Client : ', socket.id);
   // botreply.message=menu;
   botreply.message=main_menu;
    socket.emit('chat',botreply);

    // Handle typing event
    socket.on('typing', function(data){
        //socket.broadcast.emit('typing', data);
        socket.emit('typing', data);
    });

    // Handle chat event 
    socket.on('chat', function(data){
      

        socket.emit('chat',data);
        chatbotReply(data);        
        socket.emit('chat',botreply);
    });
});

//CHAT BOT
/*
var menu=["Hi, how may I help you?<br/>",
              "Please reply with the numbers to the corresponding questions.<br/> 1.What is IP? <br/>2. How is IP? <br/>3.Bitrix24 Issues <br/>4.IP training issues <br/> 5.Jobs available"];



var replies = [
              "Watch the below video <br/> <a href=\"https://www.youtube.com/watch?time_continue=142&v=OnKfrQrEOrk&feature=emb_logo\" target=\"_blank\">URL</a>: <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/OnKfrQrEOrk\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe> <br/> Need any more assistance reply with *",
              "Watch the below video <br/> <a href=\"https://www.youtube.com/watch?v=Hs9npUUIg4I&feature=emb_logo\" target=\"_blank\">URL</a>: <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Hs9npUUIg4I\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe> <br/> Need any more assistance reply with * ",
              "Please reply with the corresponding <br/> Question number to get your queries Cleared.<br/> 1.question1 <br/> 2.Question2 <br/> 3.Question3 <br/> 4.Question4 <br/> 5.Question5 <br/> Reply with * to go back to the previous menu",
              "<a href=\"https://docs.google.com/document/d/1fCdmvD2oaQ-9gxW8LN4SYazK_rfx2ylX_g3-4V7ujtc/edit\" target=\"_blank\">click here</a>",
              "<a href=\"https://docs.google.com/document/d/1hvUpHJH5L8UTyets-gw8XYZ-gIv2jzofM3I6Uy7HuO8/edit\" target=\"_blank\">click here</a>"
            ]; 

*/




var botreply={
    message:''
}

var main_menu = [
  "Hi, how may I help you?",
  "</br>Please reply with the numbers to the corresponding questions.<br/> 1. General IP Queries <br/>2. Learning Path Issues <br/>3.  Bitrix Issues" 
];
var general_issues_q =[

"1) What is the job profile? Will we be able to work only in the tech we have chosen for the internship?",

"</br>2) I just joined the group and I am not understanding what to do further. How do I start my internship?",

"</br>3) I have opted for a blockchain internship, can I also learn about AI and do an internship in both? ",

"</br>4) Can I switch my technology now? / I had enrolled for two technologies at the time of form-filling and got selected for the technology I’m not interested in.",

"</br>5) Is it okay to mention this internship as ongoing for college records?",

];


var general_issues_a = [

"Your job profile is 'Technology - Intern'; if you're in cloud computing technology to update in your LinkedIn or resume, you can write as 'Cloud Computing - Intern'.</br> Yes, you'll only work in the technology you're selected for but you can take the training of other technologies.",

"Please go through the mail from which you have accepted the invite and check the task section as well.",

"You can learn both the technologies using Learning Path 2 (LP2) which will begin after the 2nd week of March, but your internship will only be continuing with the one you are selected for.",

"You cannot switch the technology currently.</br> You have to continue with the one you are selected for.</br> In the case of multiple form entries, you just got selected for one of them; the first one that you entered. </br>You cannot make a switch right now.",

"Yes, we'll provide every intern a joining letter as soon as all interns are inducted." 
];


var lp_issues = [
  "1. Learning Path 1 <br/>2. Learning Path 2  <br/>3. Learning Path 3  <br/>4. Live Projects"
];

var lp1_q = [
"1) Not able to access the LP1 page with my token/ When I put my token it redirects me to the home page/ Getting error while accessing the page- User Not Found/Website Redirection Issue/Tokens not working.",

"</br>2) Login issues with training/ for every module of LP1/ LP2, do we have to register again for access to the content?",

"</br>3) I am applying my 2nd token that is the LP1 then it shows invalid user but the first token was accepted. What should I do?/ Tokens not working",

"</br>4) I did follow the instructions given in the video, but still, I'm not able to log in for the LP1 task",

"</br>5) What do I do after completing the quiz? how to complete the entire lp1"

];

var lp1_a = [
"Please watch the videos shared with the invite and you should not face any problems in accessing the training.</br> Please follow the protocol shown in the videos.",

"Yes, you need to register for every module of training.</br> Some of you are facing login issues, we have kept the training visible without login. Even then, to post a comment and give a quiz you'll have to login. </br>In case you face difficulty to do so, please try to perform your quiz or post a comment by using a different browser or incognito mode.",

"For each training of LP1, there are different tokens. Please read the tasks or watch the videos again meticulously. Try accessing it in incognito mode.",

"Ensure you're using the right token",

"There are tokens for each training in the task, if this learning path is done, please wait for the next learning path to begin and then please try to finish it. </br>If you are done with LP3 please wait for Live Projects to begin."

];

var lp2_q = [
"1) What happens in LP2? What kind of training can we expect? Is it a Basic/Advance level?",

"</br>2) Why only this training for LP2?",

"</br>3) Can I do certification for the training provided in LP2?",

"</br>4) The videos of LP2 are taking too much time to load."

];

var lp2_a = [
"The main focus of LP2 is to provide you with a basic foundation of the technology you're interested in. </br>The training is also handpicked in such a way that they enable you to work on LP3 assignments which interim gives you the beginning to start your study for the selected technology and in no terms is the only/ final training you should look into. Please keep learning after your LP2 is complete, that is the only way to grow in your technology of choice.",
"They are our training partners and we have handpicked this training to cover a certain topic for you. </br>These training cover from the very basic to intermediate level and is the perfect medium for you to have a starting point.",
"Yes, Cloud Counselage has purposefully partnered with Edureka so as to enable our interns to get the advantage of the corporate benefits at 'no profit no loss' basis for Cloud Counselage, that we receive from the partnership. </br>Being our interns, you can get huge discounts on the certifications you choose to enrol for through Cloud Counselage and Edureka. In case you want to know more about the discounts offered, please reach out to ‘Cloud Counselage HR’ or write to hrsupport@cloudcounselage.in.",
"We have uploaded the videos of the highest quality and best resolution which has resulted in some videos being over 1 GB as they are of hours in duration. </br>To experience these high definition videos we request you to wait at least 5 minutes or more; depending on your computer's RAM and internet connection."

];


var lp3_q = [
"1) What happens in LP3? What kind of training can we expect? Is it a Basic/Advance level?",

"</br>2) What will be the projects in AI/ ML/ etc. technologies in LP3/ Live Projects?",

"</br>3) Live Project/ LP3 has to be submitted individually or it will be a group project?", 

"</br>4) Will I get LP3 and Live project of technology other than what I am selected for?",

"</br>5) Where do we push the code in LP3?",
];

var lp3_a = [
"LP3 will be assignment based and its execution and content vary from technology to technology.</br> This assignment will be like a mini-project for all interns in a particular technology which will be verified by Cloud Counselage Project Managers.",
"Projects in LP3 and Live Projects will be relevant to your training and ongoing projects in Cloud Counselage.</br> The actual problem statements will only be given when the LP3/ Live Project phase is in progress to keep the interns focused on LP1/ LP2.",
"All the LP3/  Live Projects are on an individual scale.",
"No, you will receive LP3 and Live Projects of your respective technology.",
"Please push you to code in a public repo of your GitHub account if required by your LP3 assignment."

];


var live_projects_q = [
"1) What to do after Live Projects? Are we getting an offer letter/Stipend?",

"</br>2) Are LP1/ LP2/ LP3 a part of the Live Project?",

"</br>3) Problem statements of the Live Project will be chosen by the intern or will be provided by Cloud Counselage?",

"</br>4) Will Live Projects have only one technology or a mixture of technologies?",

"</br>5) Live project's use case will be provided or can we have our own use case?",
];

var live_projects_a = [
"Submit your project and once it's reviewed as successful, collect your internship letter.</br> Your internship is complete after this. There is no stipend for live projects.</br> If your work is sublime and we have a vacancy in the position you're interested in, you may be offered a chance for interviews and can get an offer letter from Cloud Counselage Pvt. Ltd.",
"LP1/ LP2/ LP3 is your preparation for the Live Project. </br>All the phases LP1/ LP2/ LP3/ Live Project are a part of this internship.",
"Live Projects will be provided by Cloud Counselage as these are the ongoing projects of Cloud Counselage and your opportunity to create an impact in the organisation.",
"Live Projects will have only your part of technology even if there are multiple technologies that are a part of the project, you will be working only on the part that covers your technology.",
"Live project's use case will strictly be provided by Cloud Counselage and you cannot choose your own use case."

];

var bitrix_issues_q = [
"1) I m not able to access my Bitrix24 account?",

"</br>2) How many workgroups will an intern be a part of?/ How many workgroups should I be in?",

"</br>3) I am not able to see my tasks.",

"</br>4) What do we do in the work report?"

];

var bitrix_issues_a = [
"Go to https://cloudcounselage24.bitrix24.com/ On the Login page, In the, ‘Enter the phone number or email’, type in your email id that you have registered with Cloud Counselage and Click ‘Forgot Password’. In case the problem persists, please write a mail to hrsupport@cloudcounselage.in",
"Every intern should be a part of 2 workgroups. </br> 1. 202003-IP  -- This is a general workgroup. Everyone who is enrolled in IP should be a part of this workgroup.</br>2. 202003-IP-Technology  -- This is a technology-specific workgroup. You'll be added to the technology you had enrolled for.</br> For example 202003-IP-Python -- for students who enrolled for python.</br>If anyone has not been added to any of these workgroups, kindly message 'Cloud Counselage HR ' regarding the same over bitrix24 platform.",
"Please remove the default 'In Progress' from your filter of the task section and try.",
"As mentioned in the video, please write what you have done this week and request approval from your supervisor by clicking on 'send to supervisor'."

];


var subreply='0';
var wrongChoice="Please enter a valid option!!";


function chatbotReply(data){
    console.log(data);


    
 if(subreply==0){
        switch(data.message) {
              case '1':
                  botreply.message=general_issues_q;
                  subreply=1;
                break;
              case '2':
                  botreply.message=lp_issues;
                  subreply=11;
                break;
              case '3':
                  botreply.message=bitrix_issues_q;
                 subreply=111;
                  break;
              case '*':
                  botreply.message=main_menu[1];
                break;
              default:
                  botreply.message=wrongChoice;
            }
  } else if(subreply==1){
    switch(data.message) {
          case '1':
              botreply.message=general_issues_a[0];
            break;
          case '2':
              botreply.message=general_issues_a[1];
            break;
          case '3':
              botreply.message=general_issues_a[2];
              break;
          case '4':
              botreply.message=general_issues_a[3];
            break;
          case '5':
              botreply.message=general_issues_a[4];
            break;
          case '*':
            subreply=0;
              botreply.message=general_issues_q;
            break;
          default:
              botreply.message=wrongChoice;
        }
      }
        else if(subreply==11){
          switch(data.message) {
                case '1':
                    botreply.message=lp1_q;
                    subreply=21;
                  break;
                case '2':
                    botreply.message=lp2_q;
                    subreply=22;
                  break;
                case '3':
                    botreply.message=lp3_q;
                    subreply=23;
                    break;
                case '4':
                    botreply.message=live_projects_q;
                    subreply=24;
                  break;
                case '*':
                  subreply=0;
                    botreply.message=lp_issues;
                  break;
                default:
                    botreply.message=wrongChoice;
              }
}else if(subreply==111){
  switch(data.message) {
        case '1':
            botreply.message=bitrix_issues_a[0];
          break;
        case '2':
            botreply.message=bitrix_issues_a[1];
          break;
        case '3':
            botreply.message=bitrix_issues_a[2];
            //subreply=2;
            break;
        case '4':
            botreply.message=bitrix_issues_a[3];
          break;
        case '5':
            botreply.message=bitrix_issues_a[4];
          break;
        case '*':
          subreply=0;
            botreply.message=bitrix_issues_q;
          break;
        default:
            botreply.message=wrongChoice;
      }
    } else if(subreply==21){
  switch(data.message) {
        case '1':
            botreply.message=lp1_a[0];
          break;
        case '2':
            botreply.message=lp1_a[1];
          break;
        case '3':
            botreply.message=lp1_a[2];
          break;
        case '4':
            botreply.message=lp1_a[3];
          break;
        case '5':
            botreply.message=lp1_a[4];
          break;
        case '*':
          subreply=11;
            botreply.message=lp1_q;
          break;
        default:
            botreply.message=wrongChoice;
      }
} else if(subreply==22){
  switch(data.message) {
        case '1':
            botreply.message=lp2_a[0];
          break;
        case '2':
            botreply.message=lp2_a[1];
          break;
        case '3':
            botreply.message=lp2_a[2];
          break;
        case '4':
            botreply.message=lp2_a[3];
          break;
        case '*':
          subreply=11;
            botreply.message=lp2_q;
          break;
        default:
            botreply.message=wrongChoice;
      }
} else if(subreply==23){
  switch(data.message) {
        case '1':
            botreply.message=lp3_a[0];
          break;
        case '2':
            botreply.message=lp3_a[1];
          break;
        case '3':
            botreply.message=lp3_a[2];
          break;
        case '4':
            botreply.message=lp3_a[3];
          break;
        case '5':
            botreply.message=lp3_a[4];
          break;
        case '*':
          subreply=11;
            botreply.message=lp3_q;
          break;
        default:
            botreply.message=wrongChoice;
      }
} else if(subreply==24){
  switch(data.message) {
        case '1':
            botreply.message=live_projects_a[0];
          break;
        case '2':
            botreply.message=live_projects_a[1];
          break;
        case '3':
            botreply.message=live_projects_a[2];
          break;
        case '4':
            botreply.message=live_projects_a[3];
          break;
        case '5':
            botreply.message=live_projects_a[4];
          break;
        case '*':
          subreply=11;
            botreply.message=live_projects_q;
          break;
        default:
            botreply.message=wrongChoice;
      }
}


}
