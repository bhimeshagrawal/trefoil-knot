import "/shepherd.css";
import Shepherd from "shepherd.js";

const tour = new Shepherd.Tour({
  defaultStepOptions: {
    cancelIcon: {
      enabled: true,
    },
    classes: "shadow-md bg-purple-dark",
    scrollTo: { behavior: "smooth", block: "center" },
  },
});

tour.addStep({
  title: "Welcome to 3d trefoil-knot",
  text: 'This guide will teach you basic controls to view this 3d moving illustration. Click "Next" to continue.',
  attachTo: {
    element: ".subtitle",
    on: "bottom",
  },
  buttons: [
    {
      action() {
        return this.next();
      },
      text: "Next",
    },
  ],
  id: "step1",
});

tour.addStep({
  title: "Zoom ( Pinch out )",
  text: "Pinch out and in to zoom in and out or Use your mouse wheel to zoom in and out.",
  buttons: [
    {
      action() {
        return this.next();
      },
      text: "Next",
    },
  ],
  id: "step2",
});

tour.addStep({
  title: "Rotate ( Drag )",
  text: "Click the cursor and drag to rotate the 3d object.",
  buttons: [
    {
      action() {
        return this.next();
      },
      text: "Exit",
    },
  ],
  id: "step2",
});

tour.start();
