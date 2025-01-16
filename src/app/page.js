import ProjectTable from './components/ProjectTable';

// sustainibility developement goal
// NGO site:
// 6
// 2341021
// 
// 2341022
// 
// 2341024
// 
// Mess menu identify
// 2341025
// 
// 2341027
// MESHRAM ALOK PRASHANT
// 2341028
// MOKASE JAYESH DILIP
// 7
// Blood Bank Websiite
// 2341029
// NAJARDHANE VISHNU MOHAN
// 2341030
// NEHETE RIYA AVINASH
// 2341031
// NEMADE HOMESHWARI TUKARAM
// 8
// Solution for Pollution
// 2341032
// NEMADE ROHIT KAILAS
// 2341033
// WAYKOLE OJAS DIGAMBAR
// 2341034
// PARADHI DURGESHWARI YUVRAJ
// Farmer's issues and agriculture equipments
// 9
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
      link: "https://github.com/group3/alumni-platform",
    },
    {
      id: 5,
      group: "5",
      name: "NGO Site",
      prn: [2341017, 2341018, 2341019,2341020],
      students: ["HADE SHAILESH JAGANNATH", "HATAGALE HARSHAD BHARAT", "JADHAV DURVESH SANTOSH", "JAGTAP VEDANT DEEPAK"],
      link: "https://github.com/group3/alumni-platform",
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
      prn: [2341010, 2341012, 2341013,2341014],
      students: ["Mark Lee", "Chris Green", "Anna Bell", "Sophia Turner"],
      link: "https://github.com/group3/alumni-platform",
    },
    {
      id: 8,
      group: "8",
      name: "Alumni Platform",
      prn: [2341010, 2341012, 2341013,2341014],
      students: ["Mark Lee", "Chris Green", "Anna Bell", "Sophia Turner"],
      link: "https://github.com/group3/alumni-platform",
    },
    {
      id: 9,
      group: "9",
      name: "Alumni Platform",
      prn: [2341010, 2341012, 2341013,2341014],
      students: ["Mark Lee", "Chris Green", "Anna Bell", "Sophia Turner"],
      link: "https://github.com/group3/alumni-platform",
    },
    {
      id: 10,
      group: "10",
      name: "Alumni Platform",
      prn: [2341010, 2341012, 2341013,2341014],
      students: ["Mark Lee", "Chris Green", "Anna Bell", "Sophia Turner"],
      link: "https://github.com/group3/alumni-platform",
    },
    {
      id: 11,
      group: "11",
      name: "Alumni Platform",
      prn: [2341010, 2341012, 2341013,2341014],
      students: ["Mark Lee", "Chris Green", "Anna Bell", "Sophia Turner"],
      link: "https://github.com/group3/alumni-platform",
    },
    {
      id: 12,
      group: "12",
      name: "Alumni Platform",
      prn: [2341010, 2341012, 2341013,2341014],
      students: ["Mark Lee", "Chris Green", "Anna Bell", "Sophia Turner"],
      link: "https://github.com/group3/alumni-platform",
    },
    {
      id: 13,
      group: "13",
      name: "Alumni Platform",
      prn: [2341010, 2341012, 2341013,2341014],
      students: ["Mark Lee", "Chris Green", "Anna Bell", "Sophia Turner"],
      link: "https://github.com/group3/alumni-platform",
    },
    {
      id: 14,
      group: "14",
      name: "Alumni Platform",
      prn: [2341010, 2341012, 2341013,2341014],
      students: ["Mark Lee", "Chris Green", "Anna Bell", "Sophia Turner"],
      link: "https://github.com/group3/alumni-platform",
    },
    {
      id: 15,
      group: "15",
      name: "Alumni Platform",
      prn: [2341010, 2341012, 2341013,2341014],
      students: ["Mark Lee", "Chris Green", "Anna Bell", "Sophia Turner"],
      link: "https://github.com/group3/alumni-platform",
    },
    {
      id: 16,
      group: "16",
      name: "DISASTER MANAGEMENT",
      prn: [2341010, 2341012, 2341013,2341014],
      students: ["Mark Lee", "Chris Green", "Anna Bell", "Sophia Turner"],
      link: "https://github.com/group3/alumni-platform",
    },
    {
      id: 17,
      group: "17",
      name: "",
      prn: [2341010, 2341012, 2341013,2341014],
      students: ["MAHAJAN NEHA", "TAYADE SAVITA", "FIRKE HIMANSHU"],
      link: "https://github.com/group3/alumni-platform",
    },
    {
      id: 18,
      group: "18",
      name: " Groceries For Disabled Or Old Age People",
      prn: ["DSY", "DSY", "DSY","DSY"],
      students: ["PATIL BHAVNA", "PATIL KANDARP", "YADAV SHIVRAJ", "DNYANESHVARI PAYMODE"],
      link: "https://github.com/dnyaneshwari44/grocery_ordering",
    },
    {
      id: 19,
      group: "19",
      name: "Alumni Platform",
      prn: ["DSY", "DSY", "DSY"],
      students: ["BHAGYASHREE", "SHIVPRASAD", "SANYOGITA"],
      link: "https://github.com/Shivprasadpravindongapure/trasnsport",
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
