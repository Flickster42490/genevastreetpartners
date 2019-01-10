var express = require("express");
var router = express.Router();

var bios = {
  Lowinger: {
    name: "Michael Lowinger",
    title: "President / CEO",
    linkedin: "https://www.linkedin.com/in/michaellowinger/",
    email: "mailto:",
    phone: "(888) 888-8888",
    picture: "lowinger.jpg",
    id: "lowinger",
    bio:
      "<p>Mr. Yarmolinsky joined Hanover as its President and Chief Executive Officer in 2017.  In this role he has oversight responsibility for all operating activities of the company.   Mr. Yarmolinsky previously served as the Executive Vice President and Chief Financial Officer of Marcus Millichap Company, Hanover’s parent company.  He has been with Marcus and Millichap since 2005 and was responsible for overseeing the entire finance function of MMC, including real estate finance, accounting, taxation and treasury. Since 2010, Mr. Yarmolinsky also served on MMC’s Board of Directors and Investment Committee.</p><p>Prior to joining Marcus and Millichap Company, Mr. Yarmolinsky worked in public accounting at Burr, Pilger and Mayer, where he began his career in 1999.  Mr. Yarmolinsky received Bachelor’s degree from the University of San Francisco and also holds a Master of Science from Golden Gate University.  Mr. Yarmolinsky is a Certified Public Accountant (inactive) and a full member of ULI.</p> "
  },
  Macedo: {
    name: "Mark Macedo",
    title: "CIO",
    linkedin: "https://www.linkedin.com/in/mark-macedo-45788073/",
    email: "mailto:mmacedo@hanoverfinancialllc.com",
    phone: "(424) 653-2522",
    picture: "macedo.jpg",
    bio:
      "<p>Mr. Macedo was a founding partner of the Company when originally formed in 1999. Mr. Macedo is responsible for identifying investment opportunities and managing Company operations which include strategic planning, deal sourcing, structuring and negotiations, as well as overseeing due diligence and asset management operations. Macedo was previously with Ares Management/Wrightwood. Prior to his work at Wrightwood Capital, Macedo was COO and a founding partner of Hanover Financial Company, a fund management firm founded in 1999. Hanover was acquired by Wrightwood Capital in 2008, at which time the committed institutional funds were included in the acquisition. From 1992 through 1999, Macedo held the position of West Coast Director of commercial loan originations for Heller Real Estate Financial Services, a division of Heller Financial Incorporated. Originations included commercial debt and equity product types such as floating rate non-participating mortgage debt, participating mortgage debt, participating mezzanine ('equity') debt and permanent ('conduit') debt. Macedo is an active member of ULI, ICSC, and MBA.</p><p>Mr. Macedo holds a Bachelor of Arts in Marketing and a Masters in Finance from Loyola Marymount University.</p>"
  },
  Davidson: {
    name: "Mark Davidson",
    title: "Asset Management Director",
    linkedin: "https://www.linkedin.com/in/markdavidson928/",
    email: "mailto:mdavidson@hanoverfinancialllc.com",
    phone: "(424) 653-2523",
    picture: "davidson.jpg",
    bio:
      "<p>Mr. Davidson is a Director of Asset Management at Hanover Financial, LLC. He works with joint venture operating partners to develop and to implement asset management plans. This includes overseeing closings, monitoring developments, budgeting, and participating in dispositions. Prior to joining Hanover in 2015, Mr. Davidson spent the previous eight years at GE Real Estate evaluating and recommending new debt deals, performing real estate valuations, and underwriting West Coast suburban office acquisitions. Prior to GE Real Estate, he worked in institutional real estate consulting at the Townsend Group and in public accounting with Arthur Andersen.</p> <p>Mr. Davidson holds a Bachelor of Arts in Economics from UCLA and a Masters in Business Administration from Duke University’s Fuqua School of Business. Mr. Davidson is a Chartered Financial Analyst and a Certified Public Accountant. Davidson holds a California real estate broker’s license. </p>"
  },
  White: {
    name: "David White",
    title: "Multifamily Sr. Director (Northern California/Seattle/Portland)",
    linkedin: "https://www.linkedin.com/in/david-white-a3593b11/",
    email: "mailto:dwhite@hanoverfinancialllc.com",
    phone: "(415) 519-3434",
    picture: "white.jpg",
    bio:
      "<p>Mr. White serves as Senior Director at Hanover Financial, LLC overseeing the firm’s investment activities in the Bay Area and Pacific Northwest.   Prior to joining Hanover, he served as an Executive Director at PGIM Real Estate responsible for west coast acquisition activities on behalf of PGIM’s open-ended fund series.   Mr. White began his career at KPMG LLP.</p><p>Mr. White holds an MBA from UC Berkeley Haas School of Business and BS degrees in Accounting & Finance from Indiana University’s Kelly School of Business.   Mr. White is a Certified Public Accountant (inactive) and a member of ULI.</p>"
  },
  Chesnie: {
    name: "Nate Chesnie",
    title: "Multifamily Director (Orange County/San Diego)",
    linkedin: "https://www.linkedin.com/in/nathan-chesnie-965a14a/",
    email: "mailto:nchesnie@hanoverfinancialllc.com",
    phone: "(949) 307-6212",
    picture: "chesnie.jpg",
    bio:
      "<p>Mr. Chesnie serves as a Director Acquisitions at Hanover Financial, LLC. He is responsible for identifying and evaluating joint venture equity opportunities for value-add and development multifamily projects in Orange and San Diego Counties. Mr. Chesnie previously spent three years with TMC America originating, structuring, and managing equity investments for single family, multifamily, retail, industrial, and land entitlement transactions. Prior to TMC America, Mr. Chesnie worked at Sabal Financial Group where he acquired and managed distressed commercial real estate across the United States. </p><p>Mr. Chesnie holds a Bachelor of Arts in Finance, with a minor in Real Estate Development and Finance, from The University of Southern California. </p>"
  },
  Baraghoush: {
    name: "Ash Baraghoush",
    title: "Multifamily Director (Los Angeles)",
    linkedin: "https://www.linkedin.com/in/ash-baraghoush-70b49142/",
    email: "mailto:abaraghoush@hanoverfinancialllc.com",
    phone: "(424) 653-2524",
    picture: "baraghoush.jpg",
    bio:
      "<p>Mr. Baraghoush serves as a Director Acquisitions at Hanover Financial, LLC. He is responsible for identifying and evaluating joint venture equity opportunities for value-add and development multifamily projects. Mr. Baraghoush previously spent four years with Ares Management originating and structuring senior mortgages, mezzanine, preferred equity and common equity for multifamily real estate transactions. Prior to Ares, Mr. Baraghoush worked at QVT Mount Auburn Capital and at Hanover Financial Company. Mr. Baraghoush began his career at Bank of America in its Global Corporate Investment Banking division.</p> <p>Mr. Baraghoush holds a Bachelor of Arts in Economics, with a minor in Accounting, from UCLA. </p>"
  },
  Rodiles: {
    name: "John Rodiles",
    title: "NNN Sr. Director",
    linkedin: "https://www.linkedin.com/in/john-rodiles-8156166/",
    email: "mailto:jrodiles@hanoverfinancialllc.com",
    phone: "(424) 653-2527",
    picture: "rodiles.jpg",
    bio:
      "<p>Mr. Rodiles serves as the Senior Director of NNN Investments at Hanover Financial, LLC. He is responsible for identifying joint venture equity opportunities for net leased development and value-add projects throughout the country. In his career, Mr. Rodiles has overseen transactions totaling more than $4 billion in volume as an advisor to institutions, public REITs, and merchant developers in financing and sales disposition capacities. </p><p>Mr. Rodiles previously worked as a senior executive at A10 Capital, a direct lender, where he was responsible in leading the organization’s top grossing Western region. Previous to A10 Capital, he was a senior executive at Marcus & Millichap where he managed in several offices, hundreds of salespeople, and cultivated the top grossing lending office. Mr. Rodiles’ career began in corporate lending at Banc One Leasing Corporation. </p><p>He was responsible for several offices, hundreds of salespeople, and cultivated the top grossing lending office at Marcus & Millichap and top grossing region at A10 Capital. As Vice President of Investments, John focused on the financing and sale of net leased assets. In his time with the above lending institutions he specialized in asset-based lending where he funded various debt and lease structures with companies throughout the Unites States. </p><p>Mr. Rodiles holds a Bachelor of Science in Finance from California State University Long Beach. He is a licensed real estate broker in California and Oregon and an active member of the International Council of Shopping Centers. Outside of work, John enjoys traveling internationally, dedicating time to organizations in his community, and spending time with his wife, Elizabeth, and their three children, Dean, Giuliana, and Marc. </p>"
  },
  Tevrizian: {
    name: "Drew Tevrizian",
    title: "NNN Director",
    linkedin: "https://www.linkedin.com/in/drew-tevrizian-cfa-cpa-a07402a/",
    email: "mailto:dtevrizian@hanoverfinancialllc.com",
    phone: "(424) 653-2521",
    picture: "tevrizian.jpg",
    bio:
      "<p>Mr. Tevrizian serves as a Vice President at Hanover Financial, LLC. He is responsible for identifying and evaluating joint venture equity opportunities for net lease projects. Mr. Tevrizian previously worked in JLL’s Capital Markets division underwriting multifamily projects in the West Coast. He began his career in public accounting with PwC. </p> <p>Mr. Tevrizian holds a Bachelor of Arts in Psychology from the University of Michigan. Mr. Tevrizian is a Chartered Financial Analyst and a Certified Public Accountant. </p>"
  },
  Samaha: {
    name: "Josh Samaha",
    title: "Investment Associate",
    linkedin: "https://www.linkedin.com/in/josh-samaha-89a3741a/",
    email: "mailto:jsamaha@hanoverfinancialllc.com",
    phone: "(650) 842-2215",
    picture: "samaha.jpg",
    bio:
      "<p>Mr. Samaha is an Associate at Hanover Financial, LLC. He is responsible for working with Hanover’s acquisition team in identifying and underwriting new multifamily investment opportunities. Prior to joining Hanover, Mr. Samaha spent four years at The Concord Group consulting on multifamily development projects in the West Coast. </p> <p>Mr. Samaha holds a Bachelor of Arts in Economics from UCLA. </p>"
  },
  Peterson: {
    name: "John Paul Peterson",
    title: "Multifamily Director (Northern California/Seattle/Portland)",
    linkedin: "https://www.linkedin.com/in/johnpaulpeterson/",
    email: "mailto:jpeterson@hanoverfinancialllc.com",
    phone: "(650) 842-2231",
    picture: "peterson.jpg",
    bio:
      "<p>Mr. Peterson serves as a Director at Hanover Financial, LLC.  He is responsible for identifying and evaluating co-investment partnership opportunities with multi-family development sponsors and evaluating investment opportunities.  Mr. Peterson previously spent ten years as a management/engineering consultant leading a team in the design, financial modeling and performance management of commercial, residential and institutional real estate assets throughout the United States and Mainland China.</p><p>Mr. Peterson holds a Bachelor of Science in Mechanical Engineering from Messiah University and a Master of Business Administration from University of California, Berkeley, Haas School of Business.</p>"
  },
  SaintJohn: {
    name: "Vinnie Saint John",
    title: "Investment Associate",
    linkedin: "https://www.linkedin.com/in/vinnie-saint-john-3a2129a3/",
    email: "mailto:mailto:vsaintjohn@hanoverfinancialllc.com",
    phone: "(424) 653-2526",
    picture: "saintJohn.jpg",
    bio:
      "<p>Mr. Saint John is an Investment Associate at Hanover Financial, LLC. He is responsible for working with Hanover’s acquisition team in identifying and underwriting new investment opportunities as well as working with Hanover’s asset management team. Prior to joining Hanover, Mr. Saint John spent three years in public accounting at PwC within their real estate practice. Before PwC, Mr. Saint John played professional baseball within the Los Angeles Angels of Anaheim minor league organization.</p><p>Mr. Saint John holds a Bachelor of Science in Business Administration and a Master of Accounting from USC. Mr. Saint John is a Certified Public Accountant.</p>"
  },
  Alcaine: {
    name: "Alex Alcaine",
    title: "Investment Associate",
    linkedin: "https://www.linkedin.com/in/alex-alcaine/",
    email: "mailto:mailto:aalcaine@hanoverfinancialllc.com",
    phone: "(650) 842-2229",
    picture: "alcaine.jpg",
    bio:
      "<p>Mr. Alcaine is an analyst at Hanover Financial, LLC. He is responsible for working with Hanover’s acquisition team in underwriting new multifamily investment opportunities. Prior to joining Hanover, Mr. Alcaine was a financial analyst with CBRE, specializing in the disposition of multifamily assets throughout the Sacramento and Central Valley regions. </p><p>Mr. Alcaine holds a Bachelor of Science in Finance from the University of Kansas. </p>"
  }
};

var biosArray = [
  [
    {
      name: "Michael Lowinger",
      title: "Managing Partner",
      linkedin: "https://www.linkedin.com/in/michaellowinger/",
      email: "mailto:",
      phone: "(888) 888-8888",
      picture: "lowinger.jpg",
      id: "lowinger",
      bio:
        "As Managing Partner and co-founder of both Geneva Street Partners and Geneva Street Capital Partners, Lowinger is responsible for the strategic direction of Geneva and its affiliates, including acquisitions, investment decisions, investor relationships, and operating policy. <br/><br/> Prior to and then simultaneous with the formation of Geneva, Lowinger was Managing Director of Hanover Financial, LLC for 19 years, where he identified and oversaw all investments, partner and investor relationships, and asset management. Before Hanover, Lowinger was Executive Vice President - Western Regional Director for Heller Financial, an affiliate of Fuji Bank of Japan (Heller was acquired by G.E. Capital in 2001) that provided bridge debt, mezzanine, and preferred equity capital, as well as joint venture equity. <br/><br/> Lowinger is a Los Angeles area native. He has a Bachelor’s of Arts in Real Estate Finance from San Diego State University and a Master’s of Business Administration from Pepperdine University. He serves as a member of the Real Estate Principals Organization of the Jewish Federation of Greater Los Angeles, and the Real Estate Division of National Jewish Fund. Lowinger and his wife of 34 years, Cynthia, have five children and two toddler grandchildren, and divide their time between homes in Los Angeles and Denver, Colorado."
    },
    {
      name: "Mark Macedo",
      title: "Managing Partner",
      linkedin: "https://www.linkedin.com/in/mark-macedo-45788073/",
      email: "mailto:mmacedo@hanoverfinancialllc.com",
      phone: "(888) 888-8888",
      picture: "macedo.jpg",
      id: "macedo",
      bio:
        "As Managing Partner and co-founder of both Geneva Street Partners and Geneva Street Capital Partners, Macedo oversees credit decisions, underwriting, investment policy, asset management, capital relationships, accounting and investor communications. <br/><br/>For 19 years prior to and then simultaneous with the formation of Geneva, Macedo was Managing Director-Chief Investment Officer of Hanover Financial, LLC where he oversaw all investment, underwriting and credit decisions. Macedo is an adjunct professor and chairperson of the Real Estate Advisory Council of Loyola Marymount University, where he teaches real estate development, real estate financial analysis, and real estate negotiation. Prior to Hanover, Macedo was Regional Director of Asset Management for the Western United States for Heller Financial, where he oversaw a portfolio of over $1 billion. Prior to Heller Macedo was a real estate consultant with Robert Charles Lesser and Company where he performed strategic, financial, and market analyses for over 100 consulting assignments throughout the United States covering all real estate uses, including commercial office and industrial, large scale single- and multifamily residential, regional and community serving retail, and urban mixed-use projects.    <br/><br/>Macedo holds a Bachelor’s of Arts and a Master’s of Business Administration in Finance from Loyola Marymount University. Macedo is an accomplished musician and composer, and oversees the non-profit CitySound, which performs throughout California, and has released a successful CD, Second Chance. Macedo and his wife Shannon are both Los Angeles natives, residing in the Westchester area of Los Angeles with their two children in their early twenties. "
    },
    {
      name: "Jose Sanchez",
      title: "Managing Partner",
      linkedin: "https://www.linkedin.com",
      email: "mailto:",
      phone: "(888) 888-8888",
      picture: "placeholder_person.png",
      id: "sanchez",
      bio:
        "As Managing Partner and co-founder of Geneva Street Capital Partners, Sanchez oversees this affiliate entity and staff, and is responsible for identifying, evaluating, and closing mezzanine and preferred equity investment opportunities.  He additionally works together with the team in establishing and managing investor/capital market relationships. <br/><br/>Prior to co-founding Geneva Street Capital Partners, Sanchez was Los Angeles Regional Director of Hanover Financial, LLC responsible for identifying and closing private equity and joint venture relationships for value-add and development multifamily, office and industrial projects. Sanchez previously spent four year with Ares Management, originating and structuring senior mortgages, mezzanine, preferred equity and common equity for multifamily real estate transactions. Prior to Ares, Sanchez worked at QVT Mount Auburn Capital and at Bank of America in its Global Corporate Investment Banking Division. <br/><br/>Sanchez holds a Bachelor of Arts in Economics, with a minor in Accounting, from UCLA. He is the co-founder of the Real Estate Division of the San Francisco Bay Area Make-A-Wish Foundation, as well as serves on the board of the Ziman Center for Real Estate at UCLA. Sanchez is an Accomplished coach of his son’s basketball team which currently has a record of 27-0. A native of the San Francisco Bay Area, Sanchez and his wife Maria have three children and reside in Santa Monica."
    }
  ],
  [
    {
      name: "Samuel Landman",
      title: "Director of Capital Markets and Investor Relations",
      linkedin: "https://www.linkedin.com/in/",
      email: "mailto:",
      phone: "(888) 888-8888",
      picture: "placeholder_person.png",
      id: "landman",
      bio:
        "Landman is Director of Capital Markets and Investor Relations, in which capacity he is responsible for identifying and establishing new, and overseeing existing relationships, as well as capitalizing all developments and acquisitions. <br/><br/> Prior to joining Geneva Landman held a similar position with Universe Holdings, and before that he worked in New York, Europe and Israel as a real estate broker. Landman was born and raised in Antwerp Belgium, speaks six languages fluently, and is a graduate of Jerusalem College of Technology. "
    },
    {
      name: "Beatriz Babuch",
      title: "Director of Property Management and Renovations",
      linkedin: "https://www.linkedin.com/in/",
      email: "mailto:",
      phone: "(888) 888-8888",
      picture: "placeholder_person.png",
      id: "babuch",
      bio:
        "Babuch is Director of Property Management and Renovations, overseeing the portfolio and all asset improvements.  <br/><br/>Babuch is a graduate of the University of Sao Paulo. Prior to entering the real estate field Babuch worked in finance in Brazil and Europe. <br/><br/>Born in Spain and raised in Brazil, Babuch is tri-lingual and the proud single parent of a teenage son who is a college student."
    }
  ]
];
var developments = [
  {
    name: "Geneva @ Hughes",
    location: "Los Angeles (Palms), California ",
    type: "27 Unit Apartment Development ",
    description:
      "Geneva assembled a 16,000 square foot parcel located in the Palms area of Los Angeles, within one block of the new Exposition Light Rail Station and within a three mile radius of downtown Culver City, UCLA, Century City and Beverly Hills.  The project was successfully developed and completed. ",
    image: "geneva_hughes.png",
    id: "geneva_hughes"
  },
  {
    name: "Geneva @ Hughes North",
    location: "Los Angeles (Palms), California",
    type: "50 Unit Apartment Development",
    description:
      "Geneva is in the process of finalizing an assemblage to develop this project, which is one half block from the Palms Expo Light Rail Station. Additionally the site is within a three mile radius of a number of key employers including Sony Studios, Amazon Studios, 20th Century Fox Studios, Culver Studios, Southern California Hospital and UCLA.",
    image: "geneva_hughesNorth.png",
    id: "geneva_hughesNorth"
  },
  {
    name: "Geneva @ Pacific",
    location: "Los Angeles (Mar Vista), California",
    type: "18 Unit Apartment Development",
    description:
      "Geneva is in the process of developing this project, which is within a three mile radius of Venice Beach, Playa Vista, Marina del Rey, UCLA, downtown Santa Monica, and Culver City. Major employers in the immediate area include Google, Yahoo, Hulu, Amazon Studios, Sony Studios, Fandango, YouTube, Univision, Netflix, Loyola Marymount University and UCLA.",
    image: "geneva_pacific.png",
    id: "geneva_pacific"
  },
  {
    name: "Geneva @ Venice",
    location: "Culver City, California ",
    type: "120 Room Hotel Development ",
    description:
      "Geneva assembled this parcel located adjacent to downtown Culver City and within blocks of Sony Studios, Amazon Studios, Home Box Office’s corporate headquarters, and Ivy Exposition Station, and across the street from Southern California Hospital. The site was acquired in 2018 with construction to commence in 2019.",
    image: "geneva_venice.png",
    id: "geneva_venice"
  },
  {
    name: "Micropolitan at Miracle Mile",
    location: "Los Angeles (Miracle Mile), California",
    type: "45 Unit Apartment Development",
    description:
      "Development of an apartment project within one block of the new Fairfax at Wilshire Subway Station, the Los Angeles County Museum of Art, and the Peterson Automotive Museum. Major employers and amenities within a two mile radius include Cedars Sinai Medical Center, Variety Entertainment Daily, CBS Studios, Farmer’s Market and The Grove. This project was completed and sold.",
    image: "micropolitan_miracle.png",
    id: "micropolitan_miracle"
  },
  {
    name: "Micropolitan at Larchmont Village",
    location: "Los Angeles (Larchmont), California",
    type: "34 Unit Apartment Development",
    description:
      "Development of an apartment project within walking distance of Larchmont Village’s shops and restaurants, Hancock Park, and Paramount Studios. This project is completed.",
    image: "micropolitan_larchmont.png",
    id: "micropolitan_larchmont"
  },
  {
    name: "The Garden",
    location: "Santa Monica, California",
    type: "144 Unit Apartment Development",
    description:
      "Three 48 Unit Apartment Buildings located within a three block radius of one another, in downtown Santa Monica. These projects were completed and sold.",
    image: "garden.png",
    id: "garden"
  },
  {
    name: "Vues on Gordon",
    location: "Los Angeles (Hollywood), California",
    type: "47 Unit Apartment Development",
    description:
      "Development of a Class A apartment project in the thriving Hollywood area of Los Angeles. The project is located within a few blocks of Netflix’s new corporate headquarters and Sunset Gower Studios, as well as Emerson College’s Los Angeles campus. The project is completed.",
    image: "vues_gordon.png",
    id: "vues_gordon"
  },
  {
    name: "The Mercury",
    location: "Los Angeles (Koreatown), California",
    type: "238 Unit Apartment Development",
    description:
      "Located at the bustling intersection of Western and Wilshire Boulevards in the heart of Koreatown directly across the street from the Subway Station, this project was the successful conversation of an office building to apartments and retail. ",
    image: "mercury.png",
    id: "mercury"
  },
  {
    name: "Sandstone ",
    location: "Bellevue, Washington",
    type: "78 Unit Apartment Development",
    description:
      "The project is located in thriving downtown Bellevue across the street from the Civic Auditorium and within walking distance of major employers and retail amenities. This project was completed and sold.",
    image: "sandstone.png",
    id: "sandstone"
  },
  {
    name: "Montage",
    location: "Palo Alto, California",
    type: "46 Unit Apartment Development",
    description:
      "This project is located in the heart of the Silicon Valley, within walking distance of shopping and restaurants; with major employers in the area including Stanford University and Medical Center, Hewlett Packard Enterprise, SAP, Apple, Google and Facebook.",
    image: "montage.png",
    id: "montage"
  },
  {
    name: "Starbucks",
    location:
      "San Diego (La Mesa) and Los Angeles (Norwalk), California, and Riverside, California",
    type: "Net Lease Development",
    description:
      "Development of two free standing NNN credit tenant projects, each with drive thru service provided. These projects were completed and sold.",
    image: "starbucks.png",
    id: "starbucks"
  },
  {
    name: "ALDI ",
    location: "Los Angeles (Arcadia), California",
    type: "Net Lease Development",
    description:
      "Development of a free standing discount grocery NNN credit tenant (affiliate of Trader Joe’s). This project was completed and sold.",
    image: "aldi.png",
    id: "aldi"
  },
  {
    name: "Smart & Final ",
    location: "Sacramento, California ",
    type: "Net Lease Development",
    description:
      "Development of a free standing discount grocery publicly traded NNN credit tenant. This project was completed and sold.",
    image: "smartandfinal.png",
    id: "smartandfinal"
  },
  {
    name: "24 Hour Fitness",
    location: "Riverside, California",
    type: "Net Lease Development",
    description:
      "Development of an approximate 50,000 square foot NNN credit tenant free standing fitness center. This project was completed and sold.",
    image: "24hourfitness.png",
    id: "24hourfitness"
  },
  {
    name: "Safelite Auto Glass",
    location: "Boulder, Colorado",
    type: "Net Lease Development",
    description:
      "Acquisition and reposition; the tenant is the largest provider of auto glass repair in the United States.",
    image: "safelite.png",
    id: "safelite"
  }
];
var repositioning = [
  {
    name: "CATO ",
    location: "Torrance, California",
    type: "70 Unit Apartment Acquisition/Repositioning",
    description:
      "Repositioning of a rent-controlled project: through renovation and re-tenanting increased NOI by 40%. ",
    image: "cato.png",
    id: "cato"
  },

  {
    name: "Capes at Ventura",
    location: "Ventura, California",
    type: "400 Unit Apartment Acquisition/Reposition",
    description:
      "Through a joint venture, acquired the asset with the business plan to reposition and sell. Structured with mezzanine and an Agency loan. The project is located in the heart of Ventura across the street from the City and County Government Center and retail district. Capes at Ventura provides an affordable alternative to residents working in the Santa Barbara area, as well as commuters into Los Angeles. The renovation and re-tenanting is currently in process.",
    image: "capes.png",
    id: "capes"
  },

  {
    name: "Mansfield ",
    location: "Los Angeles (Hollywood), California",
    type: "68 Unit Apartment Acquisition/Reposition ",
    description:
      "Asset was acquired via a joint venture to reposition and sell. Since acquisition, the property has been renovated with upgraded kitchens and bathrooms, as well as the exterior and common areas. The Hollywood area of Los Angeles is experiencing an extensive renaissance and this asset provides an attractive economic alternative over new projects for residents. ",
    image: "mansfield.png",
    id: "mansfield"
  },

  {
    name: "Century Place",
    location: "Los Angeles (Norwalk), California",
    type: "306 Unit Apartment Acquisition/Reposition",
    description:
      "Asset was acquired through a joint venture based upon the strategy to reposition this asset which provides good quality work force housing. This asset was renovated and sold.",
    image: "century_place.png",
    id: "century_place"
  },

  {
    name: "Basque Manor",
    location: "Fullerton, California",
    type: "88 Unit Apartment Acquisition/Reposition",
    description:
      "Acquired with a partner via a joint venture, the renovated project provides much needed work force housing in this market. This asset was renovated and sold. ",
    image: "basque_manor.png",
    id: "basque_manor"
  },

  {
    name: "PACU",
    location: "Los Angeles (Palms), California",
    type: "16 Unit Apartment Renovation/Reposition",
    description:
      "1960 developed project modernly upgraded to reflect the improvements in the gentrifying submarket. Within walking distance of Expo Light Rail Station, Sony and Amazon Studios, Southern California Hospital, the Kirk Douglas Theater, and Trader Joe’s and Sprouts Markets. ",
    image: "pacu.png",
    id: "pacu"
  },
  {
    name: "Azul/Gramercy",
    location: "Anaheim, California",
    type: "216 Unit Apartment Acquisition/Reposition ",
    description:
      "Two projects located within one mile of one another, consisting of 100 and 116 units respectively. Assets were successfully renovated and re-tenanted, and the properties were sold separately.",
    image: "azul_gramercy.png",
    id: "azul_gramercy"
  },

  {
    name: "Lakewood Manor",
    location: "Los Angeles (Lakewood), California",
    type: "661 Unit Apartment Acquisition/Reposition",
    description:
      "Asset was acquired through a joint venture in order to reposition this asset in order to provide good quality work force housing. This asset was renovated and sold. ",
    image: "lakewood_manor.png",
    id: "lakewood_manor"
  },

  {
    name: "Rancho Azul",
    location: "San Diego (Spring Valley), California",
    type: "74 Unit Apartment Acquisition/Reposition",
    description:
      "Asset was acquired through a joint venture with the business plan to re-tenant and upgrade in order to provide an unserviced niche in the market of modernized work force housing. This asset was successfully sold.",
    image: "rancho_azul.png",
    id: "rancho_azul"
  },

  {
    name: "The Bloc",
    location: "Anaheim, California",
    type: "84 Unit Apartment Acquisition/Reposition",
    description:
      "Separately parceled 1950’s constructed project, repositioned to contemporary work force housing located blocks from Disneyland and the hotels and restaurants surrounding the theme park.",
    image: "bloc.png",
    id: "bloc"
  },

  {
    name: "Maggie",
    location: "Seattle, Washington",
    type: "59 Unit Apartment Acquisition/Reposition ",
    description:
      "Acquired with a partner to reposition and re-tenant, as well as take advantage of excess land to build additional units. ",
    image: "maggie.png",
    id: "maggie"
  },

  {
    name: "Fairway Glen",
    location: "San Jose, California",
    type: "144 Unit Apartment Acquisition/Reposition",
    description:
      "Fairway Glen was an acquisition to reposition and upgrade a 1970’s apartment project, to compete with new product at more attractive prices. This asset was renovated and sold. ",
    image: "fairway_glen.png",
    id: "fairway_glen"
  }
];
var mezzanine = [
  {
    name: "Sherman Plaza",
    location: "Los Angeles (Sherman Oaks), California",
    type: "270,000 Square Foot Office Building Acquisition",
    description:
      "Facilitated the acquisition of a multi-tenant office building with a concentration of government tenants in various sectors.",
    image: "sherman_plaza.png",
    id: "sherman_plaza"
  },

  {
    name: "ICON Plaza ",
    location: "Los Angeles, California (University of Southern California)",
    type: "56 Unit/224 Bed Student Housing Development",
    description:
      "A mezzanine loan was provided to facilitate the development of a Class A private student housing project located directly across the street from the University of Southern California (USC), with ground floor retail including a Starbucks and Jimmy John’s Gourmet Sandwiches. ",
    image: "icon_plaza.png",
    id: "icon_plaza"
  },

  {
    name: "Aldea at Estrella Falls",
    location: "Phoenix (Goodyear), Arizona",
    type: "328 Unit Apartment Acquisition",
    description:
      "A mezzanine loan was provided to facilitate the acquisition of the project from the existing lender. ",
    image: "aldea.png",
    id: "aldea"
  },

  {
    name: "Alexan ",
    location: "Denver (Littleton), Colorado",
    type: "350 Unit Apartment Acquisition",
    description:
      "A mezzanine loan was provided to facilitate the acquisition of the project from the existing lender. ",
    image: "alexan.png",
    id: "alexan"
  },

  {
    name: "Domus on the Boulevard Apartments",
    location: "Mountain View, California ",
    type: "193 Unit Apartment Development ",
    description:
      "A mezzanine loan was provided to facilitate the development of the project.",
    image: "domus.png",
    id: "domus"
  },

  {
    name: "Brio",
    location: "Walnut Creek, California",
    type: "300 Unit Luxury Apartment Development",
    description:
      "A mezzanine loan was provided to facilitate the development of the project.",
    image: "brio.png",
    id: "brio"
  },

  {
    name: "Loreto ",
    location: "Las Vegas, Nevada",
    type: "406 Unit Luxury Apartment Acquisition",
    description: "Bank distressed sale, acquired at a very attractive basis.",
    image: "loreto.png",
    id: "loreto"
  },

  {
    name: "Palacio",
    location: "Las Vegas, Nevada",
    type: "333 Unit Luxury Apartment Acquisition",
    description:
      "Bank distressed sale, acquired at a very attractive basis and sold.",
    image: "palacio.png",
    id: "palacio"
  },

  {
    name: "Winston Plaza",
    location: "Chicago (Melrose Park), Illinois ",
    type: "350,000 Square Foot Retail Center Refinance ",
    description:
      "Retail center anchored by Marshalls, LA Fitness, Best Buy, Office Max, Chick Fil-A, PNC Bank, IHOP, and Dunkin Donuts. Facilitated this refinance for capital improvements to the center and development of new pads.",
    image: "winston_plaza.png",
    id: "winston_plaza"
  }
];
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("home", { page: "home", headerTitle: "Relationship Based" });
});

router.get("/about", function(req, res, next) {
  res.render("our_company", {
    page: "about",
    headerTitle: "About Geneva Street Partners"
  });
});

router.get("/about/our_company", function(req, res, next) {
  res.render("our_company", {
    page: "about",
    headerTitle: "About Geneva Street Partners"
  });
});

router.get("/about/team", function(req, res, next) {
  res.render("team", {
    page: "team",
    headerTitle: "Our Leadership Team",
    bios: biosArray
  });
});

router.get("/about/our_approach", function(req, res, next) {
  res.render("our_approach", {
    page: "about",
    headerTitle: "Our Approach"
  });
});

router.get("/about/strategies", function(req, res, next) {
  res.render("strategies", {
    page: "about",
    headerTitle: "Investment Strategies"
  });
});

router.get("/projects", function(req, res, next) {
  res.render("developments", {
    page: "projects",
    headerTitle: "Developments",
    developments: developments
  });
});

router.get("/projects/developments", function(req, res, next) {
  res.render("developments", {
    page: "projects",
    headerTitle: "Developments",
    developments: developments
  });
});

router.get("/projects/repositioning", function(req, res, next) {
  res.render("repositioning", {
    page: "projects",
    headerTitle: "Repositioning",
    repositioning: repositioning
  });
});

router.get("/projects/mezzanine", function(req, res, next) {
  res.render("mezzanine", {
    page: "projects",
    headerTitle: "Mezzanine/Preferred Equity Investments",
    mezzanine: mezzanine
  });
});

router.get("/contact", function(req, res, next) {
  res.render("contact", { page: "contact", headerTitle: "Contact Us" });
});

router.get("/home", function(req, res, next) {
  res.render("home", { page: "home", headerTitle: "Relationship Based" });
});

router.get("/login", function(req, res, next) {
  res.render("login");
});

router.get("/strategies", function(req, res, next) {
  res.render("strategies", {
    page: "strategies",
    headerTitle: "Our Strategies"
  });
});

router.get("/team/:name", function(req, res, next) {
  var name = req.params.name;
  var person = bios[name];
  res.render("teamMember", { name: name, person: person, page: "team" });
});

router.get("/careers", function(req, res, next) {
  res.render("careers", { page: "careers", headerTitle: "Careers" });
});

router.get("*", function(req, res, next) {
  res.redirect("/");
});

module.exports = router;
