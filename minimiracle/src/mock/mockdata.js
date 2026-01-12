// src/mockdata/mockdata.js
import kidsActivity from "../../public/images/kidsActivity.jpg"
import elementary from "../../public/images/elementary.jpg"
import middle from "../../public/images/middle.jpg"
import martial from "../../public/images/martial.jpg"
import outdoor from "../../public/images/outdoor.jpg"
import sport from "../../public/images/sports.jpg"
import table from "../../public/images/table.jpg"
import traditional from "../../public/images/traditional.jpg"
import heroImage from "../../public/images/sports.jpg"
import { Facebook, Youtube } from "lucide-react";

export const pageContent = {
  hero: {
    title: "Admission",
    badgePrefix: "OPEN FOR",
    badgeYear: "2025-2026",
    ctaPrimary: "Enroll Now",
  },

  // Three text blocks for the announcement section
  announcement: [
    "Appropriately engage diverse resources for next-generation systems.",
    "Professionally foster extensive paradigms via multidisciplinary systems.",
    "Synergistically deploy maintainable products and frictionless methodologies.",
  ],

  features: [
    {
      title: "Target Stillness",
      desc: "Help kids improve focus, calmness, and attention through guided activities.",
      icon: "🎯",
    },
    {
      title: "Extra Activities",
      desc: "Fun clubs and events that boost creativity and confidence.",
      icon: "✨",
    },
    {
      title: "Complete Tracking",
      desc: "Progress tracking and updates to support every child’s learning journey.",
      icon: "📍",
    },
    {
      title: "Individual Bus",
      desc: "Safe and convenient transport support for children when needed.",
      icon: "🚌",
    },
  ],

  courses: [
    {
      title: "Kids Activity Clubs",
      desc: "Creative play, music, art, and group activities for growth.",
      img: kidsActivity,
      imgAlt: "Kids participating in creative activity clubs",
      
    },
    {
      title: "Elementary School",
      desc: "Strong foundation learning with caring guidance and fun lessons.",
      img: elementary,
      imgAlt:"elementary school"
    },
    {
      title: "Middle (10-10) Years",
      desc: "Skill building, teamwork, and confidence development.",
      img: middle,
      imgAlt:"Kid staring to learn"
    },
    {
      title: "Martial",
      desc: "Discipline, fitness, and balance through beginner-friendly training.",
      img: martial,
      imgAlt: "learn Dicipline activity"
    },
  ],

  activities: {
    header: "We Provide the Main Kids Activities",
    descriptions: [
      "Engaging activities that support learning and development.",
      "Safe and enjoyable environment for children to explore.",
      "Balanced programs for creativity, movement, and teamwork.",
      "Friendly teachers and well-structured activity plans.",
      "Fun-based learning to build confidence and good habits.",
    ],
    cards: [
      { title: "Outdoor Games", img: outdoor,imgAlt: "Kids playing outdoor games in a safe playground", },
      { title: "Sport Activities", img: sport, imgAlt: "Phychical Activity" },
      { title: "Table/Floor Toys", img: table, imgAlt:"floor Activity" },
      { title: "Traditional Activities", img: traditional, imgAlt: "cultural events" },
    ],
    viewAll: "View All",
  },

  cta: {
    text: "Make your children's life special by enrolling them in our academy",
    button: "Enroll Now",
  },
};

// src/mockdata/galleryMockdata.js

export const galleryContent = {
  categories: ["Baby/Bay", "Activities", "Painting", "Baby sitting"],

  photos: {
    "Baby/Bay": [
      { id: 1, alt: "Baby smiling in classroom", aspect: "portrait", imageId: "baby-1" },
      { id: 2, alt: "Kids playing with toys", aspect: "landscape", imageId: "baby-2" },
      { id: 3, alt: "Child learning with blocks", aspect: "square", imageId: "baby-3" },
      { id: 4, alt: "Kids reading picture book", aspect: "landscape", imageId: "baby-4" },
      { id: 5, alt: "Happy child in activity corner", aspect: "portrait", imageId: "baby-5" },
    ],
    Activities: [
      { id: 6, alt: "Outdoor play session", aspect: "landscape", imageId: "act-1" },
      { id: 7, alt: "Group activity in classroom", aspect: "portrait", imageId: "act-2" },
      { id: 8, alt: "Kids running game", aspect: "square", imageId: "act-3" },
      { id: 9, alt: "Team building activity", aspect: "landscape", imageId: "act-4" },
    ],
    Painting: [
      { id: 10, alt: "Child painting with brush", aspect: "portrait", imageId: "paint-1" },
      { id: 11, alt: "Art class painting session", aspect: "landscape", imageId: "paint-2" },
      { id: 12, alt: "Kids showing artwork", aspect: "square", imageId: "paint-3" },
      { id: 13, alt: "Color mixing activity", aspect: "landscape", imageId: "paint-4" },
    ],
    "Baby sitting": [
      { id: 14, alt: "Teacher guiding toddler", aspect: "portrait", imageId: "sit-1" },
      { id: 15, alt: "Safe play supervision", aspect: "landscape", imageId: "sit-2" },
      { id: 16, alt: "Care time activity", aspect: "square", imageId: "sit-3" },
      { id: 17, alt: "Kids resting in cozy corner", aspect: "landscape", imageId: "sit-4" },
    ],
  },

  testimonials: [
    {
      id: 1,
      date: "SATURDAY",
      text: "The academy helped my child become more confident and active. The teachers are kind and supportive.",
      author: "John Corda",
      role: "Parent",
    },
    {
      id: 2,
      date: "SATURDAY",
      text: "Very clean environment and well-organized activities. My child enjoys going every day.",
      author: "Nimali Perera",
      role: "Parent",
    },
    {
      id: 3,
      date: "SATURDAY",
      text: "Great balance of learning and fun. I love the progress updates and friendly staff.",
      author: "Arun Kumar",
      role: "Parent",
    },
  ],

  statistics: {
    parentsCount: 66,
  },
};



export const aboutContent = {
  header: {
    title: "About us",
    subtitle: "Birds play form studied",
    heroImage: heroImage,
    watermarkText: "BABY",
  },

  contactInfo: {
    title: "Get In Touch",
    image: "/images/contact-girl.png",
    items: [
      { id: 1, type: "phone", text: "144 0055 9175" },
      { id: 2, type: "email", text: "drenomil@demo.com" },
      { id: 3, type: "address", text: "16 Glazelord Street Glasgow" },
      { id: 4, type: "address", text: "G1 UU, New York, USA" },
    ],
  },

  serviceAreas: {
    primary: {
      title: "Way in use",
      locations: [
        "Hastings-On-Hudson",
        "Eastchester",
        "Tuckahoe",
        "Brotwylle",
        "Minnaroneck",
        "Larchmont",
        "Mt Vernon",
        "New Rochelle",
      ],
    },
    secondary: {
      title: "Road and Road",
      columns: [
        { locations: ["Westwood", "Paramus", "River Edge", "Tenafly"] },
        { locations: ["Alpine", "Yonkers", "Roxville", "Harrison", "Memaroneck", "Larchmont"] },
      ],
    },
  },

  cta: {
    text: "Ask About Kids Acts",
    image: "/images/cta-kids.png",
    formPlaceholders: ["Your Name", "Your Address", "Phone Number", "Emailing", "Message"],
  },
};


export const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://web.facebook.com/groups/1069615483659040/?ref=share_group_link&rdid=nJFVYqOJdSESasR0&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2Fg%2F1AEsWbv7Ef%2F%3F_rdc%3D1%26_rdr#",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/@nishaanthenadarajah8103",
  },
];


import About from "../../public/images/About.jpg"
import principal from "../../public/images/principal.jpg"
import schoolLife1 from "../../public/images/schoolLife1.jpg"
import schoolLife2 from "../../public/images/schoolLife2.jpg"
import schoolLife3 from "../../public/images/schoolLife3.jpg"
import schoolLife4 from "../../public/images/schoolLife4.jpg"
import map from "../../public/images/map.jpg"


export const aboutPage = {
  hero: {
    title: "About Us",
    tagline: "Where little learners grow with joy, confidence, and care.",
    visionTitle: "Vision",
    visionText:
      "Let us become the wings of childhood, nurturing talent,creativity,and values. Developing self-desipline, and creating a successful school year and bright future.Let's lead the society to victory... ",
    missionTitle: "Mission",
    missionText:
      "The roots of childhood are the ladder to future with character creation. Develop motivation,promote talent,realize the need for education, and elevate sports.Let's find a way of life and conquer the future.",
    stats: [
  { label: "Happy Students", value: 200, suffix: "+" },
  { label: "Programs", value: 25, suffix: "+" },
  { label: "Teachers", value: 60, suffix: "+" },
],

    heroImage: About, // replace with your image
  },

  director: {
    title: "Principal’s Message",
    name: "Mrs.Nishaanthe Nadarajah",
    role: "Principal / Director B.Ed in early childhood education /M.Ed reading/MSW reading Dip in counselling and psychology / Grand master practitioner NLP",
    message:
      "Every child deserves a safe, respectful, and happy childhood.Learning begins with love, care, and curiosity.We grow together—children, parents, and educators.",
    image: principal, 
  },

  programs: {
    title: "Programs & Activities",
    subtitle:
      "A balanced experience that builds academic strength, creativity, and social skills.",
    items: [
      {
        title: "Academics",
        desc: "Strong foundation in reading, writing, and numeracy through fun learning.",
        icon: "book",
      },
      {
        title: "Arts & Creativity",
        desc: "Drawing, music, craft, drama, and projects that spark imagination.",
        icon: "palette",
      },
      {
        title: "Sports & Movement",
        desc: "Games, basic athletics, and movement activities to build health and teamwork.",
        icon: "trophy",
      },
      {
        title: "Extracurricular Clubs",
        desc: "Dance, martial arts, language clubs, and confidence-building activities.",
        icon: "sparkles",
      },
      {
        title: "Values & Character",
        desc: "Kindness, respect, discipline, and responsibility in everyday school life.",
        icon: "heart",
      },
      {
        title: "Tech & Discovery",
        desc: "Age-friendly technology, puzzles, and STEM play for curious minds.",
        icon: "monitor",
      },
    ],
  },

  photos: {
    title: "School Life Moments",
    subtitle: "A glimpse of joyful learning and playful discovery.",
    images: [
      schoolLife1,
      schoolLife2,
      schoolLife3,
      schoolLife4,
    ],
  },

  community: {
    title: "Community & Parent Involvement",
    subtitle:
      "We grow together. Parents are part of our school journey through events and engagement.",
    points: [
      "PTA meetings and feedback sessions",
      "Volunteering for school events and trips",
      "Parent workshops and child development talks",
      "Annual concerts, sports meets, and celebration days",
    ],
    ctaText: "Join Our Parent Community",
  },

  contact: {
    title: "Contact Information",
    phone: "144 0055 9175",
    email: "drenomil@demo.com",
    addressLine1: "16 Glazelord Street Glasgow",
    addressLine2: "G1 UU, New York, USA",
    mapImage: map,
  },
};


//staff Section 

import staff from "../../public/images/staff.jpg"
import madhushi from "../../public/images/madhushi.png"

export const staffPage = {
  hero: {
    title: "Our Staff",
    subtitle:
      "Meet our caring team of educators and mentors who guide children with love, learning, and confidence.",
    bannerImage: staff, // placeholder background image
    stats: [
      { label: "Teachers", value: 60, suffix: "+" },
      { label: "Experience", value: 12, suffix: "+ years" },
      { label: "Happy Students", value: 1000, suffix: "+" },
    ],
  },

  categories: ["All", "Management", "Teachers", "Support Staff"],

  staff: [
    {
      id: 1,
      name: "Mrs. Anusha Perera",
      role: "Principal / Director",
      category: "Management",
      image: principal,
      bio:
        "Leads our school with a strong focus on child-centered learning, character building, and a safe environment.",
      highlights: ["Leadership", "Student wellbeing", "Parent communication"],
      contact: { email: "principal@demo.com", phone: "144 0055 9175" },
    },
    {
      id: 2,
      name: "Mr. Kevin Silva",
      role: "Vice Principal",
      category: "Management",
      image: principal,
      bio:
        "Supports academic planning and ensures every classroom is engaging and student-friendly.",
      highlights: ["Academic planning", "Teacher support", "Discipline & values"],
      contact: { email: "kevin@demo.com", phone: "144 1111 2222" },
    },
    {
      id: 3,
      name: "K.Nishanthakumary",
      role: "Assistant Teacher",
      category: "Teachers",
      image: principal,
      bio:
        "Creates joyful learning experiences with stories, activities, and gentle guidance.",
      highlights: ["Early literacy", "Creative learning", "Classroom care"],
      contact: { email: "nisha@demo.com", phone: "144 2222 3333" },
    },
    {
      id: 4,
      name: "P.Rubika",
      role: "Assistant Teacher",
      category: "Teachers",
      image: principal,
      bio:
        "Builds teamwork and confidence through fun games and basic athletics.",
      highlights: ["Teamwork", "Motor skills", "Healthy habits"],
      contact: { email: "arjun@demo.com", phone: "144 3333 4444" },
    },
    {
      id: 5,
      name: "R.Sannika",
      role: "Assistant Teacher",
      category: "Teachers",
      image: principal,
      bio:
        "Encourages imagination through drawing, craft, music, and performance.",
      highlights: ["Arts & craft", "Music", "Creative thinking"],
      contact: { email: "maya@demo.com", phone: "144 4444 5555" },
    },
    {
      id: 6,
      name: "Mr. Sanjaya",
      role: "School Coordinator",
      category: "Support Staff",
      image: principal,
      bio:
        "Helps with daily school operations and supports parents and students.",
      highlights: ["Operations", "Events", "Communication"],
      contact: { email: "coord@demo.com", phone: "144 5555 6666" },
    },
    {
      id: 7,
      name: "Madhushi Hanshika",
      role: "Trainee Teacher",
      category: "Teachers",
      image: madhushi,
      bio:
        "Encourages imagination through drawing, craft, music, and performance.",
      highlights: ["Arts & craft", "Music", "Creative thinking"],
      contact: { email: "maya@demo.com", phone: "144 4444 5555" },
    },
  ],
};


