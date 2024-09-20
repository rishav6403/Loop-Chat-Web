const GenderCheckBox = ({onCheckBoxChange, selectedGender}) => {
  return (
    <>
    <div className="genderBox d-flex gap-2 ms-3">
    <div className="form-check "  >
    <label className="form-check-label" >
    Male
    <input className="form-check-input" type="checkbox" role="button"
  checked = {selectedGender == "male"}
  onChange={()=> onCheckBoxChange("male")}/>
  </label>
  
  
</div>
<div className="form-check ">
<label className={`form-check-label `}>
    Female
    <input className="form-check-input" type="checkbox" role="button" 
  checked = {selectedGender == "female"}
  onChange={()=> onCheckBoxChange("female")}/>
  </label>
  
  
</div>
          </div>
    </>
  )
}

export default GenderCheckBox