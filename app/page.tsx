/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react'
// ...other imports


import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, ExternalLink, Github, Linkedin, X } from 'lucide-react';
import { SiFigma } from "react-icons/si";
import { SiAdobecreativecloud } from "react-icons/si";
import { SiHtml5  } from "react-icons/si";
import { motion, AnimatePresence } from 'framer-motion';
import { useGesture } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/web';
import { useRef } from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import 'react-medium-image-zoom/dist/styles.css';
import { useEffect} from "react";



export default function Home() {
const [selectedProject, setSelectedProject] = useState<string | null>(null);
const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [{ x }, api] = useSpring(() => ({ x: 0 }));
const [isFullscreen, setIsFullscreen] = useState(false);
const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
const bind = useGesture(
  {
    onDrag: ({ down, movement: [mx], direction, distance: [dx], cancel }) => {
  const xDir = direction[0]; // safely extract the x direction

      if (down && Math.abs(dx) > 80) {
        cancel?.();

        const newIndex =
          xDir > 0
            ? (currentImageIndex === 0 ? (project?.images?.length ?? 1) - 1 : currentImageIndex - 1)
            : (currentImageIndex + 1) % (project?.images?.length ?? 1);
        setCurrentImageIndex(newIndex);
        api.start({ x: 0 });
      } else {
        api.start({ x: down ? mx : 0 });
      }
    }
  },
  { drag: { axis: 'x', filterTaps: true } }
);


  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
    
  });
useEffect(() => {
  if (selectedProject) {
    timeoutRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const images = projects.find(p => p.id === selectedProject)?.images || [];
        return (prev + 1) % images.length;
      });
    }, 10000); // every 10s

    return () => clearInterval(timeoutRef.current as NodeJS.Timeout);
  }
}, [selectedProject]);

  console.log("Portfolio page rendered");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_0yckp3c',
      'template_t8fkdkg',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      '2LaulJSgk2Z7JKURX'
    )
    .then(() => {
      alert("Thank you for your message! I’ll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error("Email failed to send:", error);
      alert("Something went wrong. Please try again later.");
    });
  };

const projects = [
  {
  id: 'home-service',
  title: 'Home Service – Mobile App UI/UX Design for On-Demand Home Maintenance (Case Study)',
  tools: 'Figma, Adobe Photoshop, Adobe Illustrator',
  description:
    'Home Service is a mobile app project I designed to simplify booking and managing a variety of home maintenance services, from cleaning to plumbing and electrical work. I began by interviewing homeowners and service providers to identify their needs and concerns. The design focused on building user trust and ease of use, with features like verified professionals, transparent pricing, and straightforward scheduling. The UI uses a warm, approachable color scheme and clear navigation, guiding users from selecting a service to confirming an appointment quickly and confidently.',
  hrNote: 'This project highlights my ability to design comprehensive service platforms that address real user concerns like safety and convenience. It demonstrates my skill in organizing diverse service information and creating a cohesive, trustworthy user experience. It also reflects my end-to-end design process from research to high-fidelity prototype.',
  highlights: [
    'Extensive Service Catalog & Search',
    'Verified Professionals & Ratings',
    'Streamlined Scheduling Flow',
    'Clean, Trustworthy Interface'
  ],
  thumbnail: "/images/thumbnails/home-service-thumb.png",
  images: [
    '/images/projects/home-service/1.png',
    '/images/projects/home-service/2.png',
    '/images/projects/home-service/3.png',
    '/images/projects/home-service/4.png',
    '/images/projects/home-service/5.png',
    '/images/projects/home-service/6.png',
    '/images/projects/home-service/7.png',
    '/images/projects/home-service/8.png',
    '/images/projects/home-service/9.png',
    '/images/projects/home-service/10.png',
    '/images/projects/home-service/11.png',
    '/images/projects/home-service/12.png',
    '/images/projects/home-service/13.png',
    '/images/projects/home-service/14.png',
    '/images/projects/home-service/15.png',
    '/images/projects/home-service/16.png',
    '/images/projects/home-service/17.png',
    '/images/projects/home-service/18.png',
    '/images/projects/home-service/19.png',
    '/images/projects/home-service/20.png'
  ]
},
{
  id: 'bikeservice',
  title: 'Bike Service – Mobile App UI/UX Design for Two-Wheeler Maintenance (Case Study)',
  tools: 'Figma, Adobe Photoshop, Adobe Illustrator',
  description:
    'Bike Service is a full-scale mobile app project I designed to simplify scheduling and managing maintenance and repair services for two-wheeler owners. From the start, I approached this project by interviewing bikers and mechanics to understand common pain points in bike servicing. The app focuses on an intuitive booking flow, real-time status updates, and transparent pricing. The UI features clean iconography of bikes and services, progress indicators, and a streamlined workflow that guides users from selecting a service to booking in just a few taps.',
  hrNote: 'This project showcases my ability to design efficient mobile experiences for on-demand services and to translate user insights into practical features. It highlights my end-to-end UX process from research to high-fidelity design, and my skill in simplifying a complex service flow into a user-friendly interface.',
  highlights: [
    'User-Centered Research & Personas',
    'Streamlined Service Booking Flow',
    'Real-Time Progress Tracking',
    'Clear, Intuitive Iconography'
  ],
  thumbnail: "/images/thumbnails/bikeservice-thumb.png",
  images: [
    '/images/projects/bikeservice/1.png',
    '/images/projects/bikeservice/2.png',
    '/images/projects/bikeservice/3.png',
    '/images/projects/bikeservice/4.png',
    '/images/projects/bikeservice/5.png',
    '/images/projects/bikeservice/6.png',
    '/images/projects/bikeservice/7.png',
    '/images/projects/bikeservice/8.png',
    '/images/projects/bikeservice/9.png',
    '/images/projects/bikeservice/10.png',
    '/images/projects/bikeservice/11.png',
    '/images/projects/bikeservice/12.png',
    '/images/projects/bikeservice/13.png',
    '/images/projects/bikeservice/14.png',
    '/images/projects/bikeservice/15.png',
    '/images/projects/bikeservice/16.png',
    '/images/projects/bikeservice/17.png',
    '/images/projects/bikeservice/18.png',
    '/images/projects/bikeservice/19.png',
    '/images/projects/bikeservice/20.png'
  ]
},
{
  id: 'elite-wash',
  title: 'Elite Wash – Mobile App UI/UX Design for Laundry Services (Case Study)',
  tools: 'Figma, Adobe Photoshop, Adobe Illustrator',
  description:
    'Elite Wash is a full scale mobile app project I designed to streamline the laundry booking experience in urban India. From day one, I approached this not just as a visual designer but as a problem solver starting with real user interviews and empathy mapping to uncover common frustrations in traditional laundry services. The design was focused on making the process fast, intuitive, and mobile first, ensuring every touchpoint from login to pickup confirmation was effortless. I created the full UX journey, wireframes, and visual design, all aligned to scalable design principles and responsive UI.',
  hrNote: 'This project showcases my ability to think holistically not just about UI, but about user needs, tech limitations, and brand clarity. It reflects my end to end capability, from UX research to pixel ready design delivery, with developer friendly documentation.',
  highlights: [
    'Comprehensive UX Research & Empathy Mapping',
    'End-to-End Product Design Workflow',
    'Mobile-First Responsive Architecture',
    'High-Fidelity Prototypes & Clean Visual System'
  ],
  thumbnail: "/images/thumbnails/elitewash-thumb.png",
  images: [
    '/images/projects/elite-wash/1.png',
    '/images/projects/elite-wash/2.png',
    '/images/projects/elite-wash/3.png',
    '/images/projects/elite-wash/4.png',
    '/images/projects/elite-wash/5.png',
    '/images/projects/elite-wash/6.png',
    '/images/projects/elite-wash/7.png',
    '/images/projects/elite-wash/8.png',
    '/images/projects/elite-wash/9.png'
  ]
},
   {
    id: 'astrology-landing-page',
    title: 'Astrology Landing Page Calm & Soulful UX Design',
    tools: 'Figma, Adobe photoshop, HTML, CSS',
    description:
      'This landing page was crafted for a traditional Indian astrology institute with a focus on cultural authenticity and clear UX. We began by understanding the audience, recognizing that knowing who will use the site is key to effective design. Inspired by traditional iconography and warm, earthy colors, the design conveys trust and expertise. Complex astrological content like daily charts and birth calculators is organized in an intuitive hierarchy so users can find insights quickly. The site is mobile responsive, ensuring users can access horoscopes on any device. This project demonstrates thoughtful UX it educates visitors and builds trust in the astrologers’ knowledge.',
    hrNote:
      'Showcases culturally-aware UI/UX design, mobile responsiveness, and clear information architecture that builds user trust.',
    highlights: [
      'Cultural UX design with traditional color palettes and motifs',
      'Responsive layout designed for mobile and tablet users',
      'Trust-focused branding and visual consistency',
      'Intuitive organization of complex spiritual content'
    ],
    thumbnail: "/images/thumbnails/astrology-thumb.png",
    images: [
    '/images/projects/astrology/2.png'
    ]
  },
  {
    id: 'food-delivery-web-mobile',
    title: 'Food Delivery Web & Mobile – Engaging Multi-Platform UX',
    tools: 'Figma, HTML, CSS',
    description:
      'This project involved designing a seamless ordering experience for a restaurant food delivery platform across both web and mobile. We focused on simplifying the user journey: menus are presented with large, appetizing visuals, clean typography, and lots of breathing space to reduce cognitive load. The onboarding process was made effortless users could sign up with minimal input and start ordering right away. Smart features like predictive dish search and personalized recommendations based on previous orders enhanced the experience. The result is a sleek, intuitive product that makes food discovery fast, familiar, and delightful.',
    hrNote:
      'Demonstrates ability to design engaging, high-conversion UI for fast-moving consumer apps with attention to both aesthetics and flow.',
    highlights: [
      'Streamlined food ordering journey with minimal friction',
      'Visually appealing interface that drives appetite and engagement',
      'Smart search and filtering for faster navigation',
      'One-click reorders with personalized food suggestions'
    ],
    thumbnail: "/images/thumbnails/food-delivery-thumb.png",
    images: [
      '/images/projects/food/1.png'
    ]
  },
  {
    id: 'learnlike-landing-page',
    title: 'Learnlike Coaching Center – High-Trust Educational UX',
    tools: 'Figma, HTML, CSS',
    description:
      'This landing page was created for Learnlike, an academic and career coaching institute. The design balances professional structure with welcoming simplicity. We emphasized clarity each section clearly presents programs, expert profiles, testimonials, and outcomes so users can find what matters most. Strong, high-contrast calls to action invite students to book a free consultation or explore programs. Subtle animations and smart content blocks create a trustworthy, modern experience that reflects Learnlike’s values. From mobile to desktop, everything flows smoothly and encourages user action without overwhelming them.',
    hrNote:
      'Highlights proficiency in conversion-based layout thinking, structured content design, and trust-building visual language tailored for academic services.',
    highlights: [
      'Clean layout with focus on structured educational content',
      'Responsive design optimized across all screen sizes',
      'Clear CTAs and conversion-friendly structure',
      'Visual trust-building with expert bios and testimonials'
    ],
    thumbnail: "/images/thumbnails/learnlike-thumb.png", 

    images: [
      '/images/projects/learnlike/1.png',
      '/images/projects/learnlike/2.png'
    ]
  }
]

  const skills = {
    design: ['Figma', 'Adobe XD'],
    frontend: ['HTML', 'CSS', 'GitHub', 'React.js (Learning)'],
    creative: ['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Canva', 'Notion'],
    soft: ['Creative Thinking', 'Problem Solving', 'Team Collaboration', 'Time Management', 'Adaptability', 'Quick Learning']
  };

  const project = selectedProject ? projects.find((p) => p.id === selectedProject) : null;  return (
    <div className="min-h-screen bg-black text-white">
{/* Hero Section - Redesigned Creatively */}
<section
  className="min-h-screen flex items-center justify-center bg-black text-white px-6"
  data-linges="hero-section"
>
  <div className="text-center space-y-8 relative max-w-3xl w-full">

    {/* Floating Glow Background */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00FF7F]/10 blur-3xl rounded-full animate-pulse z-0" />

    {/* Content */}
    <div className="relative z-10 space-y-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
        Hello, I'm <span className="text-[#00FF7F]">Lingesvaran R.</span>
      </h1>

      <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-white">
        UI/UX Designing & Development
      </p>

      <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto">
        I design with empathy & build with clarity.
      </p>

      <p className="text-md sm:text-lg text-gray-500">
        Welcome to my creative portfolio. Scroll down to explore my world of design & code 🚀
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <Button
          asChild
          className="bg-[#00FF7F] text-black hover:bg-[#00FF7F]/90 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF7F]/30"
        >
          <a href="mailto:linges.varan.rp@gmail.com" className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Hire Me
          </a>
        </Button>

        <Button
          variant="outline"
          asChild
          className="border-[#00FF7F] text-[#21b026] hover:bg-[#00FF7F] hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300"
        >
          <a
            href="https://linkedin.com/in/lingesvaran"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </Button>
      </div>
    </div>

    {/* Scroll Down Hint */}
    <div className="relative z-10 pt-10">
      <p className="text-sm text-gray-400 animate-bounce">⬇️ Scroll to see my work</p>
    </div>
  </div>
</section>


   {/* Key Projects - Thumbnail Grid Creative */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]" data-linges="projects-section">
  <div className="max-w-7xl mx-auto">
    {/* Small Heading */}
    <h2 className="text-2xl sm:text-3xl font-semibold text-[#00FF7F] mb-10 text-center">
      Key Projects
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          onClick={() => {
            setSelectedProject(project.id);
            setCurrentImageIndex(0);
          }}
          className="relative group cursor-pointer overflow-hidden rounded-xl border border-[#00FF7F]/20 hover:border-[#00FF7F]/50 transition-all duration-300 bg-black shadow hover:shadow-[#00FF7F]/20"
        >
          {/* Thumbnail Image */}
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay on Desktop */}
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
            <p className="text-sm sm:text-base text-[#00FF7F] font-medium bg-black/70 px-4 py-2 rounded-md border border-[#00FF7F]/30 shadow-md">
              ✨ Tap to Explore
            </p>
          </div>

          {/* Always visible cue for mobile */}
          <div className="sm:hidden absolute bottom-0 left-0 right-0 bg-black/80 text-center py-2">
            <p className="text-sm text-[#00FF7F] font-medium">✨ Tap to Explore</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


     {/* Unique About Section */}
<section className="relative py-24 px-6 sm:px-10 bg-[#0e0e0e]" data-linges="about-unique">
  <div className="max-w-6xl mx-auto relative z-10">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#00FF7F] mb-4">Who I Am</h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        Designing thoughtful experiences with code, color & clarity.
      </p>
    </div>

    {/* Content Container */}
    <div className="relative bg-[#1a1a1a]/60 backdrop-blur-lg rounded-2xl border border-[#00FF7F]/20 shadow-xl p-8 sm:p-10 text-gray-200 hover:shadow-[#00FF7F]/20 transition-shadow duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <div className="w-92 h-92 rounded-xl overflow-hidden border border-[#00FF7F]/30 bg-[#121212] shadow-inner">
            <img
              src="/images/profile.jpg"
              alt="Lingesvaran"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>

        {/* About Text */}
        <div className="md:col-span-2">
          <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
            <p>
              From pouring concrete to crafting clean UI my journey into design started with a shift in perspective. I come from a <span className="text-[#00FF7F] font-semibold">Civil Engineering background, but deep down, I was always drawn to creativity</span>. During college, I taught myself graphic design, spending late nights experimenting with layouts, type, and color. That passion evolved into something bigger UI/UX.
            </p>

            <p>
              Today, with <span className="text-[#00FF7F] font-semibold">2+ years</span> of real world experience in UI/UX design and frontend development, I focus on building digital experiences that are both visually compelling and deeply usable. Whether it's a dashboard, a service app, or a landing page, I prioritize function over fluff  <span className="text-[#00FF7F] font-semibold">clarity</span>, not just decoration.
            </p>

            <p>
              My approach is always human first. I design with empathy, intent, and logic. Every pixel I place has a reason behind it. I'm someone who thrives in <span className="text-[#00FF7F] font-semibold">problem solving, iteration, and team collaboration</span>. Tools evolve, trends shift but what stays is good thinking and good design. That’s what I bring to every project.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Background Glow */}
  <div className="absolute -top-16 left-0 w-72 h-72 bg-[#00FF7F]/10 rounded-full blur-3xl animate-pulse" />
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00FF7F]/5 rounded-full blur-2xl animate-pulse" />
</section>


      {/* Professional Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" data-linges="experience-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00FF7F] mb-12 text-center" data-linges="experience-title">
            Professional Experience
          </h2>
          
          <div className="space-y-12">
            {/* Current Role */}
            <Card className="bg-[#1a1a1a] border-[#00FF7F]/30 hover:border-[#00FF7F]/60 transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="border-b border-[#00FF7F]/20 pb-4">
                    <h3 className="text-2xl font-bold text-[#00FF7F]">Cybervault Innovation and Technologies Pvt Ltd</h3>
                    <p className="text-xl text-gray-300 mt-2">UI/UX Designer & Frontend Developer</p>
                    <p className="text-gray-400 mt-1">📍 Coimbatore | Apr 2024 – Present</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="border-l-2 border-[#00FF7F] pl-4">
                        <h4 className="font-semibold text-[#00FF7F] mb-2">✅ Task Manager Dashboard</h4>
                        <p className="text-sm text-gray-400"> Designed and developed a task management dashboard tailored for internal teams. Conducted requirement analysis through team interviews, mapped user journeys, and created architecture diagrams. Built low fidelity wireframes and converted them into a clean, responsive high-fidelity UI. Incorporated intuitive task flows, progress tracking components, and role based dashboards streamlining team collaboration and productivity.</p>
                      </div>
                      <div className="border-l-2 border-[#00FF7F] pl-4">
                        <h4 className="font-semibold text-[#00FF7F] mb-2">✅ Cybersecurity Handbook</h4>
                        <p className="text-sm text-gray-400">Designed a visually engaging internal handbook for cybersecurity awareness and training. Worked closely with the InfoSec team to translate complex topics into digestible visual formats using infographics, icons, and editorial style layouts. Delivered both print ready and interactive digital versions with accessibility and clarity in mind enhancing employee engagement with security protocols.</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="border-l-2 border-[#00FF7F] pl-4">
                        <h4 className="font-semibold text-[#00FF7F] mb-2">✅ Appraisal Web Portal</h4>
                        <p className="text-sm text-gray-400">Took ownership of the end to end UI/UX for a web based appraisal system. Designed interactive dashboards and evaluation flows to simplify employee performance reviews. Collaborated with backend developers to integrate real time updates and notification systems. Focused on reducing administrative friction by introducing role-specific forms, guided steps, and clean visual feedback mechanisms.</p>
                      </div>
                      <div className="border-l-2 border-[#00FF7F] pl-4">
                        <h4 className="font-semibold text-[#00FF7F] mb-2">✅ Other Visual Work</h4>
                        <p className="text-sm text-gray-400"> Delivered a wide range of marketing and communication assets including responsive landing pages, event posters, internal newsletters, digital invites, and social banners. Ensured all visuals followed brand guidelines and carried a consistent design language. Frequently collaborated with marketing and HR teams to align messaging and visuals for maximum engagement.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Previous Role */}
            <Card className="bg-[#1a1a1a] border-[#00FF7F]/30 hover:border-[#00FF7F]/60 transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="border-b border-[#00FF7F]/20 pb-4">
                    <h3 className="text-2xl font-bold text-[#00FF7F]">Esteem Multi Systems</h3>
                    <p className="text-xl text-gray-300 mt-2">Graphic Designer</p>
                    <p className="text-gray-400 mt-1">📍 Chennai | Dec 2022 – Feb 2024 (Internship till Mar 2023)</p>
                  </div>
                  
                  <div className="border-l-2 border-[#00FF7F] pl-4">
                    <p className="text-gray-400">Contributed to brand identity development through daily content creation for social media and promotional campaigns. Designed hand crafted visual posts, animated stories, and engaging video reels that emphasized emotional storytelling using color psychology, motion graphics, and expressive typography. Supported logo refinement, campaign graphics, and visual consistency across platforms playing a key role in building a cohesive digital presence for the brand. Collaborated closely with marketing to align creative output with audience engagement goals.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
{/* Project Modal */}
{project && (
  <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm text-white flex items-center justify-center p-4">
    <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#111] border border-[#00FF7F]/30 rounded-xl shadow-lg scrollbar-hide">

      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-[#111] border-b border-white/10 flex items-center justify-between px-6 py-4">
        <h3 className="text-xl sm:text-2xl font-bold text-[#00FF7F]">
          {project.title}
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSelectedProject(null)}
          className="text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-8 text-sm sm:text-base">

        {/* Tools */}
        {project.tools && (
          <p className="text-gray-400 font-medium">
            🛠 Tools: <span className="text-white">{project.tools}</span>
          </p>
        )}

        {/* Description */}
        {project.description && (
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        )}

        {/* Highlights */}
        {project.highlights && (
          <div>
            <h4 className="text-[#00FF7F] font-semibold mb-2">✨ Key Highlights:</h4>
            <ul className="space-y-2 list-disc list-inside text-gray-300">
              {project.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {/* HR Note */}
        {project.hrNote && (
          <div className="bg-[#1a1a1a] border border-[#00FF7F]/10 p-4 rounded-lg">
            <h4 className="text-[#00FF7F] font-semibold mb-2">Note to Reviewers:</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{project.hrNote}</p>
          </div>
        )}

        {/* Fullscreen Image Stack Showcase */}
        {project.images && (
          <div className="space-y-6">
            {project.images.map((img, i) => (
              <div
                key={i}
                className="w-full bg-black rounded-lg overflow-hidden shadow border border-[#00FF7F]/10"
              >
                <img
                  src={img}
                  alt={`Showcase ${i + 1}`}
                  className="w-full h-auto object-contain cursor-zoom-in"
                  onClick={() => {
                    setFullscreenImage(img);
                    setIsFullscreen(true);
                  }}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        )}
        {isFullscreen && fullscreenImage && (
  <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
    <TransformWrapper
      initialScale={0.5}
      minScale={0.5}
      maxScale={5}
      doubleClick={{ mode: 'toggle' }}
      wheel={{ step: 100 }}
      pinch={{ step: 5 }}
      panning={{ velocityDisabled: false }}
      limitToBounds={false}
      centerOnInit={true}
    >
      <TransformComponent wrapperStyle={{ width: '100vw', height: '100vh' }}>
        <img
          src={fullscreenImage}
          alt="Zoom View"
          className="select-none touch-none object-contain w-auto h-auto max-w-none max-h-none"
          draggable={false}
        />
      </TransformComponent>
    </TransformWrapper>

    <button
      onClick={() => setIsFullscreen(false)}
      className="absolute top-5 right-5 z-[110] bg-black/70 hover:bg-black/90 text-white px-4 py-2 rounded-lg border border-white/10 shadow"
    >
      ❌ Close
    </button>
  </div>
)}
      </div>
    </div>
  </div>
)}


    {/* Skills & Expertise – Redesigned Creatively */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white" data-linges="skills-section">
  <div className="max-w-7xl mx-auto text-center space-y-12">
    <h2 className="text-3xl sm:text-4xl font-bold text-[#00FF7F]">Skills & Expertise</h2>
    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
      A well-rounded blend of product thinking, visual clarity, frontend logic, and human-centered design thinking.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">

      {/* Skill Categories */}
      <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#00FF7F]/20 shadow hover:shadow-[#00FF7F]/20 transition-all">
        <h3 className="text-xl font-semibold text-[#00FF7F] mb-4">🎯 UX & UI Skills</h3>
        <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
          <li>User Interface (UI) Design</li>
          <li>User Experience (UX) Design</li>
          <li>Wireframing & Prototyping</li>
          <li>Responsive & Mobile-first Design</li>
          <li>Design Systems</li>
          <li>Human-Centered & Interaction Design</li>
          <li>Micro-interaction & Visual Hierarchy</li>
          <li>Typography & Layout</li>
          <li>Color Theory in UI</li>
          <li>UX Writing (Microcopy)</li>
        </ul>
      </div>

      <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#00FF7F]/20 shadow hover:shadow-[#00FF7F]/20 transition-all">
        <h3 className="text-xl font-semibold text-[#00FF7F] mb-4">🛠️ Tools</h3>
        <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
          <li>Figma, Adobe XD, Sketch</li>
          <li>Procreate, Canva (Quick Content)</li>
          <li>Photoshop, Illustrator, Premiere Pro</li>
          <li>Zeplin, GitHub</li>
        </ul>
      </div>

      <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#00FF7F]/20 shadow hover:shadow-[#00FF7F]/20 transition-all">
        <h3 className="text-xl font-semibold text-[#00FF7F] mb-4">💻 Technologies</h3>
        <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (Learning)</li>
          <li>React.js (Learning)</li>
          <li>Next.js (Learning)</li>
        </ul>
      </div>

      <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#00FF7F]/20 shadow hover:shadow-[#00FF7F]/20 transition-all">
        <h3 className="text-xl font-semibold text-[#00FF7F] mb-4">🌟 Personal Interests</h3>
        <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
          <li>Drawing</li>
          <li>Mentoring other designers</li>
          <li>Freelancing & Collaboration</li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]" data-linges="education-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00FF7F] mb-12 text-center" data-linges="education-title">
            Education & Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#00FF7F] flex items-center gap-2">
                🎓 Education
              </h3>
              
              <Card className="bg-black border-[#00FF7F]/30 hover:border-[#00FF7F]/60 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">B.E., Civil Engineering</h4>
                    <p className="text-gray-400">Saveetha Engineering College</p>
                    <p className="text-sm text-[#00FF7F]">2023</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-black border-[#00FF7F]/30 hover:border-[#00FF7F]/60 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Diploma, Civil</h4>
                    <p className="text-gray-400">Sri Nallalaghu Nadar Polytechnic College</p>
                    <p className="text-sm text-[#00FF7F]">2020</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#00FF7F] flex items-center gap-2">
                📜 Certification
              </h3>
              
              <Card className="bg-black border-[#00FF7F]/30 hover:border-[#00FF7F]/60 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">UI/UX Designing & Development</h4>
                    <p className="text-gray-400">FITA Academy, Anna Nagar</p>
                    <p className="text-sm text-[#00FF7F]">2023</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" data-linges="contact-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00FF7F] mb-12 text-center" data-linges="contact-title">
            Let&apos;s Connect
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-[#1a1a1a] border-[#00FF7F]/30">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#00FF7F] mb-2">Name</label>
                    <Input 
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-black border-[#00FF7F]/30 text-white focus:border-[#00FF7F]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#00FF7F] mb-2">Email</label>
                    <Input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-black border-[#00FF7F]/30 text-white focus:border-[#00FF7F]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#00FF7F] mb-2">Message</label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-black border-[#00FF7F]/30 text-white focus:border-[#00FF7F] min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-[#00FF7F] text-black hover:bg-[#00FF7F]/90 py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF7F]/30"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#00FF7F]/30">
                  <Mail className="w-6 h-6 text-[#00FF7F]" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href="mailto:linges.varan.rp@gmail.com" className="text-gray-400 hover:text-[#00FF7F] transition-colors">
                      linges.varan.rp@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#00FF7F]/30">
                  <Phone className="w-6 h-6 text-[#00FF7F]" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a href="tel:+918248869776" className="text-gray-400 hover:text-[#00FF7F] transition-colors">
                      +91 8248869776
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#00FF7F]/30">
                  <Linkedin className="w-6 h-6 text-[#00FF7F]" />
                  <div>
                    <p className="font-medium text-white">LinkedIn</p>
                    <a href="https://linkedin.com/in/lingesvaran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FF7F] transition-colors">
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-[#00FF7F]/30" data-linges="footer">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Lingesvaran R. – Handcrafted UI/UX with <span className="text-[#00FF7F]">❤️</span>
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/lingesvaran" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00FF7F] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/lingesvaran-R" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00FF7F] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}