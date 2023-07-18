//--------- users collection----------------
[
  {
    _id: ObjectId("64910c6343562da9f4130c0d"),
    user_id: 1,
    user_name: 'Raja',
    email: 'raja@gmail.com',
    mentor_id: 1,
    mentor_name: 'sanjay'
  },
  {
    _id: ObjectId("64910c6343562da9f4130c0e"),
    user_id: 2,
    user_name: 'Ganesh',
    email: 'ganesh@gmail.com',
    mentor_id: 2,
    mentor_name: 'farook'
  },
  {
    _id: ObjectId("64910c6343562da9f4130c0f"),
    user_id: 3,
    user_name: 'Vinoth',
    email: 'vinoth@gmail.com',
    mentor_id: 3,
    mentor_name: 'sangeetha'
  },
  {
    _id: ObjectId("64910c6343562da9f4130c10"),
    user_id: 4,
    user_name: 'Prem',
    email: 'prem@gmail.com',
    mentor_id: 4,
    mentor_name: 'rahul'
  },
  {
    _id: ObjectId("64910c6343562da9f4130c11"),
    user_id: 5,
    user_name: 'Arun',
    email: 'arun@gmail.com',
    mentor_id: 5,
    mentor_name: 'kumar'
  }
]
// -----------------------------------------------------
// ------------codakata collection----------------
[
    {
      _id: ObjectId("64910cf843562da9f4130c14"),
      'user-id': 1,
      user_name: 'Raja',
      no_of_problems_solved: 15
    },
    {
      _id: ObjectId("64910cf843562da9f4130c15"),
      'user-id': 2,
      user_name: 'Ganesh',
      no_of_problems_solved: 20
    },
    {
      _id: ObjectId("64910cf843562da9f4130c16"),
      'user-id': 3,
      user_name: 'Vinoth',
      no_of_problems_solved: 19
    },
    {
      _id: ObjectId("64910cf843562da9f4130c17"),
      'user-id': 4,
      user_name: 'Prem',
      no_of_problems_solved: 28
    },
    {
      _id: ObjectId("64910cf843562da9f4130c18"),
      'user-id': 5,
      user_name: 'Arun',
      no_of_problems_solved: 21
    }
  ]
//   ---------------------------------------------------
// -------------attendance collection---------------
[
    {
      _id: ObjectId("64910e8043562da9f4130c1e"),
      'user-id': 1,
      user_name: 'Raja',
      month: 'october',
      absent: '19-oct-2020'
    },
    {
      _id: ObjectId("64910e8043562da9f4130c1f"),
      'user-id': 2,
      user_name: 'Ganesh',
      month: 'october',
      absent: '11-oct-2020'
    },
    {
      _id: ObjectId("64910e8043562da9f4130c20"),
      'user-id': 3,
      user_name: 'Vinoth',
      month: 'october',
      absent: '22-oct-2020'
    },
    {
      _id: ObjectId("64910e8043562da9f4130c21"),
      'user-id': 4,
      user_name: 'Prem',
      month: 'october',
      absent: '10-oct-2020'
    },
    {
      _id: ObjectId("64910e8043562da9f4130c22"),
      'user-id': 5,
      user_name: 'Arun',
      month: 'october',
      absent: '09-oct-2020'
    }
  ]
//   ----------------------------------------------
// --------------------topics collection-------------
[
    {
      _id: ObjectId("649109a543562da9f4130c06"),
      topic_id: 1,
      topic: 'react',
      topic_date: '19-oct-2020'
    },
    {
      _id: ObjectId("649109a543562da9f4130c07"),
      topic_id: 2,
      topic: 'bootstrap',
      topic_date: '22-oct-2020'
    },
    {
      _id: ObjectId("649109a543562da9f4130c08"),
      topic_id: 3,
      topic: 'css',
      topic_date: '11-oct-2020'
    },
    {
      _id: ObjectId("649109a543562da9f4130c09"),
      topic_id: 4,
      topic: 'node.js',
      topic_date: '11-oct-2020'
    },
    {
      _id: ObjectId("649109a543562da9f4130c0a"),
      topic_id: 5,
      topic: 'javascript',
      topic_date: '18-oct-2020'
    }
  ]
//   --------------------------------------------------
// ------------task collection------------
[
    {
      _id: ObjectId("64910f6c43562da9f4130c25"),
      task_id: 1,
      'user-id': 1,
      user_name: 'Raja',
      task: 'crud operation',
      'task-submited_date': '22-oct-2020'
    },
    {
      _id: ObjectId("64910f6c43562da9f4130c26"),
      task_id: 2,
      'user-id': 2,
      user_name: 'Ganesh',
      task: 'HTML task',
      task_submited_date: '10-oct-2020'
    },
    {
      _id: ObjectId("64910f6c43562da9f4130c27"),
      task_id: 3,
      'user-id': 3,
      user_name: 'Vinoth',
      task: 'HTML task',
      task_submited_date: '14-oct-2020'
    },
    {
      _id: ObjectId("64910f6c43562da9f4130c28"),
      task_id: 4,
      'user-id': 4,
      user_name: 'Prem',
      task: 'HTML task',
      task_submited_date: '09-oct-2020'
    },
    {
      _id: ObjectId("64910f6c43562da9f4130c29"),
      task_id: 5,
      'user-id': 5,
      user_name: 'Arun',
      task: 'HTML task',
      task_submited_date: '25-oct-2020'
    }
  ]
//   -----------------------------------------------------
// ------------company_drives collection------------------
[
    {
      _id: ObjectId("6491105343562da9f4130c2c"),
      'user-id': 1,
      user_name: 'Raja',
      drive_date: '19-oct-2020',
      company_name: 'flipkart'
    },
    {
      _id: ObjectId("6491105343562da9f4130c2d"),
      'user-id': 2,
      user_name: 'Ganesh',
      drive_date: '21-oct-2020',
      company_name: 'amazon'
    },
    {
      _id: ObjectId("6491105343562da9f4130c2e"),
      'user-id': 3,
      user_name: 'Vinoth',
      drive_date: '10-oct-2020',
      company_name: 'twitter'
    },
    {
      _id: ObjectId("6491105343562da9f4130c2f"),
      'user-id': 4,
      user_name: 'prem',
      drive_date: '11-oct-2020',
      company_name: 'myntra'
    },
    {
      _id: ObjectId("6491105343562da9f4130c30"),
      'user-id': 5,
      user_name: 'Arun',
      drive_date: '07-oct-2020',
      company_name: 'zoho'
    }
  ]
//   ---------------------------------------------------
// -------------mentors collection----------
[
    {
      _id: ObjectId("6491115043562da9f4130c36"),
      'mentor-id': 1,
      mentor_name: 'sanjay',
      mentees_count: 16
    },
    {
      _id: ObjectId("6491115043562da9f4130c37"),
      'mentor-id': 2,
      mentor_name: 'farook',
      mentees_count: 18
    },
    {
      _id: ObjectId("6491115043562da9f4130c38"),
      'mentor-id': 3,
      mentor_name: 'sangeetha',
      mentees_count: 10
    },
    {
      _id: ObjectId("6491115043562da9f4130c39"),
      'mentor-id': 4,
      mentor_name: 'rahul',
      mentees_count: 13
    },
    {
      _id: ObjectId("6491115043562da9f4130c3a"),
      'mentor-id': 5,
      mentor_name: 'kumar',
      mentees_count: 12
    }
  ]
