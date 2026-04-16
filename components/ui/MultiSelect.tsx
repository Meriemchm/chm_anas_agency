"use client";

import Select from "react-select";

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
}

const MultiSelect = ({ options, value, onChange, error }: Props) => {
  const formattedOptions: Option[] = options.map((opt) => ({
    label: opt,
    value: opt,
  }));

  const selectedValues = formattedOptions.filter((opt) =>
    value.includes(opt.value),
  );

  return (
    <div className="w-full space-y-2">
      <Select
        instanceId="service-select" // ✅ FIX HYDRATION
        isMulti
        options={formattedOptions}
        value={selectedValues}
        onChange={(selected) => onChange(selected.map((item) => item.value))}
        placeholder="Type de service"
        className="text-sm"
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: "transparent",
            border: "none",
            borderBottom: "1px solid #d1d5db",
            borderRadius: 0,
            boxShadow: "none",
            padding: "4px 0",
          }),
          multiValue: (base) => ({
            ...base,
            backgroundColor: "#000",
            color: "#fff",
          }),
          multiValueLabel: (base) => ({
            ...base,
            color: "#fff",
          }),
          multiValueRemove: (base) => ({
            ...base,
            color: "#fff",
            ":hover": {
              backgroundColor: "#333",
              color: "#fff",
            },
          }),
          placeholder: (base) => ({
            ...base,
            color: "#9ca3af",
          }),
        }}
      />

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default MultiSelect;
