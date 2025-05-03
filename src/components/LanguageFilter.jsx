"use client"

function LanguageFilter({ languages, selectedLanguage, setSelectedLanguage }) {
  return (
    <select
      value={selectedLanguage}
      onChange={(e) => setSelectedLanguage(e.target.value)}
      className="w-full px-4 py-2 border rounded-md appearance-none"
    >
      <option value="all">Filter by Language</option>
      {languages.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  )
}

export default LanguageFilter
