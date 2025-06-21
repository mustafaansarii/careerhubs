export const defaultFormData = {
  profile: {
    name: '',
    email: '',
    phone: '',
    location: '',
    portfolio: ''
  },
  education: [],
  work: [],
  skills: [],
  projects: [],
  awards: []
};

export const generateLatexCode = (formData) => {
  return `\\documentclass[12pt]{moderncv}
\\begin{document}
\\section{Personal Information}
\\name{${formData.profile.name}}
\\address{${formData.profile.location}}
\\email{${formData.profile.email}}
\\phone{${formData.profile.phone}}
\\end{document}`;
}; 