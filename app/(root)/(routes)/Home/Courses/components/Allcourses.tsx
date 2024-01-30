import Blogcard from '@/components/blog/Blogcard';
import React from 'react'



const pmpcontent = [
    {
        courseImage: "/coursespage.png",
        coursetitle: "Navigating the Agile Landscape: Essential Skills for PMI-ACP Success",
        coursedescription: "Learn the essential skills for PMI-ACP success and how to navigate the agile landscape.",
        courserating: "5 stars",
        courseurl: "/pmi-acp-navigating-agile-landscape"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "PMI-ACP vs. Traditional Project Management: Understanding the Agile Difference",
        coursedescription: "Understand the differences between PMI-ACP and traditional project management methodologies.",
        courserating: "4.5 stars",
        courseurl: "/pmi-acp-vs-traditional"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "Case Studies in Agility: Real-World Applications of PMI-ACP Principles",
        coursedescription: "Explore real-world case studies showcasing the applications of PMI-ACP principles in different scenarios.",
        courserating: "4.8 stars",
        courseurl: "/pmi-acp-case-studies"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "Lean Six Sigma Green Belt: A Gateway to Process Excellence",
        coursedescription: "Discover the fundamentals of Lean Six Sigma Green Belt and its role as a gateway to process excellence.",
        courserating: "4.7 stars",
        courseurl: "/lssgb-gateway-to-process-excellence"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "Integrating LSSGB Methodologies into Everyday Business Practices",
        coursedescription: "Learn how to seamlessly integrate Lean Six Sigma Green Belt methodologies into everyday business practices.",
        courserating: "4.6 stars",
        courseurl: "/lssgb-methodologies-into-business-practices"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "Success Stories from Lean Six Sigma Green Belt Professionals",
        coursedescription: "Explore success stories from professionals who have achieved excellence with Lean Six Sigma Green Belt.",
        courserating: "4.9 stars",
        courseurl: "/lssgb-success-stories"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "ITIL 4 in the Modern IT Landscape: Principles for Digital Transformation",
        coursedescription: "Understand the principles of ITIL 4 and its role in digital transformation within the modern IT landscape.",
        courserating: "4.5 stars",
        courseurl: "/itil4-modern-it-landscape"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "Bridging the Gap Between IT Services and Business Goals with ITIL 4",
        coursedescription: "Learn how to bridge the gap between IT services and business goals using ITIL 4 methodologies.",
        courserating: "4.8 stars",
        courseurl: "/itil4-bridging-gap"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "ITIL 4 Case Studies: Delivering Value in IT Service Management",
        coursedescription: "Explore case studies demonstrating the delivery of value in IT service management with ITIL 4.",
        courserating: "4.6 stars",
        courseurl: "/itil4-case-studies"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "Innovative Project Management Techniques for Contemporary Challenges",
        coursedescription: "Discover innovative project management techniques to tackle contemporary challenges in the industry.",
        courserating: "4.7 stars",
        courseurl: "/innovative-project-management-techniques"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "Balancing Time, Cost, and Quality: Advanced Project Management Strategies",
        coursedescription: "Learn advanced project management strategies to effectively balance time, cost, and quality.",
        courserating: "4.9 stars",
        courseurl: "/advanced-project-management-strategies"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "Project Management Techniques: Learning from Industry Leaders",
        coursedescription: "Gain insights into project management techniques by learning from industry leaders and experts.",
        courserating: "4.6 stars",
        courseurl: "/project-management-techniques-industry-leaders"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "The Evolution of Project Management: Insights from the PMP Framework",
        coursedescription: "Explore the evolution of project management and gain insights from the PMP framework.",
        courserating: "4.8 stars",
        courseurl: "/evolution-of-project-management"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "PMP Certification: A Comprehensive Guide to Career Advancement",
        coursedescription: "Comprehensive guide to PMP certification and how it can advance your career in project management.",
        courserating: "5 stars",
        courseurl: "/pmp-certification-guide"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "Global Trends in Project Management and the Role of PMP",
        coursedescription: "Explore global trends in project management and understand the pivotal role of PMP certification.",
        courserating: "4.7 stars",
        courseurl: "/global-trends-pmp"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "Mastering Change Management: Strategies for Organizational Success",
        coursedescription: "Learn strategies for mastering change management and achieving organizational success.",
        courserating: "4.9 stars",
        courseurl: "/mastering-change-management"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "Change Management in Action: Case Studies of Transformational Change",
        coursedescription: "Explore case studies of transformational change and the application of change management in action.",
        courserating: "4.8 stars",
        courseurl: "/change-management-in-action"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "The Human Side of Change Management: Leadership and Communication",
        coursedescription: "Understand the human side of change management, focusing on leadership and effective communication.",
        courserating: "4.7 stars",
        courseurl: "/human-side-change-management"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "Starting Your Project Management Journey: A Beginner's Guide to CAPM",
        coursedescription: "Get started on your project management journey with this beginner's guide to CAPM certification.",
        courserating: "4.5 stars",
        courseurl: "/starting-pm-journey-capm"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "CAPM Certification: Laying the Groundwork for a Career in Project Management",
        coursedescription: "Learn how CAPM certification lays the groundwork for a successful career in project management.",
        courserating: "4.6 stars",
        courseurl: "/capm-certification-groundwork"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "The Comparative Edge: CAPM in Today’s Project Management World",
        coursedescription: "Gain a comparative edge in today's project management world with CAPM certification.",
        courserating: "4.8 stars",
        courseurl: "/comparative-edge-capm"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "The Role of a Certified Scrum Master in Agile Projects",
        coursedescription: "Explore the crucial role of a Certified Scrum Master in ensuring success in agile projects.",
        courserating: "4.9 stars",
        courseurl: "/role-certified-scrum-master"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "From Good to Great: Elevating Your Agile Team as a Scrum Master",
        coursedescription: "Learn strategies to elevate your agile team from good to great as a Certified Scrum Master.",
        courserating: "4.7 stars",
        courseurl: "/elevating-agile-team-scrum-master"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "Case Studies: Transformative Success Stories of Certified Scrum Masters",
        coursedescription: "Explore transformative success stories of Certified Scrum Masters and their impact on agile projects.",
        courserating: "4.8 stars",
        courseurl: "/case-studies-certified-scrum-masters"
    },
];



const Allcourses = () => {
  return (
    <div className='w-full h-auto'>
         <div className="grid grid-cols-4 p-10 gap-8">
        {pmpcontent.map((item) => (
          <a
            href={`/Home/Blog/${item.courseurl}`}
            className="cursor-pointer "
            key={item.coursetitle}
          >
            <Blogcard title={item.coursetitle} description={item.coursedescription}  image={item.courseImage} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Allcourses