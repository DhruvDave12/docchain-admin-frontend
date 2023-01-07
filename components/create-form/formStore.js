import create from 'zustand'

import moment from 'moment'

const useFormStore = create((set) => ({
	title: '',
	academicYear: '',
	deadline: '',
	description: '',

	selectedCheckboxOptions: [],

	customDocs: [{ title: null, isDeleted: false }],

	formId: 0,

	onTitleChange: (newTitle) => set(() => ({ title: newTitle })),
	onAcademicYearChange: (newAcademicYear) =>
		set(() => ({ academicYear: newAcademicYear })),
	onDeadlineChange: (newDeadline) =>
		set(() => {
			const parsedDate = moment(newDeadline).format('YYYY-MM-DD')
			return { deadline: parsedDate }
		}),
	onDescriptionChange: (newDescription) =>
		set(() => ({ description: newDescription })),

	selectCheckboxOption: (value) =>
		set((state) => ({
			selectedCheckboxOptions: [...state.selectedCheckboxOptions, value],
		})),
	unselectCheckboxOption: (value) =>
		set((state) => ({
			selectedCheckboxOptions: state.selectedCheckboxOptions.filter(
				(option) => option !== value
			),
		})),

	addCustomDocComponent: () =>
		set((state) => ({
			customDocs: [...state.customDocs, { title: null, isDeleted: false }],
		})),
	deleteCustomDocComponent: (index) =>
		set((state) => {
			const newCustomDocs = [...state.customDocs]
			newCustomDocs[index].isDeleted = true
			return { customDocs: newCustomDocs }
		}),
	changeCustomDocTitleByIndex: (index, newVal) =>
		set((state) => {
			const newCustomDocs = [...state.customDocs]
			newCustomDocs[index].title = newVal
			return { customDocs: newCustomDocs }
		}),

	setFormId: (newFormId) => set(() => ({ formId: newFormId })),
}))

export default useFormStore
