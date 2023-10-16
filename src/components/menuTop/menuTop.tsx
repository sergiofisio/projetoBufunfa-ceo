interface MenuTopProps {
  label: string
}

export function MenuTop({ label }: MenuTopProps) {
  return (
    <div className="flex fixed top-0 w-screen justify-center rounded-b-[11px] bg-purpleDark">
      <span className="mb-[38.5px] mt-[38.5px] text-subTitle text-white">{label}</span>
    </div>
  )
}