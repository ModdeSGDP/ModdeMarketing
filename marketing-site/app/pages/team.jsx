export default function Team() {
    const teamMembers = [
      {
        name: 'Keshawa Udana',
        position: 'Founder and Machine Learning Engineer',
        bio: ' mmmmhhhhh',
        image: '/team/jane.jpg',
      },
      {
        name: 'John Smith',
        position: 'CTO',
        bio: 'John is a tech enthusiast who leads our technology development with a focus on scalability and innovation.',
        image: '/team/john.jpg',
      },
      {
        name: 'Alice Brown',
        position: 'Marketing Lead',
        bio: 'Alice has a passion for building connections and crafting marketing strategies that make an impact.',
        image: '/team/alice.jpg',
      },
      {
        name: 'Alice Brown',
        position: 'Marketing Lead',
        bio: 'Alice has a passion for building connections and crafting marketing strategies that make an impact.',
        image: '/team/alice.jpg',
      },
      {
        name: 'Alice Brown',
        position: 'Marketing Lead',
        bio: 'Alice has a passion for building connections and crafting marketing strategies that make an impact.',
        image: '/team/alice.jpg',
      },
      {
        name: 'Alice Brown',
        position: 'Marketing Lead',
        bio: 'Alice has a passion for building connections and crafting marketing strategies that make an impact.',
        image: '/team/alice.jpg',
      },
    ];
  
    return (
      <div className="max-w-6xl mx-auto mt-10">
        <h1 className="text-4xl font-bold text-center mb-8">Meet Our Team</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 shadow rounded">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold text-center">{member.name}</h2>
              <p className="text-gray-600 text-center">{member.position}</p>
              <p className="mt-4 text-sm text-gray-500">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  