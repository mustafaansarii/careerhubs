export const defaultFormData = {
  profile: {
    name: '',
    address: '',
    email: '',
    phone: '',
    linkedin: '',
    github: ''
  },
  experience: [{
    company: '',
    position: '',
    location: '',
    startDate: '',
    endDate: '',
    responsibilities: ['']
  }],
  education: [{
    institution: '',
    location: '',
    degree: '',
    fieldOfStudy: '',
    gpa: '',
    gpaType: '',
    startDate: '',
    endDate: ''
  }],
  skills: [{
    category: '',
    details: ''
  }],
  projects: [{
    name: '',
    url: '',
    urlLabel: '',
    techStack: '',
    details: ['']
  }],
  achievements: [{
    details: ['']
  }]
};

export const generateLatexCode = (formData) => {
  const escapeLatex = (str) => (str || '').replace(/[#&%$]/g, '\\$&');

  return [
    '\\documentclass[11pt]{article}',
    '\\usepackage[utf8]{inputenc}',
    '\\usepackage{enumitem}',
    '\\usepackage{geometry}',
    '\\usepackage{hyperref}',
    '\\usepackage{svg}',
    '\\usepackage{fontawesome5}',
    '\\usepackage{xcolor}',
    '\\geometry{',
    '  a4paper,',
    '  top=0.4in,',
    '  bottom=0.75in,',
    '  left=0.5in,',
    '  right=0.5in',
    '}',
    '\\begin{document}',
    '\\pagestyle{empty}',
    '% Header',
    '\\begin{center}',
    `{\\Huge \\textbf{{${escapeLatex(formData.profile?.name)}}}} \\\\`,
    `\\small ${escapeLatex(formData.profile?.address)} \\\\`,
    '\\smallskip',
    `${formData.profile?.phone ? `\\faPhone~\\underline{\\href{tel:${escapeLatex(formData.profile.phone)}}{${escapeLatex(formData.profile.phone)}}} \\quad ` : ''}` +
    `${formData.profile?.email ? `\\faEnvelope~\\underline{\\href{mailto:${escapeLatex(formData.profile.email)}}{${escapeLatex(formData.profile.email)}}} \\quad ` : ''}` +
    `${formData.profile?.linkedin ? `\\faLinkedin~\\underline{\\href{https://www.linkedin.com/in/${escapeLatex(formData.profile.linkedin)}}{${escapeLatex(formData.profile.linkedin)}}} \\quad ` : ''}` +
    `${formData.profile?.github ? `\\faGithub~\\underline{\\href{https://github.com/${escapeLatex(formData.profile.github)}}{${escapeLatex(formData.profile.github)}}} ` : ''}`,
    '\\vspace{-0.4cm}',
    '\\end{center}',
    
    '\\section*{Education}\\vspace{-0.2cm}\\hrule\\vspace{0.2cm}',
    ...formData.education.map((edu, index, array) => [
      `\\textbf{${escapeLatex(edu.institution)}} \\hfill ${escapeLatex(edu.location)} \\\\`,
      `${escapeLatex(edu.degree)} in ${escapeLatex(edu.fieldOfStudy)} \\textbf{${escapeLatex(edu.gpaType || 'GPA')}: ${escapeLatex(edu.gpa)}}`,
      `\\hfill ${escapeLatex(edu.startDate)} -- ${escapeLatex(edu.endDate)}`,
      array.length > 1 ? '\\vspace{0.2cm}' : '' ,
      array.length > 1 && index < array.length - 1 ? '\\\\' : ''
    ].filter(Boolean).join('\n')),

    ...(formData.experience?.length > 0 ? [
      '\\vspace{-.5cm}',
      '\\section*{Professional Experience}\\vspace{-0.2cm}\\hrule\\vspace{0.2cm}',
      ...formData.experience.map(exp => [
        `\\textbf{${escapeLatex(exp?.company)}} \\hfill ${escapeLatex(exp?.location)} \\\\`,
        `\\textit{${escapeLatex(exp?.title)}} \\hfill ${escapeLatex(exp?.startDate)} -- ${escapeLatex(exp?.endDate)}`,
        '\\begin{itemize}[noitemsep, leftmargin=*, topsep=2pt]',
        ...(exp?.responsibilities || []).map(resp => `  \\item ${escapeLatex(resp)}`),
        '\\end{itemize}'
      ].join('\n'))
    ] : []),
    
    '\\vspace{-.5cm}',
    '\\section*{Skills}\\vspace{-0.2cm}\\hrule\\vspace{0.2cm}',
    ...formData.skills.map(skill => 
      `\\textbf{${escapeLatex(skill.category)}}: ${skill.details.split(',')
          .map(s => escapeLatex(s.trim()))
          .join(', ')} \\\\`
    ),

    '\\vspace{-.9cm}',
    '\\section*{Projects}\\vspace{-0.2cm}\\hrule\\vspace{0.2cm}',
    ...formData.projects.map((proj, index, array) => [
      `\\textbf{${escapeLatex(proj.name)}} $|$ {${escapeLatex(proj.techStack)}} ` +
       `\\hfill \\href{${escapeLatex(proj.url)}}{\\textcolor{blue}{${escapeLatex(proj.urlLabel)}}} \\\\`,
     '\\vspace{-.5cm}',
      '\\begin{itemize}[noitemsep, leftmargin=*, topsep=2pt]',
      ...proj.details.map(detail => `  \\item ${escapeLatex(detail)}`),
      '\\end{itemize}',
      index < array.length - 1 ? '\\vspace{5pt}' : ''
    ].join('\n')),
    
    '\\vspace{-.6cm}',
    '\\section*{Achievements}\\vspace{-0.1cm}\\hrule\\vspace{0.2cm}',
    '\\begin{itemize}[noitemsep, leftmargin=*, topsep=2pt]',
    ...formData.achievements.flatMap(ach => 
      ach.details.map(detail => `  \\item ${escapeLatex(detail)}`)
    ),
    '\\end{itemize}',
    
    '\\end{document}'
  ].join('\n');
};