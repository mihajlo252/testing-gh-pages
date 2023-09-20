import React from "react";
import { CvModal } from "../components/CvModal";

export const About = () => {
  return (
    <div className="hero justify-center place-items-start py-44 px-44">
      <div className="hero-content flex-col min-[1340px]:flex-row items-start gap-40 p-0 max-w-full">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-bold text-primary mb-10">
            My name is Marko Stefanović and this is me!
          </h1>
          <p>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Earum, mollitia repellendus? Impedit autem animi nam possimus
            voluptas. Beatae quibusdam magnam incidunt deserunt pariatur
            repellendus voluptatem, itaque quae, ex, laborum corporis? Placeat
            enim quam excepturi molestias nobis cumque eligendi expedita est!
          </p>
          <p>
            Dolore rem laboriosam unde libero labore repudiandae consectetur
            cupiditate accusamus id ducimus, praesentium deserunt vel blanditiis
            facilis quas suscipit magnam? Impedit obcaecati illum cum quos,
            laboriosam autem, ex minus quas eos accusantium cupiditate doloribus
            animi et asperiores velit optio excepturi suscipit deleniti eaque
            sed ea voluptate. Laudantium placeat quibusdam illum! Eum id quam
            unde nihil nostrum laudantium odio, minima voluptatem dignissimos
            reiciendis debitis nemo incidunt reprehenderit fugit dolore, modi ab
            molestiae omnis. Minus amet vel maxime sequi iusto possimus iure.
            Corporis voluptatem nihil quis incidunt nostrum numquam, voluptate
            odit. Deleniti nostrum, modi at esse perspiciatis explicabo quidem
            pariatur sequi expedita tenetur iusto quo ex laudantium placeat nisi
            sed voluptatibus incidunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ab
            perferendis accusantium voluptate animi similique facere quas
            facilis magni excepturi inventore esse iusto accusamus labore
            eveniet, porro non quisquam? In. Ipsa architecto cum corporis vitae
            illum culpa qui repudiandae obcaecati quaerat assumenda ducimus
            necessitatibus ab aperiam similique in vel id, blanditiis, inventore
            possimus veritatis odit dolorem. Dolorum est consequatur non.
          </p>
        </div>
        <div className="flex flex-col gap-5 max-[1340px]:place-self-center">
          <div className="relative">
            {/* Izmeniti src i alt po potrebi */}
            <img
              src="marko-portfolio-temp/cv/cv_example.png"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="CV Example"
            />
            <CvModal />
          </div>
          {/* href je path do fajla, a download je samo ime fajla kad ga downloadujes */}
          <a
            href={`/cv/cv_example.pdf`}
            download="CV Marko Stefanovic.pdf"
            className="btn btn-primary"
          >
            DOWNLOAD
          </a>
        </div>
      </div>
    </div>
  );
};
