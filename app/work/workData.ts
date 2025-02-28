export const workData = [
  {
    year: 2025,
    title: "Coldplay",
    role: "PA Tech", // ✅ Short role description (visible on card)
    info: "I was engaged to support 3dB in securing their role as a vendor for Coldplay’s performance at Abu Dhabi Stadium. Coldplay utilized 3dB’s D&B audio system and enlisted some of us to oversee its operation. Due to a canceled flight affecting part of the American crew, I stepped up to fly SR with Don Parks, ensuring the show’s seamless setup ahead of production day. Additionally, I mixed monitors for the support acts across all three performances.",
    mainImage: "/images/concert.jpg",
    additionalImages: ["/images/coldplay2.jpg", "/images/coldplay3.jpg"],
    location: "Abu Dhabi, UAE",
    company: "3dB",
  },
  {
    year: 2025,
    title: "Ballad Beast",
    role: "Monitor Engineer", // ✅ Short role description (visible on card)
    info: "Worked on Ballad Beast again after doing it in 2024. It’s a high-profile show with serious backing, so there’s no room for error. On top of that, getting the kit across a desert in time for show day adds another layer of complexity—huge credit to the senior planners for making it happen. Grateful to have had Bill, Sid, Rick Dowding, and Cookie on board to keep me sane. Honestly, one of the most enjoyable shows I’ve been part of.",
    mainImage: "/images/bb2025.jpg",
    additionalImages: ["/images/bb22025.JPEG", "/images/bb32025.jpg",""],
    location: "Jeddah, Saudi Arabia",
    company: "3dB",
  },
  {
    year: 2017,
    title: "Ten Fe",
    role: "TM and FOH",  // ✅ Ensure `role` exists
    info: "Tour Manager and Front-of-House engineer for Ten Fe’s European tour. Managed all logistics, coordinated travel, and ensured high-quality live sound across multiple venues.",
    mainImage: "/images/tenfe2017FOH.jpg",
    additionalImages: [], // ✅ Ensure `additionalImages` exists (empty array)
    location: "UK, EU TOUR",
    company: "Pias Agency",
  },
  {
    year: 2024,
    title: "Paul Weller",
    role: "Stage Tech",  
    info: "Served as Control and Stage Technician for Paul Weller’s Summer Tour, overseeing stage looms, cabling, and line system setup. Additionally, I provided on-site support for FOH and monitor engineers, ensuring seamless control and troubleshooting any technical issues throughout the tour.",
    mainImage: "/images/pwedin.jpg",
    additionalImages: ["/images/pw1.jpg", "/images/pwrehersals2.jpg","/images/pwscarbor.jpg","/images/cuntybolox.jpg"], // ✅ Fixed missing file extension
    location: "UK, Ireland",
    company: "Solotech",
},
  {
    year: 2024,
    title: "Crystal Fighters",
    role: "Monitor Engineer",  // ✅ Ensure `role` exists
    info: "Monitor Engineer for the band from 2021-Present",
    mainImage: "/images/cf2.jpg",
    video: "/videos/crystalvideo.MP4",
    additionalImages: ["/images/cfcrew.jpg", "/images/cf2.jpg","/images/cfmexicopyramids.JPEG","/images/carunacf.jpg"], // ✅ Fix the second image path
    location: "UK, Ireland",
    company: "Solotech",
  },
  {
    year: 2018, // Change to the relevant year
    title: "Gregory Porter", // Name of the job/project
    role: "Monitor Engineer", // Short role description (shows on card)
    info: "I had the privilege of handling monitors for the incredible Gregory Porter. This tour was my first major role in audio, and it was definitely a deep dive into the industry. One of the highlights was a special show at the Royal Albert Hall, where we faced immense pressure to set up on time—but everything came together beautifully. I was honored to be working alongside the legendary Russ Miller at the other end of the snake. In my opinion, Russ is one of the best FOH mix engineers in the business, and I learned a tremendous amount from him", // Full job description (shown in modal)
    mainImage: "/images/gp2018alberthall.jpg", // Main image (displays on card)
    video: "", // (Optional) Video file if available
    additionalImages: [
      "/images/gregoryporter2018.jpg",
    ], // (Optional) Extra images shown in modal
    location: "UK", // Location of the job
    company: "STS" // Name of the company or client
  },
  {
    year: 2018,
    title: "Ocean Colour Scene",
    role: "Monitor Tech",  // ✅ Ensure `role` exists
    info: "Monitor tech for Franc during this winter tour with OCS. ",
    mainImage: "/images/ocd2018.jpg",
    video: "",
    additionalImages: ["/images/ocspa2018.jpg",], // ✅ Fix the second image path
    location: "UK",
    company: "Wigwam",
  },
  {
    year: 2019,
    title: "Busted",
    role: "PA Tech",  // ✅ Ensure `role` exists
    info: "I had the opportunity to learn the ins and outs of flying PA in arenas under the guidance of Bill from Wigwam. A true legend in the field, Bill taught me invaluable lessons about arena workflow and the intricacies of setting up flown systems.",
    mainImage: "/images/busted2.jpg",
    video: "",
    additionalImages: ["/images/bustedmarch2019.jpg",], // ✅ Fix the second image path
    location: "UK",
    company: "Wigwam",
  },
  {
    year: 2019,
    title: "Olly Murs",
    role: "PA Tech",  
    info: "This was my first tour handling PA setups in arenas, touring alongside Sid Rogerson from Wigwam. The experience was instrumental in shaping me into the engineer I am today, building my confidence in flying PA and deepening my understanding of the physics behind PA design—especially sub alignment. Watching Sid, who has worked with legends like Prodigy, apply his expertise in sub alignment was truly inspiring. In addition to the PA work, I also had the opportunity to mix support acts at FOH, which further expanded my skills in a live arena setting. It was an incredible tour with an amazing crew—intimidating at first, but an unforgettable learning experience.",
    mainImage: "/images/ollyO2.jpg",
    additionalImages: [
      "/images/fohollysupport.jpg",
      "/images/ollyJ.jpeg",  // ✅ Fixed missing file extension
      "/images/ollyO2.jpg",
      "/images/oly2019.jpeg",
       // ✅ Fixed missing file extension
    ],  
    location: "UK",
    company: "Wigwam"
  },
  {
    year: 2019,
    title: "IOW Festival 2019",
    role: "Stage Tech / FOH mixing",  // ✅ Ensure `role` exists
    info: "Stage tech for main role and also was out front Mixing the odd act",
    mainImage: "/images/iow2019.jpg",
    video: "",
    location: "Isle Of Wight",
    company: "Wigwam",
  },
  {
    year: 2019,
    title: "Pixies UK Tour",
    role: "PA Tech / Monitors Support",  // ✅ Ensure `role` exists
    info: "I worked on the Pixies’ 2019 tour, providing PA and control for Matt Jones. This tour was a fantastic opportunity to apply everything I had learned about PA systems and truly hit my stride in flying and setting up arena rigs. It was an invaluable experience that solidified my confidence in large-scale touring setups. Also was a good opertunity to be able to get more monitor mixing time with the great band The Big Moon",
    mainImage: "/images/pixies.jpg",
    additionalImages: ["/images/pixiespa.jpg","/images/bigmoon.jpg"], // ✅ Fix the second image path
    video: "",
    location: "UK",
    company: "Wigwam",
  },
  {
    year: 2019,
    title: "Gerry Cinnamon UK/Europe Tour",
    role: "Monitor Tech",  // ✅ Ensure `role` exists
    info: "An incredible tour filled with passionate Celtic fans—what more could I ask for? Along the way, I had the chance to meet some legends, including the man himself, LG. I looked after Marty on monitors, who had worked with Glasvegas, and had the privilege of mixing monitors for one of my all-time favorite bands, The Coral, who remain friends to this day. It was an absolute pleasure to be part of such a record-breaking arena tour!",
    mainImage: "/images/gerrycontrol.jpg",
    additionalImages: ["/images/gerryprep.jpg","/images/menliam.JPEG","/images/coralmonitors.jpg","/images/coral2.jpg"], // ✅ Fix the second image path
    video: "/images/gerryvid1.mp4",
    location: "UK",
    company: "Wigwam",
  },
  {
    year: 2019,
    title: "Westlife - Croke Park, Ireland",
    role: "Ring Delays/PA Tech",  // ✅ Ensure `role` exists
    info: "This was my first experience working on a stadium show, and it was a big one. I was brought in to assist with ring delays and general PA work, giving me invaluable hands-on experience with large-scale production. It was incredible to witness the sheer scale of the operation and get a taste of what Wigwam excels at. A truly eye-opening and rewarding experience!",
    mainImage: "/images/westlife.jpg",
    additionalImages: ["/images/westlife2019.jpg"], // ✅ Fix the second image path
    video: "",
    location: "UK",
    company: "Wigwam",
  },
  {
    year: 2020,
    title: "Giants Live",
    role: "System Tech",  // ✅ Ensure `role` exists
    info: "Giants Live at Sheffield Arena was my first gig as a system tech, featuring two hangs of J-Series with side hangs of V-Series and V-Subs to add depth on the ground. I designed the entire system myself and installed it during the production day. After gaining so much hands-on PA experience, this was a great opportunity to put my skills to the test and take full ownership of the setup—an important milestone in my journey.",
    mainImage: "/images/Giantslivesystems.jpg",
    additionalImages: ["/images/giants2.jpg","/images/giants4.jpg"], // ✅ Fix the second image path
    video: "",
    location: "UK",
    company: "MTS",
  },
  {
    year: 2020,
    title: "Dubai Corporate Run",
    role: "AV Tech",  // ✅ Ensure `role` exists
    info: "Did some corporate work in the Middle East for my mate Eddie—great gigs to fill a quiet month. Unfortunately, this was right when the coronavirus started shutting down the industry. I managed about a week of work before the rest of the shows were canceled due to the pandemic.",
    mainImage: "/images/dubai5.jpg",
    additionalImages: ["/images/dubai4.jpg","/images/dubai6.jpg"], // ✅ Fix the second image path
    video: "/images/dubai2020.mp4",
    location: "UAE",
    company: "3dB",
  },
  {
    year: 2021,
    title: "COVID-19",
    role: "BUM",  // ✅ Ensure `role` exists
    info: "",
    mainImage: "/images/covid.png",
    additionalImages: [], // ✅ Fix the second image path
    video: "",
    location: "UK",
    company: "",
  },
  {
    year: 2023,
    title: "Lord Of The Dance",
    role: "PA Tech/FOH",  // ✅ Ensure `role` exists
    info: "After a year-long hiatus, I found my way back into the world of audio after spending some time learning to code and working in blockchain. While that was a fun and valuable experience, I genuinely missed audio—and, more than anything, I missed being on shows with my mates. Easing back in with a nice and simple V-Series setup, I teamed up with Gary Kenyon and the brilliant Matt Watho. It was a fantastic crew who helped me shake off the rust and get back into the swing of things.",
    mainImage: "/images/lotdpa2023.JPEG",
    additionalImages: ["/images/lotdpa2.JPEG","/images/LOTDFOH2.JPEG"], // ✅ Fix the second image path
    video: "",
    location: "UK",
    company: "Solotech",
  },
  {
    year: 2023,
    title: "New Order",
    role: "PA Tech",  // ✅ Ensure `role` exists
    info: "After a great run on Lord of the Dance, I was eager to get back to larger PA setups like the SL-Series—and that’s exactly what I did. I teamed back up with Uncle Sid and got stuck in, handling main hangs, side hangs, flown subs, and cable bridges. I’ll admit, I was rusty on day one—it felt like I’d forgotten everything I’d learned before COVID! But after shaking off the dust (and a first-day injury), we found our rhythm again, and everything fell into place.",
    mainImage: "/images/injury2023amstrer.JPEG",
    additionalImages: ["/images/neworder2023.jpg","/images/neworderamps2023.JPEG"], // ✅ Fix the second image path
    video: "",
    location: "UK",
    company: "Solotech",
  },
  {
    year: 2023,
    title: "Isle of Wight Festival 2023",
    role: "Monitor Engineer",  // ✅ Ensure `role` exists
    info: "It was time to step up on Big Top and take on monitors alongside Gary Kenyon. What a stretch of intense days with an absolutely incredible crew—couldn’t have asked for better people to work with!",
    mainImage: "/images/iow2023mons.jpg",
    additionalImages: ["/images/iow2023.JPEG","/images/iowmons22023.JPEG"], // ✅ Fix the second image path
    video: "",
    location: "UK",
    company: "Solotech",
  },
  {
    year: 2023,
    title: "Liverpool EuroVision Event",
    role: "PA Tech",  // ✅ Ensure `role` exists
    info: "A large system went into Liverpool’s George Square for this one, working primarily with the Coldplay crew. We deployed a hefty amount of D&B SL-Series throughout the venue—quite the setup! It was a great gig to be a part of and an awesome experience working alongside such a top-tier team.",
    mainImage: "/images/liverpooltpi.JPEG",
    additionalImages: ["/images/tpiawardsliverpool2023.jpg","/images/liverpooltall.jpeg"], // ✅ Fix the second image path
    video: "",
    location: "UK",
    company: "Solotech",
  },
  {
    year: 2023,
    title: "Hacienda Classical",
    role: "Stage Tech",
    info: `
      This was one of the most intense stages I’ve worked on—though back in the day, it was even bigger! 
      This was actually a downsized version from what I remember, but still, managing 85 inputs and plenty of fan-out looms kept me on my toes.

      A major part of this setup was handling the orchestra sections, which required careful planning and organization. 
      With multiple string, brass, and percussion sections, ensuring clean and efficient loom management was critical. 
      Each section had its own dedicated loom to keep cabling tidy and prevent last-minute scrambling during line checks. 
      Properly managing these looms not only helped with fast troubleshooting but also ensured a smooth show, minimizing 
      the risk of technical hiccups in such a complex setup.

      Handling multiple microphone types and complex routing across the stage made this gig a serious challenge, 
      but one that was incredibly rewarding to take on.
    `,
    mainImage: "/images/hacienda2023.JPEG",
    additionalImages: [], // ✅ Fixed trailing comma
    video: "",
    location: "UK",
    company: "Solotech",
  },
  {
    year: 2023,
    title: "Coldplay Manchester/Cardiff",
    role: "Ring Delays",  // ✅ Ensure `role` exists
    info: "I was originally handling ring delays for the Coldplay Manchester show, but I was asked to stay on and take over the SR PA load-out after a team member fell ill and had to leave. It was my first time managing such a large section of a system on my own—a great experience, especially alongside looking after the ring delays.",
    mainImage: "/images/coldplaymanchester2023.jpg",
    additionalImages: ["/images/Coldplay2023.jpg","/images/coldplayloadin.jpg"], // ✅ Fix the second image path
    video: "",
    location: "UK",
    company: "Solotech",
  },
  {
    year: 2018,
    title: "The Corrs/Busted same system",
    role: "Ring Delays",  // ✅ Ensure `role` exists
    info: "In 2018, we had back-to-back shows with The Corrs and Busted at the Royal Albert Hall. To streamline the turnaround—especially with another show bringing in its own rig between ours—we decided to place amps up in the gods. This required careful planning to ensure we left in what we needed and took out only what we could without causing issues for the Busted show. It was a great experience working with Gary Kenyon on this one, and having Gary Bradshaw mixing The Corrs at FOH was a bonus.",
    mainImage: "/images/corrsalbertyhall2018.jpg",
    additionalImages: ["/images/corrsalbertyhall2018.jpg"], // ✅ Fix the second image path
    video: "",
    location: "UK",
    company: "Wigwam",
  },
  {
    year: 2018,
    title: "Radio1 Big Weekend",
    role: "PA Tech/Stage",  // ✅ Ensure `role` exists
    info: "Worked with SSE on Radio One’s Big Weekend—great experience being part of such a solid team. SSE is top-notch when it comes to festivals, and it was awesome to see their expertise in action.",
    mainImage: "/images/bigweekend2018.jpg",
    additionalImages: ["/images/bigweekend2.jpg"], // ✅ Fix the second image path
    video: "",
    location: "UK",
    company: "SSE",
  },
  {
    year: 2019,
    title: "Dylan John Thomas",
    role: "Monitor Engineer",  // ✅ Ensure `role` exists
    info: "Handled monitors for Dylan John Thomas during his support slot with Gerry Cinnamon. Great guy and a pleasure to work with. Unfortunately, I couldn’t stay on for his future tour due to prior commitments—gutted to miss out!",
    mainImage: "/images/dylanjohnmons.jpeg",
    additionalImages: ["/images/dylanjohnmons.jpeg"], // ✅ Fix the second image path
    video: "",
    location: "UK",
    company: "Wigwam",
  },
  {
    year: 2024,
    title: "Paul Weller - Gig for Gaza (Not that one)",
    role: "Monitor Tech/ Stage",  // ✅ Ensure `role` exists
    info: "Paul organized a gig for Palestine, and we were the main act before Primal Scream. Standard procedure for our tour—get in, line check, and out as quickly and professionally as possible. Also had the chance to watch Kneecap from side stage with Paul—great moment!",
    mainImage: "/images/gaza1.jpg",
    additionalImages: ["/images/gaza3.jpg", "/images/gazapw.jpg"], // ✅ Fix the second image path
    video: "",
    location: "UK",
    company: "Wigwam",
  },
  {
    year: 2024,
    title: "Isle of Wight 2024",
    role: "Monitor Engineer",  // ✅ Ensure `role` exists
    info: "Same as in 2023, I kept my slot on monitors for this one after a solid year—production wanted the same crew for the Big Top. Great buzz on this gig!",
    mainImage: "/images/iow2024main.jpg",
    additionalImages: ["/images/iow2024.JPEG", "/images/iow2024main.jpg"], // ✅ Fix the second image path
    video: "",
    location: "UK",
    company: "Solotech",
  },  

];