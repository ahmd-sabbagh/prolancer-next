type SkillItemProps = {
  label: string
  value?: number
}

export function SkillItem({ label, value = 60 }: SkillItemProps) {
  return (
    <div className="w-full">
      <div className="text-gray-700 font-medium mb-2">
        {label}
      </div>

      <div className="h-[4px] w-full bg-gray-200 overflow-hidden">
        <div
          className="h-full bg-emerald-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}
