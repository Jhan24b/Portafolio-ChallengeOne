import { useState } from 'react'

import { motion } from 'framer-motion'
import { LuBadgeCheck, LuAward, LuGraduationCap } from "react-icons/lu";
import { useLanguage } from '../hooks/useLanguage'

type AcademicItem = {
  type: 'degree' | 'course' | 'certification'
  title: string
  institution: string
  year: string
  logo: string
}

const AcademicDegrees = () => {
  const { language } = useLanguage()
  const [filter, setFilter] = useState<'all' | 'degree' | 'course' | 'certification'>('all')

  const academicItems: AcademicItem[] = [
    {
      type: 'degree',
      title: language === 'es' ? 'Ingeniería de Sistemas e Informática' : 'Systems and Computer Science Engineering',
      institution: language === 'es' ? 'Universidad Tecnológica del Perú' : 'Technological University of Peru',
      year: language === 'es' ? '2020 - actualidad' : '2020 - present',
      logo: '/public/utpLogo.png'
    },
    {
      type: 'certification',
      title: language === 'es' ? 'Especializacion Front-End' : 'Front-End Specialization',
      institution: 'Oracle - Alura Latam',
      year: '2023',
      logo: '/public/aluraLogo.png'
    },
    {
      type: 'certification',
      title: language === 'es' ? 'Google Soporte Técnico' : 'Google IT Support',
      institution: 'Google',
      year: '2023',
      logo: '/public/googleLogo.png'
    },
    {
      type: 'certification',
      title: language === 'es' ? 'Python Para Todos' : 'Python For Everybody',
      institution: 'University of Michigan',
      year: '2022',
      logo: '/public/Umich.png'
    },
    {
      type: 'certification',
      title: language === 'es' ? 'Especializacion en Front End' : 'Front End Specialization',
      institution: 'Meta',
      year: '2024',
      logo: '/public/metaLogo.png'
    },
  ]

  const filteredItems = filter === 'all' ? academicItems : academicItems.filter(item => item.type === filter)

  return (
    <section id="degrees" className="relative pt-24 pb-12 overflow-hidden bg-gradient-to-br from-gray-800 via-blue-800 to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          {language === 'es' ? 'Grados Académicos y Certificaciones' : 'Academic Degrees and Certifications'}
        </motion.h2>

        <div className="flex justify-center mb-24 space-x-4">
          <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
            {language === 'es' ? 'Todos' : 'All'}
          </FilterButton>
          <FilterButton active={filter === 'degree'} onClick={() => setFilter('degree')}>
            {language === 'es' ? 'Grados' : 'Degrees'}
          </FilterButton>
          <FilterButton active={filter === 'course'} onClick={() => setFilter('course')}>
            {language === 'es' ? 'Cursos' : 'Courses'}
          </FilterButton>
          <FilterButton active={filter === 'certification'} onClick={() => setFilter('certification')}>
            {language === 'es' ? 'Certificaciones' : 'Certifications'}
          </FilterButton>
        </div>

        <motion.div 
          layout
          className="w-[84%] mx-auto flex justify-between flex-wrap gap-6"
        >
          {filteredItems.map((item, index) => (
            <AcademicCard key={item.title} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const AcademicCard = ({ item, index }: { item: AcademicItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      layout
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur group-hover:blur-md transition-all duration-300"></div>
      <div className="w-[380px] h-[270px] relative px-6 mb-12 backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex flex-col items-center text-center">
          <div className="h-36 mb-4 relative bg-white rounded-lg -mt-12 flex justify-center items-center">
            {/* <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div> */}
            <div className="absolute inset-0 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
            <img
              src={item.logo} 
              alt={item.institution}
              className="relative w-[280px] object-contain rounded-lg px-6 py-2"
            />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-blue-200/80 mb-2">{item.institution}</p>
          <p className="text-blue-100/60 text-sm">{item.year}</p>
          
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.type === 'degree' && <LuGraduationCap className="w-6 h-6 text-blue-300" />}
            {item.type === 'course' && <LuAward className="w-6 h-6 text-green-300" />}
            {item.type === 'certification' && <LuBadgeCheck className="w-6 h-6 text-purple-300" />}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const FilterButton = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className={`
      px-4 py-2 rounded-full transition-all duration-300
      ${active 
        ? 'bg-white/20 text-white shadow-lg backdrop-blur-md hover:bg-white/30' 
        : 'bg-transparent text-white/60 hover:text-white hover:bg-white/10'}
    `}
  >
    {children}
  </button>
)

export default AcademicDegrees