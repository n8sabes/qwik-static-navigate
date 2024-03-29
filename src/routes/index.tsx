import { component$ } from "@builder.io/qwik";
import { useNavigate, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const navigate = useNavigate();
  navigate;

  return (
    <>
      <h1>Hi 👋</h1>
      <a href="#anchor">Jump with a-tag</a>
      <button
        onClick$={() => {
          console.log("navigate to anchor");
          navigate(`#anchor`);
        }}
      >
        Navigate to Anchor
      </button>
      {[...Array(50)].map((_, i) => (
        <br key={i} />
      ))}
      <h2 id="anchor">Anchor!</h2>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
