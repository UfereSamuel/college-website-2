const teacherData = [
  {
    body: {
      name: 'Aman',
      email: 'abctest@gmail.com',
      password: '87348758447385',
      dateOfBirth: 87898437787,
      gender: 'male',
      currentPosition: 'Head',
      photo: 'http://myawesomepic.com',
    },
  },
  {
    body: {
      name: 'Aman',
      email: 'abctest@gmail.com',
      password: '87348758447385',
      dateOfBirth: 87898437787,
      status: 'head ',
      gender: 'male',
      currentPosition: 'Head',
    },
  },
  {
    body: {
      name: 'Aman',
      email: 'abctest@gmail.com',
      password: '87348758447385',
      dateOfBirth: 87898437787,
      gender: 'male',
      currentPosition: 'Head',
      photo: 'http://myawesomepic.com',
      bio:
        'I am awesome.I am awesome.I am awesome.I am awesome.I am awesome.I am awesome.',
      linkedProfiles: {
        google: {
          id: '34948',
          url: 'ab.com',
        },
      },
      tokens: {
        auth: 'access',
        token: 'blafsjdkjfkdsjkfjksjfkhsdkjfhkdsjk',
      },
    },
  },
  {
    body: {
      password: '87348758447385',
      dateOfBirth: 87898437787,
      gender: 'male',
      currentPosition: 'Head',
      photo: 'http://myawesomepic.com',
    },
  },
];

const teacherWork = [
  {
    body: {
      title: 'title',
      description: 'description',
    },
  },
  {
    body: {
      title: 'title',
      description: 'description',
      none: 'none',
    },
  },
  {
    body: {
      title: 'title',
    },
  },
];

const teacherEducation = [
  {
    body: { education: ['B. Tech.', 'M. Tech', 'MBA'] },
  },
  {
    body: {
      education: ['B. Tech.', 'M. Tech', 'MBA'],
      description: 'description',
      none: 'none',
    },
  },
  {
    body: {
      title: 'title',
    },
  },
];

const technicalSkills = [
  {
    body: { technicalSkills: ['Coding', 'Teaching', 'Making softwares'] },
  },
  {
    body: {
      technicalSkills: ['Coding', 'Teaching', 'Making softwares'],
      description: 'description',
      none: 'none',
    },
  },
  {
    body: {
      title: 'title',
    },
  },
];

const TeacherNotifications = [
  {
    body: {
      title: 'shubham jangid birthday',
      description: 'lorem ipsum fjsdfj hsdhsfh',
      link: 'shubham jagndi.com',
      branch: 'it',
      rollNo: 2344255354,
      year: '2017',
    },
  },
  {
    title: 'shubham jangid birthday',
    description: 'lorem ipsum fjsdfj hsdhsfh',
    link: 'shubham jagndi.com',
    file: null,
    tags: {
      branch: 'it',
      rollNo: 2344255354,
      year: '2017',
    },
  },
  {
    body: {
      title: 'shubham jangid birthday',
      description: 'lorem ipsum fjsdfj hsdhsfh',
      link: 'shubham jagndi.com',
      branch: 'it',
      rollNo: 2344255354,
      year: '2017',
      email: 'shubham70@gmail.com',
    },
  },
];

module.exports = {
  teacherData,
  teacherWork,
  teacherEducation,
  technicalSkills,
  TeacherNotifications,
};
