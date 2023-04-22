import react, { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
  } from '@chakra-ui/react'

  const AddSchedules = () => {

    const [scheduleInfo, setScheduleInfo] = useState(
        {
            ScheduleName: "",
            DateTime: "",
            PlateNo: "",
            ChargingDuration: "",
            ChargeStation: ""
        }
    )

    return (
                <form onSubmit = {postData}>
                        <FormLabel>Product Name</FormLabel>
                        <FormControl type="text" name="ProductName" 
                            value={productInfo.ProductName} onChange = {updateForm} placeholder="Product Name" />

                        <FormLabel>Quantity In Stock</FormLabel>
                        <FormControl type="number" name="QuantityInStock"
                        value={productInfo.QuantityInStock} onChange = {updateForm}     placeholder="Quantity In Stock" />

                        <FormLabel>Quantity Sold</FormLabel>
                        <FormControl type="number" name="QuantitySold" value={productInfo.QuantitySold} onChange = {updateForm}  placeholder="Quantity Sold" />

                        <FormLabel>Unit Price</FormLabel>
                        <FormControl type="number" name="UnitPrice" value={productInfo.UnitPrice} onChange = {updateForm}  placeholder="Unit Price" />

                        <FormLabel>Revenue</FormLabel>
                        <FormControl type="number" name="Revenue" value={productInfo.Revenue} onChange = {updateForm}  
                            placeholder="Revenue" />

                        <FormLabel>Supplier</FormLabel>
                        <FormControl type="number" name="Supplier" value={productInfo.Supplier} onChange = {updateForm}  
                            placeholder="Supplier" />
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
    );
  }