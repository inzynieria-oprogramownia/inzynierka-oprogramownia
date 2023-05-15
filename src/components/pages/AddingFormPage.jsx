import React from 'react'
import Page from '../parts/Page'
import AddingForm from '../parts/AddingForm'
import img1 from '../../assets/addForm/form1.png'
import img2 from '../../assets/addForm/form2.png'
import '../../styles/AddingFormPage.css'

const AddingFormPage = () => {
  const url = window.location.pathname

  return (
    <Page>
      <div className="addingFormPage">
        {url === '/addRecipe' ? <AddingForm type="recipe" /> : <AddingForm />}
        <img src={img1} alt="form1" />
        <img src={img2} alt="form2" />
      </div>
    </Page>
  )
}

export default AddingFormPage
