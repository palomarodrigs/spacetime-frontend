export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="loading-relaxed w-[360px] text-center">
        Você ainda não registrou nenhuma lembrança, comece a{" "}
        <a href="" className="underline hover:text-gray-50">
          criar agora
        </a>
        !
      </p>
    </div>
  );
}
