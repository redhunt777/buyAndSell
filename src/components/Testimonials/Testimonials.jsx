import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./testimonials.scss";
import ReviewTemplate from "./ReviewTemplate/ReviewTemplate";

const Testimonials = () => {
  const review = [
    {
      id: 1,
      name: "John Doe",
      title: "CEO",
      rating: 5,
      img: "https://picsum.photos/id/237/200/300",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga numquam laborum omnis est vel atque velit porro repellat quas, modi voluptas cumque mollitia dignissimos minus, et doloribus illo vero iusto.",
    },
    {
      id: 2,
      name: "Peter Parker",
      title: "Broker",
      rating: 4,
      img: "https://picsum.photos/id/238/200/300",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga numquam laborum omnis est vel atque velit porro repellat quas, modi voluptas cumque mollitia dignissimos minus, et doloribus illo vero iusto.",
    },
    {
      id: 3,
      name: "Paul Walker",
      title: "Client",
      rating: 5,
      img: "https://picsum.photos/id/239/200/300",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga numquam laborum omnis est vel atque velit porro repellat quas, modi voluptas cumque mollitia dignissimos minus, et doloribus illo vero iusto.",
    },
  ];
  return (
    <div className="testimonials">
      <div className="testimonialsTitle">Voices from Our Customers</div>
      <div className="reviewContainers">
        {review.map((r) => (
          <ReviewTemplate key={r.id} r={r} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
