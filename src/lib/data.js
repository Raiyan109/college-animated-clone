import life1 from '../assets/life-1.png'
import life2 from '../assets/life-2.png'
import life3 from '../assets/life-3.png'
import life4 from '../assets/life-4.png'
import life5 from '../assets/life-5.png'
import life6 from '../assets/life-6.png'
import life7 from '../assets/life-7.png'
import life8 from '../assets/life-8.png'
import student1 from '../assets/students-1.png'
import student2 from '../assets/students-2.png'
import student3 from '../assets/students-3.png'
import story1 from '../assets/parallax potrait.png'
import story2 from '../assets/life-4.png'
import story3 from '../assets/life-6.png'
import story4 from '../assets/life-8.png'

export const navLinks = [
  { label: 'About the College', sub: ['Our story', 'Leadership', 'Governance', 'Careers'] },
  { label: 'Student Life', sub: ['Rooms & dining', 'Sport & culture', 'Study support', 'Pastoral care'] },
  { label: 'Admissions', sub: ['How to apply', 'Scholarships', 'Fees', 'Key dates'] },
  { label: 'Alumni', sub: ['Network', 'Events', 'Give back', 'Update details'] },
  { label: 'Virtual Tour', sub: [] },
  { label: 'News & Events', sub: [] },
  { label: 'Contact', sub: [] },
]

export const marqueeWords = ['Community', 'Curiosity', 'Belonging', 'Leadership', 'Friendship', 'Resilience']

export const lifeItems = [
  { title: 'The Grounds', tone: 'moss', text: 'Lawns, courtyards and quiet corners for a breath between lectures.', image: life1 },
  { title: 'Dining Hall', tone: 'brick', text: 'Shared tables, seasonal menus and the best conversations of your day.', image: life2 },
  { title: 'Social Life', tone: 'gold', text: 'Formals, trivia nights and traditions that become your stories.', image: life3 },
  { title: 'Your Room', tone: 'sand', text: 'A comfortable space of your own, wired for study and rest.', image: life4 },
  { title: 'Common Rooms', tone: 'moss', text: 'Lounges, kitchens and games rooms where friendships are made.', image: life5 },
  { title: 'Study Spaces', tone: 'brick', text: 'Libraries, tutorial rooms and quiet nooks open late.', image: life6 },
  { title: 'Clubs & Teams', tone: 'gold', text: 'Sport, music, debating and service — join in or start something.', image: life7 },
  { title: 'The Chapel', tone: 'sand', text: 'A place for reflection, music and community gatherings.', image: life8 },
]

export const students = [
  { name: 'Amelia', course: 'Medicine', tone: 'brick', image: student1 },
  { name: 'Kieran', course: 'Engineering', tone: 'moss', image: student2 },
  { name: 'Josephine', course: 'Law', tone: 'gold', image: student3 },
  { name: 'Sam', course: 'Commerce', tone: 'sand', image: student1 },
  { name: 'Georgia', course: 'Architecture', tone: 'brick', image: student2 }
]

export const stories = [
  { tag: 'Events', title: 'Parents’ Weekend returns to the courtyard', tone: 'brick', image: story1 },
  { tag: 'Sport', title: 'Taking her game to the world: a rowing journey', tone: 'moss', image: story2 },
  { tag: 'Sport', title: 'Basketball MVP on teamwork and late-night training', tone: 'gold', image: story3 },
  { tag: 'Community', title: 'Finding your people in first semester', tone: 'sand', image: story4 },
  // { tag: 'Sport', title: 'On court and on campus: a student’s year', tone: 'brick', image: life2 },
  // { tag: 'Sport', title: 'Celebrating a championship victory', tone: 'moss', image: life2 },
  // { tag: 'Alumni', title: 'Bringing alumni together overseas', tone: 'gold' },
  // { tag: 'News', title: 'New Director of Programs joins the College', tone: 'sand' },
]
