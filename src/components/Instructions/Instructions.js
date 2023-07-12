import "./Instructions.css";

const Instructions = () => {
  return (
    <>
      <h2>Task</h2>
      <p>Recreate the website design!</p>
      <img
        className="design-img"
        src="design.png"
        alt="A grid of user cards showing a dummy img, the user's name, a coloured border and a number between 1 and 100"
      />
      <h3>Task 1</h3>
      <p>For your MVP, display a single Card component</p>
      <h3>Task 2</h3>
      <p>Map over the Card component to display all users on a flexgrid</p>
      <h3>Task 3</h3>
      <p>
        When you click the Logout button, a state change occurs and the text on
        the button updates. Write a test that ensures this functionality works
        as expected.
      </p>
      <h3>Discussion</h3>
      <p>
        What other tests would you write to test other components, such as the
        Card?
      </p>
      <h4>Helpful hints</h4>
      <ul>
        <li>
          The data is stored in the <code>lib</code> directory as JSON
        </li>
        <li>
          The user card
          <ul>
            <li>Display the user's name</li>
            <li>
              If the user's ranking is less than 50, display a <code>–</code>{" "}
              next to the number; otherwise, display a <code>+</code>
            </li>
            <li>
              Import the image at the top of the card – but beware, some of the
              image URL fields are <code>null</code>. In that case, display some
              alt text instead
            </li>
            <li>
              The user's favourite colour should be the colour of the card
              border
            </li>
            <li>
              The <code>key</code> is not displayed on the card, but it might be
              useful for something else.
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Instructions;
