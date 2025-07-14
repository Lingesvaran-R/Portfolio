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
import Image from 'next/image';


export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
    id: 'elite-wash',
    title: 'Elite Wash – Mobile App UI/UX Design for Laundry Services',
    tools: 'Figma',
    description:
      'Elite Wash is a full scale mobile app project I designed to streamline the laundry booking experience in urban India. From day one, I approached this not just as a visual designer but as a problem solver starting with real user interviews and empathy mapping to uncover common frustrations in traditional laundry services. The design was focused on making the process fast, intuitive, and mobile first, ensuring every touchpoint from login to pickup confirmation was effortless. I created the full UX journey, wireframes, and visual design, all aligned to scalable design principles and responsive UI.',
    hrNote: 'This project showcases my ability to think holistically not just about UI, but about user needs, tech limitations, and brand clarity. It reflects my end to end capability, from UX research to pixel ready design delivery, with developer friendly documentation.',
    highlights: [
      'Comprehensive UX Research & Empathy Mapping',
      'End-to-End Product Design Workflow',
      'Mobile-First Responsive Architecture',
      'High-Fidelity Prototypes & Clean Visual System'
    ],
    images: [
      '/images/projects/elite-wash/1.png'
    ]
  },
  {
    id: 'astrology',
    title: 'Astrology Landing Page – Calm & Soulful UX Design',
    tools: 'Figma, HTML, CSS',
    description:
      'This landing page was designed for a traditional Nadi astrology institution transitioning to the digital space. The challenge was to balance modern usability with cultural and spiritual storytelling something that connects deeply with the Indian audience and still feels premium online. I conducted brief stakeholder interviews to understand their core offering and emotional value. The UI features soft gradients, sacred imagery, and a clear visual hierarchy that helps users trust the service. It gently guides users from awareness to booking in a single scroll.',
    hrNote: 'This project highlights my skill in brand-sensitive design. It demonstrates empathy not just toward users, but also toward legacy institutions seeking digital transformation. It also shows my comfort designing for emotionally nuanced topics like culture and belief.',
    highlights: [
      'Emotionally Intelligent UX Design',
      'Soft Gradient & Spiritual Visual Aesthetic',
      'User Journey Mapping Based on Real Conversations',
      'Highly Intuitive, Clean Layout'
    ],
    images: [
      '/images/projects/astrology/1.png'
    ]
  },
  {
    id: 'pet-online-landing',
    title: 'Pet Service Landing Page – Responsive Web Design',
    tools: 'Figma, Adobe XD',
    description:
      'This responsive landing page was created for a pet care startup that offers grooming, walking, and home pickup. I designed it to be lighthearted and lovable while still focusing on conversion, performance, and trust building. The UI combines playful design with strong CTAs, carefully placed social proof, and accessible forms. From layout to iconography, the entire experience was designed to look great on both desktop and mobile, with a clean modular structure that’s easy to scale into a full platform later.',
    hrNote: 'This case shows my understanding of user retention and micro-conversions, as well as my comfort working on marketing-driven UX. It also reflects strong design system thinking, important for team scalability.',
    highlights: [
      'Mobile-First & Cross-Device Responsive Design',
      'Clear Visual Hierarchy & Consistent Branding',
      'Seamless Booking Flow',
      'Accessibility-Focused User Interface'
    ],
    images: [
      '/images/projects/pet-online-landing/1.png'
    ]
  }
];

  const skills = {
    design: ['Figma', 'Adobe XD'],
    frontend: ['HTML', 'CSS', 'GitHub', 'React.js (Learning)'],
    creative: ['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Canva', 'Notion'],
    soft: ['Creative Thinking', 'Problem Solving', 'Team Collaboration', 'Time Management', 'Adaptability', 'Quick Learning']
  };

  const project = selectedProject ? projects.find(p => p.id === selectedProject) : null;
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8" data-linges="hero-section">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" data-linges="hero-title">
                Hi, I&apos;m <span className="text-[#00FF7F]">Lingesvran R.</span>
              </h1>
              <div className="space-y-14">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300" data-linges="hero-role">
                I blend thoughtful design and smart development to craft user-first digital experiences.
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed" data-linges="hero-description">
                📍 Chennai,Tamil Nadu, India
              </p>
            </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                className="bg-[#00FF7F] text-black hover:bg-[#00FF7F]/90 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF7F]/30"
              >
                <a href="mailto:linges.varan.rp@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Hire Me
                </a>
              </Button>
              <Button 
                variant="outline" 
                asChild 
                className="border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-black px-8 py-6 text-lg font-semibold transition-all duration-300"
              >
                <a href="https://linkedin.com/in/lingesvaran" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  View LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side - Creative Visualization */}
          <div className="flex items-center justify-center">
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Rotating Hexagon */}
              <div className="absolute inset-0 border-2 border-[#00FF7F] rounded-lg transform rotate-45 animate-pulse"></div>
              <div className="absolute inset-4 border border-[#00FF7F]/50 rounded-lg transform -rotate-45 animate-pulse delay-1000"></div>
              <div className="absolute inset-8 border border-[#00FF7F]/30 rounded-lg transform rotate-45 animate-pulse delay-2000"></div>
              
              {/* Floating Tools with Icons */}
<div className="absolute -top-6 -left-6 bg-[#1a1a1a] border border-[#00FF7F]/30 rounded-lg p-3 animate-bounce delay-1000">
  <div className="w-6 h-6 bg-[#00FF7F] rounded flex items-center justify-center text-black text-lg">
    <SiFigma />
  </div>
</div>

<div className="absolute -bottom-8 -right-8 bg-[#1a1a1a] border border-[#00FF7F]/30 rounded-lg p-3 animate-bounce delay-1000">
  <div className="w-6 h-6 bg-[#00FF7F] rounded-full flex items-center justify-center text-black text-lg">
    <SiHtml5 />
  </div>
</div>
              
              {/* Center Text */}
              <div className="text-center z-10 mt-[-30px]">
                <div className="text-[#00FF7F] text-2xl font-bold">UI/UX Designing</div>
                <div className="text-gray-300 text-1xl">&</div>
                <div className="text-[#00FF7F] text-2xl font-bold">Frontend Development</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]" data-linges="about-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-80 h-82 relative bg-gradient-to-br from-[#00FF7F]/20 to-[#00FF7F]/5 rounded-2xl border border-[#00FF7F]/30 mx-auto lg:mx-0 overflow-hidden">
  <img
    src="/images/profile.jpg"  // ⬅️ your image path here
    alt="Lingesvaran - UI/UX Designer"
    className="object-cover w-full h-full rounded-2xl"
  />
</div>
</div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00FF7F] mb-8" data-linges="about-title">About Me</h2>
              <div className="prose prose-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  I come from a Civil Engineering background, but my true <span className="text-[#00FF7F] font-semibold">passion</span> has always been design. While in college, I began self learning graphic design, gradually transitioning into UI/UX through dedicated study and hands on projects. Eventually, I earned a UI/UX certification to formalize my skill set.
                </p>
                <p>
                  With over <span className="text-[#00FF7F] font-semibold"> 2+ years </span> of real world design experience, I specialize in crafting thoughtful, user centric digital experiences that are both visually engaging and functionally sound. I love transforming abstract ideas into purposeful, intuitive interfaces that feel almost <span className="text-[#00FF7F] font-semibold">handmade</span> because they truly are.
                </p>
                <p>
                 I follow a <span className="text-[#00FF7F] font-semibold">user first</span> approach to design, where every element serves a clear purpose and every interaction feels natural. I&apos;m continuously learning, experimenting, and refining because good design is never static.
                </p>
              </div>
            </div>
          </div>
        </div>
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

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]" data-linges="projects-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00FF7F] mb-12 text-center" data-linges="projects-title">
            Key Personal Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className="bg-black border-[#00FF7F]/30 hover:border-[#00FF7F]/60 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-[#00FF7F]/20"
                onClick={() => setSelectedProject(project.id)}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#00FF7F] group-hover:text-[#00FF7F]/80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">🛠️ {project.tools}</p>
                    <p className="text-gray-300 text-sm line-clamp-3">{project.description}</p>
                    <Button 
                      variant="outline" 
                      className="w-full border-[#00FF7F]/50 text-[#00FF7F] hover:bg-[#00FF7F] hover:text-black transition-all duration-300"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

     {/* Project Modal */}
{project && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-[#1a1a1a] border border-[#00FF7F]/30 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold text-[#00FF7F]">
            {project.title}
          </h3>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setSelectedProject(null)}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-6">
          <p className="text-sm text-gray-400 font-medium">
            🛠️ {project.tools}
          </p>

          <p className="text-gray-300 leading-relaxed">
            {project.description}
          </p>

           {/* HR Note */}
          {project.hrNote && (
            <div className="space-y-2">
              <h4 className="font-semibold text-[#00FF7F]">
                For HR / Institutions:
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.hrNote}
              </p>
            </div>
          )}

          {project.highlights && (
            <div className="space-y-3">
              <h4 className="font-semibold text-[#00FF7F]">Key Highlights:</h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="text-[#00FF7F] mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

        
          {/* ✅ Images */}
        {project.images && (
  <div className="flex flex-wrap gap-4 justify-start items-start pt-4">
    <h4 className="font-semibold text-[#00FF7F]">Visual Journey Through the Design:</h4>
    {project.images.map((img, index) => (
        <div
        key={index}
        className="bg-[#111] rounded-xl shadow-md border border-white/10 overflow-hidden hover:scale-105 transition-transform duration-300"
      >
        <img
          src={img}
          alt={`Project Image ${index + 1}`}
          className="w-full h-auto object-cover"
        />
      </div>
    ))}
  </div>
          )}
        </div>
      </div>
    </div>
  </div>
)}

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" data-linges="skills-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00FF7F] mb-12 text-center" data-linges="skills-title">
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#00FF7F] flex items-center gap-2">
                🎨 Design Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((skill) => (
                  <Badge key={skill} variant="outline" className="border-[#00FF7F]/50 text-[#00FF7F] hover:bg-[#00FF7F]/20 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#00FF7F] flex items-center gap-2">
                💻 Frontend Tech
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Badge key={skill} variant="outline" className="border-[#00FF7F]/50 text-[#00FF7F] hover:bg-[#00FF7F]/20 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#00FF7F] flex items-center gap-2">
                🧰 Creative Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.creative.map((skill) => (
                  <Badge key={skill} variant="outline" className="border-[#00FF7F]/50 text-[#00FF7F] hover:bg-[#00FF7F]/20 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#00FF7F] flex items-center gap-2">
                🧠 Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <Badge key={skill} variant="outline" className="border-[#00FF7F]/50 text-[#00FF7F] hover:bg-[#00FF7F]/20 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
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
              © 2025 Lingesvran R. – Handcrafted UI/UX with <span className="text-[#00FF7F]">❤️</span>
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/lingesvran" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00FF7F] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/lingesvran" 
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