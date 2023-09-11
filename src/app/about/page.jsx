"use client"
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Acerca de Nosotros "
}

function AboutPage() {
 const router = useRouter()
  return (
  <section>
    <h1>About</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, sed. Qui doloremque magni molestiae deleniti reprehenderit repellendus neque animi nulla. Molestiae, harum. Harum officiis dolore, recusandae saepe delectus distinctio architecto!
    Possimus explicabo vel, quam dolorum provident porro iure nesciunt nulla aliquid quidem eos, mollitia repellat quasi corporis laudantium enim! Quae adipisci magnam ipsum nihil cum iusto pariatur at distinctio beatae?
    Assumenda aperiam, consectetur accusantium blanditiis exercitationem consequatur modi iure reiciendis praesentium ut. Sapiente praesentium voluptatibus commodi labore culpa accusantium molestias deleniti ratione omnis tempora minima beatae, perferendis saepe, eligendi ipsam?
    Omnis quidem molestiae culpa quisquam ullam quae quibusdam laborum cumque? Harum, facilis officiis fugit voluptatem praesentium adipisci eveniet impedit rem quaerat facere mollitia a non nam sint magni commodi consectetur.
    Natus voluptates amet omnis velit tempora, doloremque aspernatur earum nesciunt veritatis obcaecati illo exercitationem perspiciatis est officiis voluptatem ut optio incidunt necessitatibus! Explicabo, quis ullam in laborum tempore suscipit adipisci!</p>
    <button className="bg-sky-400 px-3 py-2 rounded-md" 
    onClick={() => {
      alert("Executing Code!")
      router.push("/")
    }}
    >
      Click
    </button>
    </section>
  )
}

export default AboutPage;