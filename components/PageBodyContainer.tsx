const PageBodyContainer = ({ children }) => (
  <div className="min-h-screen grid grid-cols-12 gap-4">
    <div className="col-span-12 px-4 xl:col-start-2 xl:col-span-10">
      {children}
    </div>
  </div>
)

export default PageBodyContainer
