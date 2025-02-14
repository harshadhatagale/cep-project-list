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
      ppt:"https://1drv.ms/p/c/04b0e8d23b24b7f4/EWeyKn7zn1NPs8xl6kYUelQBk_7cEib7PyY5e5bLPjdSYw",
    },
    {
      id: 2,
      group: "2",
      name: "Provide Employabilliy: Recruiters's Resume/CV building using profile data",
      prn: [2341006, 2341007, 2341008,2341009],
      students: ["BHOSLE NEHA VIKAS", "BORKAR SAHIL DILIP", "BOROLE PREM SUDAM", "CHAUDHARI ABHAY SANJAY"],
      link: "https://github.com/PremBorole/GCOEJ-SY-CO-2024-25_G2.git",
      ppt:"https://docs.google.com/presentation/d/1tR0-gg6luYlSMBo37PnmxkX75Cy3MoGd/edit?usp=drivesdk&ouid=103793536953311800072&rtpof=true&sd=true",
    },
    {
      id: 3,
      group: "3",
      name: "Provide Employabilliy Dashboard Design",
      prn: [2341010, 2341012, 2341013,2341014],
      students: ["CHAUDHARI SAKSHI SUNIL", "CHAVHAN POOJA SUBHASH", "DAVILE ACHAL MOHANRAO", "DESHMUKH SHRAVANI PRAMOD"],
      link: "https://projectsbyshravani.github.io/cep_project/",
      ppt:"https://1drv.ms/p/c/04b0e8d23b24b7f4/EXQ67zDc925Pt8NlraGXtxQBAC1iLVcu_0boUdIPoQIXiQ",
    },
    {
      id: 4,
      group: "4",
      name: "Sustainaibillity development goal",
      prn: [2341015, 2341016],
      students: ["GAJBHIYE PRANALI SHAILENDRA", "GOTHWAD VEDANT ULHAS"],
      link: "https://pra202356.github.io/sustainable/index.html",
      ppt:"#",
    },
    {
      id: 5,
      group: "5",
      name: "NGO Site",
      prn: [2341017, 2341018, 2341019,2341020],
      students: ["HADE SHAILESH JAGANNATH", "HATAGALE HARSHAD BHARAT", "JADHAV DURVESH SANTOSH", "JAGTAP VEDANT DEEPAK"],
      link: "https://donatify.vercel.app/",
      ppt:"https://docs.google.com/presentation/d/1doWPlitnSKPAyY55OijSnq9aFOt4Jxmk/edit?usp=drivesdk&ouid=107427865176270548763&rtpof=true&sd=true",
    },
    {
      id: 6,
      group: "6",
      name: "Mess menu identify",
      prn: [2341021, 2341022, 2341024,2341025],
      students: ["JALANDRA UMESH LAXMAN", "KALE SIDDHANT ANIL", "KARKE SURAJ VASANT", "KHILLARE DIPAK LAXMAN"],
      link: "https://messjunction.netlify.app/", 
      ppt:"https://docs.google.com/presentation/d/1hfWoUN-qb7mWhJzIeBZRy3VrM8I7HC4m/edit?usp=drivesdk&ouid=103960259801518594376&rtpof=true&sd=true",
    },
    {
      id: 7,
      group: "7",
      name: "Blood bank website",
      prn: [2341027, 2341028, 2341029,2341030],
      students: ["MASHRAM ALOK", "MOKASHE JAYESH", "NAJARDHANE VISHNU", "NEHETE RIYA"],
      link: "https://jayesh00406.github.io/BloodBank/ ",
      ppt:"https://drive.google.com/file/d/1q3ednmYx52OykHOeENn74zmXZr8p_E1W/view?usp=drivesdk",
    },
    {
      id: 8,
      group: "8",
      name: "Solution for pollution",
      prn: [2341031, 2341032],
      students: ["NEMADE HOMESHWARI", "NEMADE ROHIT"],
      link: "#",
      ppt:"#",
    },
    {
      id: 9,
      group: "9",
      name: "Farmer's issues & Agricuture equipements",
      prn: [2341033, 2341034, 2341035, 2341036],
      students: [ "OJAS WAYKOLE","PARDHI DURGESHWARI","AAYUSH PATIL","AKSHAY PATIL"],
      link: "https://aayush901.github.io/Agriculture/",   
      ppt:"https://1drv.ms/p/s!AmfEZKIwJ3VQhAfBRNus0C3X4lpB?e=fNAPb1",
    },
    {
      id: 10,
      group: "10",
      name: "NGO Site for wildlife",
      prn: [2341037, 2341038, 2341040,2341041],
      students: ["PATIL LALIT", "PATIL MEGHA", "PATIL PRADNYA", "PATIL SAKSHI"],
      link: "https://peace-for-anyone.netlify.app/",
      ppt:"https://docs.google.com/presentation/d/1AVGndrdefvNqtwrbVmL2mGLD4ELO_EqC/edit?usp=drivesdk&ouid=106443707923363469191&rtpof=true&sd=true",
    },
    {
      id: 11,
      group: "11",
      name: "Service providers & Seekers",
      prn: [2341042, 2341043, 2341044,2341045],
      students: ["PATIL SAKSHI", "PATIL TEJAS", "PATIL YASH", "PATLE AMIT"],
      link: "https://amit125-maruti.github.io/Amit125/",
      ppt:"https://drive.google.com/file/d/1ieJxdz5yLF73PNJ5Q5YpITcfULSoq4Ej/view?usp=drivesdk",
    },
    {
      id: 12,
      group: "12",
      name: "Student's site for PG",
      prn: [2341046, 2341047, 2341048, 2341059],
      students: [ "PAWADE ASMIT", "PAWAR RAKESH","PRAJAPATI ADITYA", "SWAMI PRATHMESH"],
      link: "https://soyo-mwft.vercel.app/",
      ppt:"https://docs.google.com/presentation/d/1_obDFXXJ45-8WL3Udiw0GAj5P7AdVkxm/edit?usp=drivesdk&ouid=107357105824273253423&rtpof=true&sd=true",
    },
    {
      id: 13,
      group: "13",
      name: "Women's empowerment and their safety",
      prn: [2341049, 2341050, 2341052, 2341053],
      students: ["RAJPUT NANADINI", "RAKHONDE MONIKA", "RAUT SHRADDHA", "SAPKE KARAN"],
      link: "https://jayesh00406.github.io/index/",
      ppt:"https://in.docworkspace.com/d/sIMeZjMunAfnLlLwG ",
    },
    {
      id: 14,
      group: "14",
      name: "Website for laws & rights",
      prn: [2341054, 2341056, 2341057,2341058],
      students: ["SATONE RADHIKA", "SINGH ANIKET", "SOLUNKE VAIDHAVI", "SONAR PARAG"],
      link: "https://human-rights-laws.netlify.app/", 
      ppt:"https://docs.google.com/presentation/d/1e3LDYvMk2vbYBpr8RYRMAMGPBgPHSA6-/edit?usp=drivesdk&ouid=107427865176270548763&rtpof=true&sd=true",
    },
    {
      id: 15,
      group: "15",
      name: "Support for specially able person",
      prn: [2341060, 2341061,2341062],
      students: ["Shivashankar Totare","Aachal Varade","Arohi Vardikar"],
      link: "https://arohivardikar.github.io/Website-for-Specially-Abled-Persons/",
      ppt:"https://kso.page.link/wps ",
    },
    {
      id: 16,
      group: "16",
      name: "DISASTER MANAGEMENT",
      prn: [2341063, 2341064, 2341065,2341066],
      students: ["INDRESH SANJAY YADAV", "KAMLESH SUYOG YAWALKAR", "SUCHITA SHASHIKANT YEOLE", "SAI PRASANT ZADE"],
      link: "https://disaster-aid-network.netlify.app/",
      ppt:"https://docs.google.com/presentation/d/1dfTXWGJAaq7VkVSr3mF5-adrpjJ-wM-g/edit?usp=drivesdk&ouid=107427865176270548763&rtpof=true&sd=true",
    },
    {
      id: 17,
      group: "17",
      name: "Hospital Locator",
      prn: [2341007, 2442209, 2442204],
      students: ["MAHAJAN NEHA", "TAYADE SAVITA", "FIRKE HIMANSHU"],
      link: "https://github.com/Himanshu-oss-cmyk/hospital-locator.git",    
      ppt:"https://docs.google.com/presentation/d/17ZSlkl7Hg18I4okOoWOUqAdEM4pw18jl/edit?usp=drivesdk&ouid=108765930448252938862&rtpof=true&sd=true",
    },
    {
      id: 18,
      group: "18",
      name: " Groceries For Disabled Or Old Age People",
      prn: ["2442202", "2442206", "2442210","2442208"],
      students: ["PATIL BHAVNA", "PATIL KANDARP", "YADAV SHIVRAJ", "DNYANESHVARI PAYMODE"],
      link: "https://github.com/dnyaneshwari44/grocery_ordering",
      ppt:"https://1drv.ms/p/c/4c80d01f7162777b/EdFDXr2ejadEpxdWBdBjKHUB47KQB-k-yOhgoMWy_QNTSA ",
    },
    {
      id: 19,
      group: "19",
      name: "Transport facillities for old age & disabled peoples",
      prn: ["2442201", "2442203", "2442205"],
      students: ["BHAGYASHREE", "SHIVPRASAD", "SANYOGITA"],
      link: "https://github.com/Shivprasadpravindongapure/trasnsport.git",
      ppt:"https://1drv.ms/p/c/cf290799d0e4c51a/EY_zuwO6GMdNo531w-1DwkIBxDDEACehlhtqzDM7y3bagA",
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
        <h2 className="text-2xl text-black mt-2 font-bold">Community Engineering Project - CO205N</h2>
        <p className="text-lg text-gray-600 mt-2">
          Showcasing innovative projects by our talented students.
        </p>
        <p className='font-bold text-lg my-2 self-end'>
          Guided by: Prof. T. K. Gawali Sir
        </p>
      </header>
      <ProjectTable projects={projects} />
      <footer className="text-center mt-8 mb-8 text-sm">
        © {new Date().getFullYear()} Government College of Engineering, Jalgaon. All Rights Reserved.
        <br /><b>Designed & Developed by Harshad Hatagale</b>
      </footer>
    </div>
  );
}
