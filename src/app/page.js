import ProjectTable from './components/ProjectTable';
export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      group: "1",
      name: "Provide Employabilliy: Recruiters's Resume/CV building using profile data",
      prn: [2341001,2341002, 2341004, 2341005],
      students: ["AREKAR RANI RAMESH", "AUTADE SHIVTEJ RAJENDRA", "BAUSKAR DIVYA MANOHAR", "BHAGWAT PURVA VIJENDRA"],
      link: "https://cyberhkbit.github.io/JobPortal/",
    },
    {
      id: 2,
      group: "2",
      name: "Provide Employabilliy: Recruiters's Resume/CV building using profile data",
      prn: [2341006, 2341007, 2341008,2341009],
      students: ["BHOSLE NEHA VIKAS", "BORKAR SAHIL DILIP", "BOROLE PREM SUDAM", "CHAUDHARI ABHAY SANJAY"],
      link: "https://github.com/group2/todo-list",
    },
    {
      id: 3,
      group: "3",
      name: "Provide Employabilliy Dashboard Design",
      prn: [2341010, 2341012, 2341013,2341014],
      students: ["CHAUDHARI SAKSHI SUNIL", "CHAVHAN POOJA SUBHASH", "DAVILE ACHAL MOHANRAO", "DESHMUKH SHRAVANI PRAMOD"],
      link: "https://projectsbyshravani.github.io/cep_project/",
    },
    {
      id: 4,
      group: "4",
      name: "Sustainaibillity development goal",
      prn: [2341015, 2341016],
      students: ["GAJBHIYE PRANALI SHAILENDRA", "GOTHWAD VEDANT ULHAS"],
      link: "https://pra202356.github.io/sustainable/index.html",
    },
    {
      id: 5,
      group: "5",
      name: "NGO Site",
      prn: [2341017, 2341018, 2341019,2341020],
      students: ["HADE SHAILESH JAGANNATH", "HATAGALE HARSHAD BHARAT", "JADHAV DURVESH SANTOSH", "JAGTAP VEDANT DEEPAK"],
      link: "https://donatify.vercel.app/",
    },
    {
      id: 6,
      group: "6",
      name: "Mess menu identify",
      prn: [2341021, 2341022, 2341024,2341025],
      students: ["JALANDRA UMESH LAXMAN", "KALE SIDDHANT ANIL", "KARKE SURAJ VASANT", "KHILLARE DIPAK LAXMAN"],
      link: "https://messjunction.netlify.app/",
    },
    {
      id: 7,
      group: "7",
      name: "Blood bank website",
      prn: [2341027, 2341028, 2341029,2341030],
      students: ["MASHRAM ALOK", "MOKASHE JAYESH", "NAJARDHANE VISHNU", "NEHETE RIYA"],
      link: "https://jayesh00406.github.io/BloodBank/ ",
    },
    {
      id: 8,
      group: "8",
      name: "Solution for pollution",
      prn: [2341031, 2341032],
      students: ["NEMADE HOMESHWARI", "NEMADE ROHIT"],
      link: "#",
    },
    {
      id: 9,
      group: "9",
      name: "Farmer's issues & Agricuture equipements",
      prn: [2341033, 2341034, 2341035, 2341036],
      students: [ "OJAS WAYKOLE","PARDHI DURGESHWARI","AAYUSH PATIL","AKSHAY PATIL"],
      link: "https://aayush901.github.io/Agriculture/",
    },
    {
      id: 10,
      group: "10",
      name: "NGO Site for wildlife",
      prn: [2341037, 2341038, 2341040,2341041],
      students: ["PATIL LALIT", "PATIL MEGHA", "PATIL PRADNYA", "PATIL SAKSHI"],
      link: "https://peace-for-anyone.netlify.app/",
    },
    {
      id: 11,
      group: "11",
      name: "Service providers & Seekers",
      prn: [2341042, 2341043, 2341044,2341045],
      students: ["PATIL SAKSHI", "PATIL TEJAS", "PATIL YASH", "PATLE AMIT"],
      link: "#",
    },
    {
      id: 12,
      group: "12",
      name: "Student's site for PG",
      prn: [2341046, 2341047, 2341048],
      students: [ "PAWADE ASMIT", "PAWAR RAKESH","PRAJAPATI ADITYA"],
      link: "https://soyo-mwft.vercel.app/",
    },
    {
      id: 13,
      group: "13",
      name: "Alumni Platform",
      prn: [2341049, 2341050, 234152, 2341053],
      students: ["RAJPUT NANADINI", "RAKHONDE MONIKA", "RAUT SHRADDHA", "SAPKE KARAN"],
      link: "https://jayesh00406.github.io/index/",
    },
    {
      id: 14,
      group: "14",
      name: "Website for laws & rights",
      prn: [23410154, 2341056, 2341057,2341058],
      students: ["SATONE RADHIKA", "SINGH ANIKET", "SOLUNKE VAIDHAVI", "SONAR PARAG"],
      link: "#",
    },
    {
      id: 15,
      group: "15",
      name: "Support for specially able person",
      prn: [2341060, 2341061,2341062],
      students: ["Shivashankar Totare","Aachal Varade","Arohi Vardikar"],
      link: "https://arohivardikar.github.io/Website-for-Specially-Abled-Persons/",
    },
    {
      id: 16,
      group: "16",
      name: "DISASTER MANAGEMENT",
      prn: [2341063, 2341064, 2341065,2341067],
      students: ["INDRESH SANJAY YADAV", "KAMLESH SUYOG YAWALKAR", "SUCHITA SHASHIKANT YEOLE", "SAI PRASANT ZADE"],
      link: "https://disaster-aid-network.netlify.app/",
    },
    {
      id: 17,
      group: "17",
      name: "Hospital Locator",
      prn: [2341007, 2442209, 2442204],
      students: ["MAHAJAN NEHA", "TAYADE SAVITA", "FIRKE HIMANSHU"],
      link: "#",
    },
    {
      id: 18,
      group: "18",
      name: " Groceries For Disabled Or Old Age People",
      prn: ["2442202", "2442206", "2442210","2442208"],
      students: ["PATIL BHAVNA", "PATIL KANDARP", "YADAV SHIVRAJ", "DNYANESHVARI PAYMODE"],
      link: "https://github.com/dnyaneshwari44/grocery_ordering",
    },
    {
      id: 19,
      group: "19",
      name: "Transport facillities for old age & disabled peoples",
      prn: ["2442201", "2442203", "2442205"],
      students: ["BHAGYASHREE", "SHIVPRASAD", "SANYOGITA"],
      link: "#",
    },
  ];

  return (
    <div className="px-8">
      <header className="text-center mb-6">
        <div className="flex items-center justify-center space-x-4">
          <img
            src="/gcoej-logo.png" // Replace with your college logo URL
            alt="College Logo"
            className="w-16 h-16"
          />
          <h1 className="text-4xl font-extrabold text-blue-600">
            Government College of Engineering, Jalgaon
          </h1>
          <h2>Community Engineering Project - CE250N</h2>
        </div>
        <p className="text-lg text-black mt-2">
          Showcasing innovative projects by our talented students.
        </p>
      </header>
      <ProjectTable projects={projects} />
      <footer className="text-center mt-8 mb-8 text-sm">
        © {new Date().getFullYear()} Government College of Engineering, Jalgaon. All Rights Reserved.
      </footer>
    </div>
  );
}
