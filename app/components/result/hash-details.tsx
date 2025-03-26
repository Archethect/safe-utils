import InputField from "./input-field";

interface HashDetailsProps {
  safeTxHash?: string;
  domainHash?: string;
  messageHash?: string;
  className?: string;
}

export default function HashDetails({ 
  safeTxHash = "", 
  domainHash = "", 
  messageHash = "",
  className = ""
}: HashDetailsProps) {
  return (
    <div className={`space-y-5 ${className}`}>
      <div className="border rounded-md p-4 space-y-3 dark:border-gray-200">
        <InputField label="SafeTxHash" value={safeTxHash} isLong isHash/>
        <InputField label="Domain Hash" value={domainHash} isLong isHash/>
        <InputField label="Message Hash" value={messageHash} isLong isHash border={false}/>
      </div>
    </div>
  );
}