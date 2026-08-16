import * as publicData from './portfolioData.public';

const localModules = import.meta.glob('./portfolioData.local.js', { eager: true });
const localData = Object.values(localModules)[0] || {};
const data = { ...publicData, ...localData };

export const personalInfo = data.personalInfo || publicData.personalInfo;
export const contactSubject = data.contactSubject || publicData.contactSubject;
export const gmailComposeUrl =
  data.gmailComposeUrl ||
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email || '')}&su=${encodeURIComponent(contactSubject || '')}`;
export const heroPrefix = data.heroPrefix || publicData.heroPrefix;
export const heroPhrases = data.heroPhrases || publicData.heroPhrases;
export const summary = data.summary || publicData.summary;
export const aboutBio = data.aboutBio || publicData.aboutBio;
export const principles = data.principles || publicData.principles;
export const experiences = data.experiences || publicData.experiences;
export const impactStats = data.impactStats || publicData.impactStats;
export const stackYamlCode = data.stackYamlCode || publicData.stackYamlCode;
export const stackCards = data.stackCards || publicData.stackCards;
export const projects = data.projects || publicData.projects;
export const education = data.education || publicData.education;
export const spokenLanguages = data.spokenLanguages || publicData.spokenLanguages;
export const skillCategories = data.skillCategories || publicData.skillCategories;
