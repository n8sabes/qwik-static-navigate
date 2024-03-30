import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { useNavigate, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const originInputSignal = useSignal("capacitor://localhost");
  const originOutputSignal = useSignal("");
  const navigate = useNavigate();

  // const processOrigin = $((origin: string) => {
  // });

  useTask$(async ({ track }) => {
    track(() => originInputSignal.value);
    // originOutputSignal.value = await processOrigin(originInputSignal.value);

    let ssgOrigin = originInputSignal.value;

    if (!ssgOrigin) {
      console.log("1");
      ssgOrigin = `https://yoursite.qwik.dev`;
    }
    // allow for capacitor:// or http://
    if (ssgOrigin.length > 0 && !/:\/\//.test(ssgOrigin)) {
      console.log("2");
      ssgOrigin = `https://${ssgOrigin}`;
    }
    if (ssgOrigin.startsWith("//")) {
      console.log("3");
      ssgOrigin = `https:${ssgOrigin}`;
    }
    originOutputSignal.value = ssgOrigin;
  });

  return (
    <>
      <h1>Origin Test</h1>
      <input type="text" bind:value={originInputSignal} />
      <br />
      Origin: {originOutputSignal.value}
      <br />
      <br />
      <br />
      <h1>Navigate Test</h1>
      <a href="#anchor">Using a-tag</a>
      <br />
      <br />
      <button
        onClick$={() => {
          console.log("navigate to anchor");
          navigate(`#anchor`);
        }}
      >
        Using navigate()
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
