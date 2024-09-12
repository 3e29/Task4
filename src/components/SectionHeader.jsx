import "../styles/SectionHeader.css";
const SectionHeader = ({ title, description }) => {
  return (
    <div id="section-header" className="main-heading text-center mt-5 mb-5">
      <h2 className="pb-2">{title}</h2>
      <div className="line border border-2 mx-auto"></div>
      <p className="pt-2">{description}</p>
    </div>
  );
};

export default SectionHeader;
