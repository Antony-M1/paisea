import React from 'react'


const Profile = () => {
    return (
      <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
    );

}

const YourFirstComponent = () => {
  return (
    <article>
      <h1>My First Component</h1>
      <ol>
        <li>Componets: UI Building Blocks</li>
        <li>Defining a Component</li>
        <li>Using a Component</li>
        <Profile />
        <Profile />
        <Profile />
      </ol>
    </article>
  );
}

export default YourFirstComponent