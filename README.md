## Website Structure
```

     / (root)
    |
    |________ /course/{courseID} (Course landing page)
    |
    |
    |________ /checkout/{courseID} (Order finalizing page)
    |
    |
    |________ /video/{video} (Video player page)

```

## 1. Functionality

### 1.1 User side
* The top is always going to be the NavBar
1. User will first come to the home page (/):
    1. The NavBar has a `login` and `logout` option, which uses `auth0` to perform the task. 
        - A profile section needs to be added there and profile component is also needed
    2. User will see a banner which will have links associated to it and the user will be redirected to that link (currently it is the course landing page)
    3. Down there will be a course mosiac, with link to the course landing page.
       - Rather than `Book now` or `Buy Now`, we should add `Go To Course`
    4. An `About Us` section
    5. A section which describes the `services we offer`
        - It will have a link that will redirect to the `Portfolio` page
        - The portfolio page will have a `contact us` section.
    6. A general `contact us` section.
    7. A footer

2. Upon navigating inside a course, `/course/{courseID}`:
    1. User will see a basic overview of the course, and there will be a panel that will show:
        - The price of the course, and other basic options along with a `Buy Now` option, if not purchase.
        - Else, it will show a button to go to the `video player` page, the price of the course will be hidden in that case, and the content of the card can also be changed.
    2. Then there will be a section to show better description of the course and on the sidebar, will be the information about the course instructor
    3. Then there will be a collapsible course content section

3. On navigating to `/checkout/{courseID}`:
    1. There will be a section to enter the coupon codes
    2. Then payment will be done by `RazorPay` API.

4. On navigating to `/video/{courseID}`:
    1. Video player at the left side and below it, a minor description of the course, just to fill the screen.
    2. On the right side, will be the list of modules and the sub sections there which will have the links for the video to be played and a checkbox to show if the lecture is completed or not.

* The bottom is always going to be the footer

### 1.2 Admin side
No functionality has been added yet for the admin side.

## 2 Databse Structure

### What databases do we require

1. For course items, we need NoSQL type DB
<br>
`
It will store our BLOBs (videos, images, articles, etc.)
`
2. For course Data 
<br>
```
{
    courseID: INT,
    courseName: STR,
    courseDetailedDescription: STR,
    courseHeadLine: STR,
    courseInstructor: STR,
    courseRating: FLOAT,
    coursePrice: INT,
    courseContent: 2-D List of STR,
    courseProperties: 1-D List of properties
}
```
3. For user data
<br>
```
{
    userName: STR,
    userEmail: STR,
    userCourse: 1-D List of course IDs
    userProgress: {
        Course ID: moduleNumber.lectureNumber
    }
}
```
4. For `contact us` section
```
{
    userEmail: STR,
    userName: STR,
    userMessage: STR
}
```
5. For `coupon/referral codes`
```
{
    codeOwner: STR,
    code: STR,
    coursesSold: [
        {
            courseId: INT, // ID of the course sold
            counts: INT // Number of courses registered by this coupon code
        }
    ]
}
```