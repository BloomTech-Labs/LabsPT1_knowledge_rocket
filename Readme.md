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

JSON for adding Rocket:
Be logged in

{
  
  "name": "TestRocket",
  "className":"CSPT1",

  "day2QuestionName": "day2QuestionName",
  "day2QuestionText": "day2QuestionText",
  "day2ReviewText": "day2ReviewText",

  "week2QuestionName": "week2QuestionName",
  "week2QuestionText": "week2QuestionText",
  "week2ReviewText": "week2ReviewText",

  "month2QuestionName": "month2QuestionName",
  "month2QuestionText": "month2QuestionText",
  "month2ReviewText": "month2ReviewText"

}