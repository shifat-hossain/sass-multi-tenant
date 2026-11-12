import { ErrorMessage, Field, FieldArray, Form, Formik, setIn } from "formik";
import { Link, useNavigate } from "react-router";
import { useSubscriptionPlans } from "../hooks/useSubscriptionPlans";
import Loader from "../../../components/Loader";
import { axiosCLient } from "../../../lib/axios";
import { notify } from "../../../lib/toast";

const inputClass =
    "w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/20 transition-all";

const labelClass = "text-sm font-semibold text-slate-700 mb-1.5 block";

function SectionHeader({ title, subtitle }) {
    return (
        <div className="flex items-baseline justify-between gap-4 mb-6">
            <h3 className="text-base font-bold text-slate-900">{title}</h3>
            <span className="text-sm text-slate-400 shrink-0">{subtitle}</span>
        </div>
    );
}

function ToggleSwitch({ name, label, description }) {
    return (
        <Field name={name}>
            {({ field, form }) => (
                <div className="flex items-center justify-between gap-4 py-1">
                    <div>
                        <p className="text-sm font-semibold text-slate-800">{label}</p>
                        {description ? (
                            <p className="text-sm text-slate-500 mt-0.5">{description}</p>
                        ) : null}
                    </div>
                    <button
                        type="button"
                        role="switch"
                        aria-checked={field.value}
                        onClick={() => form.setFieldValue(name, !field.value)}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${field.value ? "bg-violet-600" : "bg-slate-200"
                            }`}
                    >
                        <span
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ${field.value ? "translate-x-5" : "translate-x-0"
                                }`}
                        />
                    </button>
                </div>
            )}
        </Field>
    );
}

function SelectField({ name, children }) {
    return (
        <div className="relative">
            <Field as="select" name={name} className={`${inputClass} appearance-none cursor-pointer pr-10 font-medium`}>
                {children}
            </Field>
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </span>
        </div>
    );
}

function ItemBadge({ label }) {
    return (
        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-violet-600 bg-violet-50 border border-violet-100 px-2 py-0.5 rounded">
            {label}
        </span>
    );
}

function AddNewButton({ onClickEvent, label }) {
    return (
        <button
            type="button"
            className="w-full mt-4 py-2 border border-dashed border-violet-200 bg-violet-50/50 hover:bg-violet-50 text-violet-600 font-semibold text-sm rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            onClick={onClickEvent}
        >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            {label}
        </button>
    );
}

function RemoveButton({ onClickEvent }) {
    return (
        <button
            type="button"
            className="p-1 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            aria-label="Remove"
            onClick={onClickEvent}
        >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    );
}


export default function SubscriptionPlanForm() {
    const { formOptions, isLoading } = useSubscriptionPlans();
    const billing_cycles = formOptions?.data?.billing_cycles || [];
    const navigate = useNavigate();
    const initialValues = {
        name: "",
        short_description: "",
        is_active: true,
        is_featured: false,
        prices: [
            {
                type: "monthly",
                price: 0,
                discount_type: "",
                discount_value: 0,
                is_active: true,
            },
        ],
        features: [
            {
                feature_key: "",
                feature_value: "",
                feature_text: "",
            },
        ],
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (values, actions) => {
                try {
                    const response = await axiosCLient.post('api/admin/subscription-plans', values);
                    // console.log(response.data.message);
                    notify.success(response.data.message);
                    navigate('/admin/subscription-plans');
                } catch (error) {
                    const laravelErrors = error.response?.data?.errors ?? {};
                    const key_value_pairs = Object.entries(laravelErrors);

                    let formikErrors = {};
                    for (const [key, messages] of key_value_pairs) {
                        formikErrors = setIn(formikErrors, key, messages[0]);
                    }

                    actions.setErrors(formikErrors);
                    actions.setSubmitting(false);
                }
            }}
        >
            {({ values, errors, isSubmitting }) => (
                <Form className="space-y-6">
                    {/* Plan details */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <SectionHeader title="Plan details" subtitle="Core plan information" />

                        <div className="space-y-5">
                            <div>
                                <label className={labelClass}>Plan name</label>
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="e.g. Pro Plan"
                                    className={inputClass}
                                />
                                <ErrorMessage name="name" component="p" className="text-red-500 text-xs mt-1" />
                            </div>

                            <div>
                                <label className={labelClass}>Short description</label>
                                <Field
                                    as="textarea"
                                    rows="3"
                                    name="short_description"
                                    placeholder="Best for growing teams and businesses needing advanced capabilities."
                                    className={`${inputClass} resize-none`}
                                />
                                <p className="text-xs text-slate-400 mt-1.5">
                                    Shown under the plan name on the pricing card.
                                </p>
                                <ErrorMessage name="short_description" component="p" className="text-red-500 text-xs mt-1" />
                            </div>

                            <div className="space-y-4 pt-2 border-t border-slate-100">
                                <ToggleSwitch
                                    name="is_active"
                                    label="Active"
                                    description="Visible and purchasable by customers."
                                />
                                <ToggleSwitch
                                    name="is_featured"
                                    label="Featured"
                                    description="Highlighted as the recommended plan."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <SectionHeader
                            title="Pricing"
                            subtitle="Add a price for each billing option (e.g. monthly, yearly)."
                        />
                        <FieldArray name="prices">
                            {(arrayHelpers) => (
                                <>
                                    {values.prices && values.prices.length > 0 && (
                                        values.prices.map((price, index) => (
                                            <div key={index} className="border border-slate-200 rounded-lg p-5 bg-slate-50/40 mb-4">
                                                <div className="flex items-start justify-between mb-4">
                                                    <ItemBadge label={"Price " + (index + 1)} />
                                                    <RemoveButton onClickEvent={() => arrayHelpers.remove(index)} />
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <div>
                                                            <label className={labelClass}>Billing cycle</label>
                                                            <Field
                                                                as="select"
                                                                name={'prices.' + index + '.type'}
                                                                className={inputClass}
                                                            >
                                                                {billing_cycles.map((billing_cycle, index) => (
                                                                    <option key={index} value={billing_cycle.value}>
                                                                        {billing_cycle.name}
                                                                    </option>
                                                                ))}
                                                            </Field>
                                                            <ErrorMessage name={'prices.' + index + '.type'} component="p" className="text-red-500 text-xs mt-1" />
                                                        </div>
                                                        <div>
                                                            <label className={labelClass}>Price (USD)</label>
                                                            <Field
                                                                type="number"
                                                                min="0"
                                                                step="0.01"
                                                                name={'prices.' + index + '.price'}
                                                                placeholder="49.00"
                                                                className={inputClass}
                                                            />
                                                            <ErrorMessage name={'prices.' + index + '.price'} component="p" className="text-red-500 text-xs mt-1" />
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <div>
                                                            <label className={labelClass}>Discount Type</label>
                                                            <SelectField name={'prices.' + index + '.discount_type'}>
                                                                <option value="">Select Discount Type</option>
                                                                <option value="percentage">Percentage</option>
                                                                <option value="amount">Amount</option>
                                                            </SelectField>
                                                        </div>
                                                        <div>
                                                            <label className={labelClass}>Discount Amount</label>
                                                            <Field
                                                                type="number"
                                                                name={'prices.' + index + '.discount_value'}
                                                                placeholder="1"
                                                                className={inputClass}
                                                            />
                                                            <ErrorMessage name={'prices.' + index + '.discount_value'} component="p" className="text-red-500 text-xs mt-1" />
                                                        </div>
                                                    </div>
                                                    <ToggleSwitch name={'prices.' + index + '.is_active'} label="Active" description="" />
                                                </div>
                                            </div>
                                        )))
                                    }
                                    <AddNewButton onClickEvent={() =>
                                        arrayHelpers.push({
                                            type: "monthly",
                                            price: "",
                                            discount_type: "",
                                            discount_value: 0,
                                            is_active: true,
                                        })
                                    } label="Add another price" />
                                </>
                            )}
                        </FieldArray>

                    </div>

                    {/* Features */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <SectionHeader
                            title="Features"
                            subtitle="Each row becomes one bullet point on the plan's feature list."
                        />
                        <FieldArray name="features">
                            {(arrayHelpers) => (
                                <>
                                    {values.features && values.features.length > 0 && (
                                        values.features.map((feature, index) => (
                                            <div key={index} className="border border-slate-200 rounded-lg p-5 bg-slate-50/40 mb-4">
                                                <div className="flex items-start justify-between mb-4">
                                                    <ItemBadge label={`Feature ${index + 1}`} />
                                                    <RemoveButton onClickEvent={() => arrayHelpers.remove(index)} />
                                                </div>

                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                    <div>
                                                        <label className={`${labelClass} flex items-center gap-2`}>
                                                            Feature key
                                                            <span className="text-[10px] font-medium text-slate-400 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded normal-case">
                                                                internal
                                                            </span>
                                                        </label>
                                                        <Field
                                                            type="text"
                                                            name={'features.' + index + '.feature_key'}
                                                            placeholder="e.g. storage_limit"
                                                            className={inputClass}
                                                        />
                                                        <ErrorMessage name={'features.' + index + '.feature_key'} component="p" className="text-red-500 text-xs mt-1" />
                                                    </div>
                                                    <div>
                                                        <label className={labelClass}>Feature value</label>
                                                        <Field
                                                            type="text"
                                                            name={'features.' + index + '.feature_value'}
                                                            placeholder="e.g. 100"
                                                            className={inputClass}
                                                        />
                                                        <ErrorMessage name={'features.' + index + '.feature_value'} component="p" className="text-red-500 text-xs mt-1" />
                                                    </div>
                                                    <div>
                                                        <label className={labelClass}>Display text</label>
                                                        <Field
                                                            type="text"
                                                            name={'features.' + index + '.feature_text'}
                                                            placeholder="e.g. 100 GB Storage"
                                                            className={inputClass}
                                                        />
                                                        <ErrorMessage name={'features.' + index + '.feature_text'} component="p" className="text-red-500 text-xs mt-1" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}

                                    <AddNewButton onClickEvent={() =>
                                        arrayHelpers.push({
                                            feature_key: "",
                                            feature_value: "",
                                            feature_text: "",
                                        })
                                    } label="Add another feature" />
                                </>
                            )}
                        </FieldArray>
                    </div>

                    {/* Footer actions — screenshot 3 style */}
                    <div className="flex items-center justify-end gap-3 pt-2">
                        <Link
                            to="/admin/subscription-plans"
                            className="px-5 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold rounded-lg transition-all cursor-pointer text-sm"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 disabled:opacity-60 text-white font-semibold rounded-lg transition-all cursor-pointer text-sm"
                        >
                            Create plan
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
