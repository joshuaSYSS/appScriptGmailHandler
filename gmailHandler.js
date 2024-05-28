function gmailHandler() {
  let currentGmail = Session.getActiveUser().getEmail();
  var firstThread = GmailApp.getInboxThreads(0,1)[0];
  var message = firstThread.getMessages()[0];
  var body = message.getBody(), title = message.getFrom();
  var messageCount = GmailApp.getInboxUnreadCount(), messageUnreadCount = 0;
  
  var title = "Thanks for your gmail.";
  var content = "Thanks " + message.getFrom() + ". Got your gmail. Will reply as soon as possible";

  if(message.isUnread()){
    if(message.getFrom() != currentGmail && !message.getFrom().toString().startsWith("no-reply") && !message.getFrom().toString().startsWith("support") && !message.getFrom().toString() == "HackerEarth"){
      GmailApp.markMessageRead;
      GmailApp.sendEmail(message.getFrom(), title, " ", {htmlBody:content});
    }
  }
  else{
    message.moveToTrash();
  }
}
