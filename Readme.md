# Knowledge Rocket
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Summary:
Knowledge Rocket is for teachers who wish to provide automated knowledge reminders for their students.

Students are registered by teachers and do not need or use accounts of their own.

Knowledge rockets are short paragraphs followed by a multiple choice question. These are automatically sent two days, two weeks, and two months after a lesson is taught and are intended to cause the student to recall what they have learned. The rockets should not be used to provide an exhaustive review. Instead, they ask the student to "reload" the mental maps the acquired during the lesson.

## Contents:
- [Front End](#front-end)
- [Back End](#back-end)
- [DataBase](#data-base)
- [Server Host](#server-host)
- [Billing](#billing)
- [Notifications](#notify)
- [OAuth](#oauth)
- [Encryption](#encryption)
- [Team](#team-members)
- [License](#license)

## Knowledge Rocket Stack:

## Front End:
- React
- Redux
- Stripe
- Axios
- React Router

### Middleware:
- Thunk
- Logger

## Back End:
- Django
- Python

## Database:
- SQL lite3 (postgresql when deployed)

## Server Host:
- Heroku

## Front End Host:
- Netlify

## Billing:
- Stripe

## Notifications:
- Sendgrid
    proper syntax for sending email via python shell:
        from django.core.mail import send_mail
        send_mail(
            'First Email',
            'test!',
            'jesse.reichel@live.com',
            ['cspt1knowledgerocket@gmail.com'],
            fail_silently=False,
        )


## Auth:
- JWT

## Encryption:
- Bcrypt

## Linter:
- ES Lint

## Team Members:
- [Lisa Canini](https://github.com/LisaCee)--Pacific Time Zone
- [Bhavik Ravani](https://github.com/ravb2019)--Eastern Time Zone
- [Jesse Reichel](https://github.com/KryoKorpz)--Pacific Time Zone
- [Alexis Reyes](https://github.com/AlexisReyes90)--Eastern Time Zone
- [Sean Valdivia](https://github.com/NewbieWanKenobi) --Central Time

## License:
Knowledge Rocket is [MIT licensed](https://opensource.org/licenses/MIT).

JSON for Routes
Be logged in for all but http://127.0.0.1:8000/register/ and http://127.0.0.1:8000/login/

All other routes require an active Authorization header:

Authorization token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6InRlc3R1c2VyMzIzIiwiZXhwIjoxNTQ4Mzk0NDgwLCJlbWFpbCI6InRlc3R1c2VyMTIzQHRlc3QuY29tIn0.fkBJi6NXPFTOj54dlMFsso5K67H6Q7XMdYdt_nZW8hg

http://127.0.0.1:8000/register/
{
	"username": "testuser123",
	"email": "testuser123@test.com",
	"password1": "testuser123",
	"password2": "testuser123"
}

http://127.0.0.1:8000/login/
{
	"username": "testuser123",
	"password": "thisisNew"
}


http://127.0.0.1:8000/updateuser/
{
	"newUsername": "thisguy",
	"newEmail": "NOPE!323"
}

http://127.0.0.1:8000/updatepassword/
{
	"newPassword": "thisisNew"
}

http://127.0.0.1:8000/addclass/
{
	"className": "CSPT3"
}

http://127.0.0.1:8000/addrocket/
{

"rocketName": "TestRocket2313",
"className":"CSPT1",

"day2QuestionName": "day2QuestionName",
"day2QuestionText": "day2QuestionText",
"day2ReviewText": "day2ReviewText",
"day2AnswerA": "day2AnswerA",
"day2AnswerB": "day2AnswerB",
"day2AnswerC": "day2AnswerC",
"day2AnswerD": "day2AnswerD",
"day2CorrectAnswer": "day2Answer",

"week2QuestionName": "week2QuestionName",
"week2QuestionText": "week2QuestionText",
"week2ReviewText": "week2ReviewText",
"week2AnswerA": "week2AnswerA",
"week2AnswerB": "week2AnswerB",
"week2AnswerC": "week2AnswerC",
"week2AnswerD": "week2AnswerD",
"week2CorrectAnswer": "week2Answer",

"month2QuestionName": "month2QuestionName",
"month2QuestionText": "month2QuestionText",
"month2ReviewText": "month2ReviewText",
"month2AnswerA": "month2AnswerA",
"month2AnswerB": "month2AnswerB",
"month2AnswerC": "month2AnswerC",
"month2AnswerD": "month2AnswerD",
"month2CorrectAnswer": "month2Answer"

}

http://127.0.0.1:8000/addstudent/
{
	"studentName": "student4",
	"studentEmail": "student@student.com",
	"className": "CSPT1"
}

  