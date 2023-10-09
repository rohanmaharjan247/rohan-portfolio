import { gql } from "@apollo/client";

const GET_PERSONAL_INFO = gql`
  query personalInfoEntryQuery {
    personalInfo(id: "3ZkUbDrkygOqV4ZX0pTwsP") {
      sys {
        id
      }
      # add the fields you want to query
      fullName
      jobTitle
      email
      address
      yearsOfExperience
      projectsCompleted
      slogan
      profileImage {
        title
        fileName
        url
      }
    }
  }
`;

const GET_ABOUT_ME = gql`
  query aboutMe {
    # add your query
    aboutMe(id: "iuYZHtsEh5df4A1Z4rP2Q") {
      sys {
        id
      }
      title
      description
    }
  }
`;

const GET_WORK_EXPERIENCE = gql`
  query workExperience {
    workExperience: workExperienceCollection(order: joinedDate_DESC) {
      items {
        sys {
          id
        }
        title
        company
        joinedDate
        endDate
        currentlyWorking
        experiences: experienceCollection {
          items {
            sys {
              id
            }
            description
          }
        }
      }
    }
  }
`;

const GET_EDUCATION_HISTORY = gql`
  query education {
    education: educationHistoryCollection(order: startedDate_DESC) {
      items {
        sys {
          id
        }
        collegeName
        universityName
        degree
        startedDate
        endDate
        currentlyStudying
      }
    }
  }
`;

const GET_MY_SERVICES = gql`
  query myServices {
    myServices: myServicesCollection {
      items {
        sys {
          id
        }
        title
        description
        iconName
      }
    }
  }
`;

const GET_SKILLS_SET = gql`
  query skillSet {
    mySkills: skillSetCollection {
      items {
        sys {
          id
        }
        title
        skills: skillsCollection {
          items {
            sys {
              id
            }
            name
            percentage
          }
        }
      }
    }
  }
`;

const GET_PORTFOLIO = gql`
  query portolio {
    portfolio: porfolioCollection {
      items {
        sys {
          id
        }
        title
        description
        projectUrl
        githubUrl
        image {
          title
          fileName
          url
        }
      }
    }
  }
`;

export {
  GET_PERSONAL_INFO,
  GET_ABOUT_ME,
  GET_WORK_EXPERIENCE,
  GET_EDUCATION_HISTORY,
  GET_MY_SERVICES,
  GET_SKILLS_SET,
  GET_PORTFOLIO,
};
