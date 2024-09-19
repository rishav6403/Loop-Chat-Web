const GenderCheckBox = () => {
  return (
    <>
    <div className="genderBox d-flex gap-2">
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                checked
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check flex flex-column ms-3">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
              />
              <label className="form-check-label" for="flexRadioDefault2">
                Female
              </label>
            </div>
          </div>
    </>
  )
}

export default GenderCheckBox