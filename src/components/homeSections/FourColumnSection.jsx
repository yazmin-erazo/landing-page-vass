import Column from "./Column";

const FourColumnSection = () => {
  return (
    <div className="container-fluid border-bottom border-md-top border-white">
      <div className="row" style={{ height: "85vh" }}>
        <Column title="Brand" link="#brand" description="Short phrase about Brand" />
        <Column title="Product" link="#" description="Short phrase about Product" />
        <Column title="Motion"  link="#" description="Short phrase about Motion" />
        <Column title="Others"  link="#" description="Short phrase about Others" />
      </div>
    </div>
  );
};

export default FourColumnSection;