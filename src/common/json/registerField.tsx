const registerFields = [
  {
    name: 'email',
    label: 'Email Address',
    type: 'text',
    isRequired: true,
    isSelectBox: false
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    isRequired: true,
    isSelectBox: false
  },
  {
    name: 'retypePassword',
    label: 'Retype Password',
    type: 'password',
    isRequired: true,
    isSelectBox: false
  },
  {
    name: 'birthMonth',
    label: 'Birth Month',
    isRequired: true,
    isSelectBox: true,
    menuItems: [
      {
        value: 0,
        description: 'Please Select Your Birth Month'
      },
      {
        value: 1,
        description: 'January'
      },
      {
        value: 2,
        description: 'February'
      },
      {
        value: 3,
        description: 'March'
      },
      {
        value: 4,
        description: 'April'
      },
      {
        value: 5,
        description: 'May'
      },
      {
        value: 6,
        description: 'June'
      },
      {
        value: 7,
        description: 'July'
      },
      {
        value: 8,
        description: 'August'
      },
      {
        value: 9,
        description: 'September'
      },
      {
        value: 10,
        description: 'October'
      },
      {
        value: 11,
        description: 'November'
      },
      {
        value: 12,
        description: 'December'
      }
    ]
  },
];

export default registerFields;
