import React, { useState, useEffect } from 'react'
import { Formik, Field } from 'formik'
import { object, string } from 'yup'
import { formatCurrency, normalizeCurrency } from '../../../utils/pipes'
import { get } from '../../../utils/api'
import useInterval from '../../../hooks/useInterval'
import TextInput from '../../../components/text-input/TextInput'
import Button from '../../../components/button/Button'

const DECIMALS = 4
const MINUTES = 10
const ACCESS_KEY = process.env.REACT_APP_API_ACCESS_KEY

const initialValues = { usd: '0', eur: '0' }

const validationSchema = object().shape({
  usd: string().required('Required field.'),
  eur: string(),
})

const DashboardScreen = () => {
  const [loading, setLoading] = useState(false)
  const [rate, setRate] = useState(null)

  const fetchCurrency = async () => {
    setLoading(true)

    try {
      const { data } = await get(`latest?symbols=USD&access_key=${ACCESS_KEY}`)
      const usd = !data.rates.USD ? null : data.rates.USD

      setRate(usd)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = ({ usd }, { setFieldValue, setSubmitting }) => {
    const eur = usd / rate

    setFieldValue('eur', eur)
    setSubmitting(false)
  }

  useInterval(() => {
    fetchCurrency()
  }, MINUTES * 60000)

  useEffect(() => {
    fetchCurrency()
  }, [])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      render={({ isValid, isSubmitting, handleSubmit }) => (
        <div className="flex-1 w-full py-8 sm:pt-16 bg-gray-200">
          <form
            className="flex flex-col items-center sm:mx-24 md:mx-36 py-8 rounded-lg sm:shadow-md bg-white"
            onSubmit={handleSubmit}
          >
            <div className="container flex flex-col sm:flex-row justify-center mx-auto">
              <Field
                className="mt-2"
                component={TextInput}
                name="usd"
                label="USD"
                placeholder="USD"
                type="text"
                format={value => formatCurrency(value, '$', DECIMALS)}
                normalize={value => normalizeCurrency(value, DECIMALS)}
              />

              <Field
                className="mt-2"
                component={TextInput}
                name="eur"
                label="EUR"
                placeholder="EUR"
                type="text"
                readOnly
                format={value => formatCurrency(value, '€', DECIMALS)}
                normalize={value => normalizeCurrency(value, DECIMALS)}
              />
            </div>

            <Button
              className="mt-8"
              disabled={!rate || !isValid || isSubmitting || loading}
              loading={isSubmitting || loading}
            >
              CALCULATE
            </Button>
          </form>
        </div>
      )}
    />
  )
}

DashboardScreen.propTypes = {}

export default DashboardScreen
