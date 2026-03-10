export const CandidateProfile = () => {
  const name = "John Nigels";
  const role = "Frontend Developer";
  const yearOfExperience = 5;
  const isAvailable = true;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        {role} with {yearOfExperience} years of yearOfExperience
      </p>
      <p>Started in {2025 - yearOfExperience}</p>
      <p>Status: {isAvailable ? "Available for hire" : "Not Available"}</p>
      <p>Contact: {name.toLowerCase().replace(" ", ".")}@email.com</p>
    </div>
  );
};
