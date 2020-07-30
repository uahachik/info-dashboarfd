const airports = () => {
  return [
    {
      code: 'KATL',
      name: 'Hartsfield–Jackson Atlanta',
      subname: 'International Airport',
      logo: {
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Hartsfield%E2%80%93Jackson_Atlanta_International_Airport_logo.svg/500px-Hartsfield%E2%80%93Jackson_Atlanta_International_Airport_logo.svg.png',
        width: '80%',
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Atlanta_Hartsfield-Jackson.jpg/375px-Atlanta_Hartsfield-Jackson.jpg',
    },
    {
      code: 'KORD',
      name: 'O\'Hare International Airport',
      subname: '',
      logo: {
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/O%27Hare_International_Airport_Logo.svg/220px-O%27Hare_International_Airport_Logo.svg.png',
        width: '41%',
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/O%27Hare_from_ISS_12-06-2019.jpg/250px-O%27Hare_from_ISS_12-06-2019.jpg',
    },
    {
      code: 'KLAX',
      name: 'Los Angeles International Airport',
      subname: '',
      logo: {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Los_Angeles_Airport_logo.svg/300px-Los_Angeles_Airport_logo.svg.png',
        width: '80%',
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Los_Angeles_International_Airport_Aerial_Photo.jpg/450px-Los_Angeles_International_Airport_Aerial_Photo.jpg',
    },
    {
      code: 'KDFW',
      name: 'Dallas/Fort Worth',
      subname: 'International Airport',
      logo: {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/DFW_airport_logo.svg/250px-DFW_airport_logo.svg.png',
        width: '46%',
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/DFWAirportOverview.jpg/250px-DFWAirportOverview.jpg',
    },
    {
      code: 'ZBAA',
      name: 'Beijing Capital International Airport',
      subname: '北京首都国际机场',
      logo: {
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/BeijingCAH.svg/225px-BeijingCAH.svg.png',
        width: '77%',
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/PEK-ZBAA%E9%B8%9F%E7%9E%B0%E5%9B%BE.png/250px-PEK-ZBAA%E9%B8%9F%E7%9E%B0%E5%9B%BE.png',
    },
    {
      code: 'KDEN',
      name: 'Denver International Airport',
      subname: '',
      logo: {
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Denver_International_Airport_Logo.png/200px-Denver_International_Airport_Logo.png',
        width: '30%',
      },
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyj33aO2sUi45GAOsQtLe5yeosO9ygk7u2uQ&usqp=CAU',
    },
    {
      code: 'EGLL',
      name: 'Heathrow Airport',
      subname: '',
      logo: {
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Heathrow_Logo_2013.svg/500px-Heathrow_Logo_2013.svg.png',
        width: '60%',
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/London_-_Heathrow_%28LHR_-_EGLL%29_AN1572653.jpg/375px-London_-_Heathrow_%28LHR_-_EGLL%29_AN1572653.jpg',
    },
    {
      code: 'KLAS',
      name: 'McCarran International Airport',
      subname: '',
      logo: {
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/McCarran_International_Airport.png/250px-McCarran_International_Airport.png',
        width: '35%',
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Las_Vegas_McCarran.jpg/375px-Las_Vegas_McCarran.jpg',
    },
    {
      code: 'FAAM',
      name: 'Amsterdam Airport Schiphol',
      subname: '',
      logo: {
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Schiphol_logo.svg/250px-Schiphol_logo.svg.png',
        width: '44%',
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ams-above-2007.jpg/250px-Ams-above-2007.jpg',
    },
    {
      code: 'ZSPD',
      name: 'Shanghai Pudong',
      subname: '上海浦东国际机场',
      logo: {
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/ShanghaiAirports.png/150px-ShanghaiAirports.png',
        width: '13%',
      },
      photo: 'data:image/jpeg;base64,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',
    },
    {
      code: 'LFPG',
      name: 'Aéroport de Paris-Charles-de-Gaulle',
      subname: '',
      logo: {
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Paris_A%C3%A9roport_logo.svg/250px-Paris_A%C3%A9roport_logo.svg.png',
        width: '34%',
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Charles_De_Gaulle_Airport.jpg/390px-Charles_De_Gaulle_Airport.jpg',
    },
    {
      code: 'EDDF',
      name: 'Frankfurt Airport',
      subname: '',
      logo: {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Frankfurt_Airport_Logo.svg/175px-Frankfurt_Airport_Logo.svg.png',
        width: '57%',
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/FRA_June2013.JPG/500px-FRA_June2013.JPG',
    }
  ];
}

export default airports;